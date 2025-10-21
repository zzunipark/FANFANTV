const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const DB_PATH = path.join(__dirname, "fanfantv.db");

const studentNameMap = {
	"s23037@gsm.hs.kr": "김동학",
	"s23038@gsm.hs.kr": "김서준",
	"s23039@gsm.hs.kr": "김시후",
	"s23040@gsm.hs.kr": "김예찬",
	"s23041@gsm.hs.kr": "김유성",
	"s23042@gsm.hs.kr": "김은후",
	"s23043@gsm.hs.kr": "나윤후",
	"s23044@gsm.hs.kr": "민우석",
	"s23045@gsm.hs.kr": "박미리",
	"s23046@gsm.hs.kr": "박민준",
	"s23047@gsm.hs.kr": "백송주",
	"s23048@gsm.hs.kr": "변승규",
	"s23049@gsm.hs.kr": "변정현",
	"s23050@gsm.hs.kr": "서지완",
	"s23051@gsm.hs.kr": "이건주",
	"s23052@gsm.hs.kr": "정승표",
	"s23053@gsm.hs.kr": "주경주",
	"s23054@gsm.hs.kr": "진건희",
};

const db = new sqlite3.Database(DB_PATH, (err) => {
	if (err) {
		console.error("Database connection error:", err);
		process.exit(1);
	} else {
		console.log("✅ Connected to SQLite database");
	}
});

db.serialize(() => {
	db.run(`ALTER TABLE users ADD COLUMN name TEXT`, (err) => {
		if (err) {
			console.log('⚠️  Column "name" might already exist (this is OK)');
		} else {
			console.log('✅ Added "name" column to users table');
		}
	});

	db.all("SELECT id, email FROM users", [], (err, rows) => {
		if (err) {
			console.error("❌ Error reading users:", err);
			process.exit(1);
		}

		console.log(`\n📊 Found ${rows.length} users to update`);

		let updated = 0;
		let skipped = 0;

		rows.forEach((row) => {
			const name = studentNameMap[row.email];
			if (name) {
				db.run(
					"UPDATE users SET name = ? WHERE id = ?",
					[name, row.id],
					(err) => {
						if (err) {
							console.error(
								`❌ Error updating ${row.email}:`,
								err
							);
						} else {
							console.log(`✅ Updated: ${row.email} → ${name}`);
							updated++;
						}
					}
				);
			} else {
				console.log(`⏭️  Skipped: ${row.email} (not in mapping)`);
				skipped++;
			}
		});

		setTimeout(() => {
			console.log(`\n📈 Migration Summary:`);
			console.log(`   Updated: ${updated}`);
			console.log(`   Skipped: ${skipped}`);
			console.log(`   Total: ${rows.length}`);
			console.log(`\n✨ Migration complete!`);
			db.close();
		}, 1000);
	});
});
