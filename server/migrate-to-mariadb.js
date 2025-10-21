require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();
const mysql = require("mysql2/promise");
const path = require("path");

const SQLITE_DB_PATH = path.join(__dirname, "fanfantv.db");

// SQLite 연결
const sqliteDb = new sqlite3.Database(SQLITE_DB_PATH, (err) => {
	if (err) {
		console.error("SQLite connection error:", err);
		process.exit(1);
	}
	console.log("✅ Connected to SQLite database");
});

// MariaDB 연결
let mariaDbPool;

const connectMariaDB = async () => {
	try {
		mariaDbPool = await mysql.createPool({
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			port: process.env.DB_PORT || 3306,
			waitForConnections: true,
			connectionLimit: 10,
		});
		console.log("✅ Connected to MariaDB database");
	} catch (err) {
		console.error("❌ MariaDB connection error:", err);
		process.exit(1);
	}
};

// SQLite에서 데이터 읽기
const getSQLiteData = (query) => {
	return new Promise((resolve, reject) => {
		sqliteDb.all(query, [], (err, rows) => {
			if (err) reject(err);
			else resolve(rows);
		});
	});
};

// 마이그레이션 실행
const migrateData = async () => {
	try {
		await connectMariaDB();
		const connection = await mariaDbPool.getConnection();

		console.log("\n🔄 Starting migration...\n");

		// 1. Users 테이블 마이그레이션
		console.log("📦 Migrating users table...");
		const users = await getSQLiteData("SELECT * FROM users");
		console.log(`Found ${users.length} users`);

		for (const user of users) {
			try {
				await connection.execute(
					"INSERT INTO users (id, email, password, name, created_at) VALUES (?, ?, ?, ?, ?)",
					[
						user.id,
						user.email,
						user.password,
						user.name,
						user.created_at,
					]
				);
				console.log(`  ✓ Migrated user: ${user.email}`);
			} catch (err) {
				if (err.code === "ER_DUP_ENTRY") {
					console.log(`  ⚠ User already exists: ${user.email}`);
				} else {
					console.error(
						`  ✗ Error migrating user ${user.email}:`,
						err.message
					);
				}
			}
		}

		// 2. Images 테이블 마이그레이션
		console.log("\n📦 Migrating images table...");
		const images = await getSQLiteData("SELECT * FROM images");
		console.log(`Found ${images.length} images`);

		for (const image of images) {
			try {
				await connection.execute(
					"INSERT INTO images (id, filename, original_name, uploaded_by, file_path, file_size, mime_type, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
					[
						image.id,
						image.filename,
						image.original_name,
						image.uploaded_by,
						image.file_path,
						image.file_size,
						image.mime_type,
						image.created_at,
					]
				);
				console.log(`  ✓ Migrated image: ${image.filename}`);
			} catch (err) {
				if (err.code === "ER_DUP_ENTRY") {
					console.log(`  ⚠ Image already exists: ${image.filename}`);
				} else {
					console.error(
						`  ✗ Error migrating image ${image.filename}:`,
						err.message
					);
				}
			}
		}

		// 3. Likes 테이블 마이그레이션
		console.log("\n📦 Migrating likes table...");
		const likes = await getSQLiteData("SELECT * FROM likes");
		console.log(`Found ${likes.length} likes`);

		for (const like of likes) {
			try {
				await connection.execute(
					"INSERT INTO likes (id, image_id, user_email, created_at) VALUES (?, ?, ?, ?)",
					[like.id, like.image_id, like.user_email, like.created_at]
				);
				console.log(
					`  ✓ Migrated like: image_id=${like.image_id}, user=${like.user_email}`
				);
			} catch (err) {
				if (err.code === "ER_DUP_ENTRY") {
					console.log(
						`  ⚠ Like already exists: image_id=${like.image_id}, user=${like.user_email}`
					);
				} else {
					console.error(`  ✗ Error migrating like:`, err.message);
				}
			}
		}

		connection.release();

		console.log("\n✅ Migration completed successfully!");
		console.log("\n📊 Summary:");
		console.log(`  - Users: ${users.length}`);
		console.log(`  - Images: ${images.length}`);
		console.log(`  - Likes: ${likes.length}`);
	} catch (err) {
		console.error("\n❌ Migration failed:", err);
	} finally {
		sqliteDb.close();
		if (mariaDbPool) {
			await mariaDbPool.end();
		}
		process.exit(0);
	}
};

// 실행
migrateData();
