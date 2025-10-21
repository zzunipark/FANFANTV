require("dotenv").config();
const mysql = require("mysql2/promise");

// MariaDB 연결 풀 생성
const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT || 3306,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

// 연결 테스트
pool.getConnection()
	.then((connection) => {
		console.log("Connected to MariaDB database");
		connection.release();
	})
	.catch((err) => {
		console.error("Database connection error:", err);
	});

const initDatabase = async () => {
	try {
		const connection = await pool.getConnection();

		// users 테이블 생성
		await connection.query(`
			CREATE TABLE IF NOT EXISTS users (
				id INT AUTO_INCREMENT PRIMARY KEY,
				email VARCHAR(255) UNIQUE NOT NULL,
				password VARCHAR(255) NOT NULL,
				name VARCHAR(255),
				created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
		`);
		console.log("Users table created or already exists");

		// images 테이블 생성
		await connection.query(`
			CREATE TABLE IF NOT EXISTS images (
				id INT AUTO_INCREMENT PRIMARY KEY,
				filename VARCHAR(255) NOT NULL,
				original_name VARCHAR(255) NOT NULL,
				uploaded_by VARCHAR(255) NOT NULL,
				file_path VARCHAR(500) NOT NULL,
				file_size BIGINT,
				mime_type VARCHAR(100),
				created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
				INDEX idx_uploaded_by (uploaded_by),
				INDEX idx_created_at (created_at)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
		`);
		console.log("Images table created or already exists");

		// likes 테이블 생성
		await connection.query(`
			CREATE TABLE IF NOT EXISTS likes (
				id INT AUTO_INCREMENT PRIMARY KEY,
				image_id INT NOT NULL,
				user_email VARCHAR(255) NOT NULL,
				created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
				UNIQUE KEY unique_like (image_id, user_email),
				FOREIGN KEY (image_id) REFERENCES images(id) ON DELETE CASCADE,
				INDEX idx_image_id (image_id),
				INDEX idx_user_email (user_email)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
		`);
		console.log("Likes table created or already exists");

		connection.release();
		console.log("Database tables initialized successfully");
	} catch (err) {
		console.error("Error initializing database:", err);
		throw err;
	}
};

const runQuery = async (query, params = []) => {
	const [result] = await pool.execute(query, params);
	return { lastID: result.insertId, changes: result.affectedRows };
};

const getQuery = async (query, params = []) => {
	const [rows] = await pool.execute(query, params);
	return rows[0] || null;
};

const allQuery = async (query, params = []) => {
	const [rows] = await pool.execute(query, params);
	return rows;
};

const userQueries = {
	create: {
		run: async (email, password, name) => {
			return await runQuery(
				"INSERT INTO users (email, password, name) VALUES (?, ?, ?)",
				[email, password, name]
			);
		},
	},
	findByEmail: {
		get: async (email) => {
			return await getQuery("SELECT * FROM users WHERE email = ?", [
				email,
			]);
		},
	},
	findById: {
		get: async (id) => {
			return await getQuery(
				"SELECT id, email, name, created_at FROM users WHERE id = ?",
				[id]
			);
		},
	},
	findAll: {
		all: async () => {
			return await allQuery(
				"SELECT id, email, name, created_at FROM users ORDER BY created_at DESC"
			);
		},
	},
};

const imageQueries = {
	create: {
		run: async (
			filename,
			original_name,
			uploaded_by,
			file_path,
			file_size,
			mime_type
		) => {
			return await runQuery(
				"INSERT INTO images (filename, original_name, uploaded_by, file_path, file_size, mime_type) VALUES (?, ?, ?, ?, ?, ?)",
				[
					filename,
					original_name,
					uploaded_by,
					file_path,
					file_size,
					mime_type,
				]
			);
		},
	},
	findAll: {
		all: async () => {
			return await allQuery(
				"SELECT * FROM images ORDER BY created_at DESC"
			);
		},
	},
	findById: {
		get: async (id) => {
			return await getQuery("SELECT * FROM images WHERE id = ?", [id]);
		},
	},
	findByUser: {
		all: async (email) => {
			return await allQuery(
				"SELECT * FROM images WHERE uploaded_by = ? ORDER BY created_at DESC",
				[email]
			);
		},
	},
	delete: {
		run: async (id) => {
			return await runQuery("DELETE FROM images WHERE id = ?", [id]);
		},
	},
};

const likeQueries = {
	toggle: {
		run: async (imageId, userEmail) => {
			const existing = await getQuery(
				"SELECT * FROM likes WHERE image_id = ? AND user_email = ?",
				[imageId, userEmail]
			);
			if (existing) {
				await runQuery(
					"DELETE FROM likes WHERE image_id = ? AND user_email = ?",
					[imageId, userEmail]
				);
				return { liked: false };
			} else {
				await runQuery(
					"INSERT INTO likes (image_id, user_email) VALUES (?, ?)",
					[imageId, userEmail]
				);
				return { liked: true };
			}
		},
	},
	count: {
		get: async (imageId) => {
			const result = await getQuery(
				"SELECT COUNT(*) as count FROM likes WHERE image_id = ?",
				[imageId]
			);
			return result.count;
		},
	},
	check: {
		get: async (imageId, userEmail) => {
			const result = await getQuery(
				"SELECT * FROM likes WHERE image_id = ? AND user_email = ?",
				[imageId, userEmail]
			);
			return !!result;
		},
	},
};

module.exports = {
	pool,
	initDatabase,
	userQueries,
	imageQueries,
	likeQueries,
};
