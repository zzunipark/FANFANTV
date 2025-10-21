require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { initDatabase } = require("./database");

const app = express();
const PORT = process.env.PORT || 5000;

// 미들웨어
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 데이터베이스 초기화
initDatabase().catch((err) => {
	console.error("Failed to initialize database:", err);
	process.exit(1);
});

// 라우트
app.use("/api/auth", require("./routes/auth"));
app.use("/api/images", require("./routes/images"));

// 정적 파일 제공 (업로드된 이미지)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// 헬스 체크
app.get("/api/health", (req, res) => {
	res.json({
		success: true,
		message: "FANFANTV Server is running!",
		timestamp: new Date().toISOString(),
	});
});

// 404 처리
app.use((req, res) => {
	res.status(404).json({
		success: false,
		message: "요청하신 리소스를 찾을 수 없습니다.",
	});
});

// 에러 핸들링
app.use((err, req, res, next) => {
	console.error("Error:", err);

	if (err instanceof multer.MulterError) {
		if (err.code === "LIMIT_FILE_SIZE") {
			return res.status(400).json({
				success: false,
				message: "파일 크기는 10MB를 초과할 수 없습니다.",
			});
		}
	}

	res.status(500).json({
		success: false,
		message: err.message || "서버 오류가 발생했습니다.",
	});
});

// 서버 시작
app.listen(PORT, () => {
	console.log("=================================");
	console.log("🚀 FANFANTV Server Started!");
	console.log(`📡 Server running on http://localhost:${PORT}`);
	console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
	console.log("=================================");
});

module.exports = app;
