const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
	try {
		// Authorization 헤더에서 토큰 가져오기
		const authHeader = req.headers.authorization;

		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			return res.status(401).json({
				success: false,
				message: "인증 토큰이 필요합니다.",
			});
		}

		const token = authHeader.substring(7); // "Bearer " 제거

		// 토큰 검증
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		// 요청 객체에 사용자 정보 추가
		req.user = {
			id: decoded.id,
			email: decoded.email,
		};

		next();
	} catch (error) {
		if (error.name === "JsonWebTokenError") {
			return res.status(401).json({
				success: false,
				message: "유효하지 않은 토큰입니다.",
			});
		}
		if (error.name === "TokenExpiredError") {
			return res.status(401).json({
				success: false,
				message: "토큰이 만료되었습니다.",
			});
		}
		return res.status(500).json({
			success: false,
			message: "인증 처리 중 오류가 발생했습니다.",
		});
	}
};

module.exports = authMiddleware;
