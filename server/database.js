const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const DB_PATH = path.join(__dirname, "fanfantv.db");

const db = new sqlite3.Database(DB_PATH, (err) => {
	if (err) {
		console.error("Database connection error:", err);
	} else {
		console.log("Connected to SQLite database");
	}
});

const initDatabase = () => {
	return new Promise((resolve, reject) => {
		db.serialize(() => {
			db.run(
				`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL,
          name TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `,
				(err) => {
					if (err) console.error("Error creating users table:", err);
				}
			);

			db.run(
				`
        CREATE TABLE IF NOT EXISTS images (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          filename TEXT NOT NULL,
          original_name TEXT NOT NULL,
          uploaded_by TEXT NOT NULL,
          file_path TEXT NOT NULL,
          file_size INTEGER,
          mime_type TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `,
				(err) => {
					if (err) {
						console.error("Error creating images table:", err);
						reject(err);
					} else {
						console.log("Database tables initialized successfully");
						resolve();
					}
				}
			);
		});
	});
};

const runQuery = (query, params = []) => {
	return new Promise((resolve, reject) => {
		db.run(query, params, function (err) {
			if (err) reject(err);
			else resolve({ lastID: this.lastID, changes: this.changes });
		});
	});
};

const getQuery = (query, params = []) => {
	return new Promise((resolve, reject) => {
		db.get(query, params, (err, row) => {
			if (err) reject(err);
			else resolve(row);
		});
	});
};

const allQuery = (query, params = []) => {
	return new Promise((resolve, reject) => {
		db.all(query, params, (err, rows) => {
			if (err) reject(err);
			else resolve(rows);
		});
	});
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

module.exports = {
	db,
	initDatabase,
	userQueries,
	imageQueries,
};
