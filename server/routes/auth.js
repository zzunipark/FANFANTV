const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { userQueries } = require("../database");

const router = express.Router();

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

const getNameFromEmail = (email) => {
	return studentNameMap[email] || email;
};

// 회원가입
router.post("/signup", async (req, res) => {
	try {
		const { email, password } = req.body;

		// 입력 검증
		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: "이메일과 비밀번호를 모두 입력해주세요.",
			});
		}

		// 이메일 형식 검증
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({
				success: false,
				message: "유효하지 않은 이메일 주소입니다.",
			});
		}

		// 비밀번호 길이 검증
		if (password.length < 6) {
			return res.status(400).json({
				success: false,
				message: "비밀번호는 최소 6자 이상이어야 합니다.",
			});
		}

		// 이미 존재하는 사용자 확인
		const existingUser = await userQueries.findByEmail.get(email);
		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "이미 가입된 이메일입니다.",
			});
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const name = getNameFromEmail(email);
		const result = await userQueries.create.run(
			email,
			hashedPassword,
			name
		);

		const token = jwt.sign(
			{ id: result.lastID, email },
			process.env.JWT_SECRET,
			{ expiresIn: "7d" }
		);

		res.status(201).json({
			success: true,
			message: "회원가입이 완료되었습니다.",
			token,
			user: {
				id: result.lastID,
				email,
				name,
			},
		});
	} catch (error) {
		console.error("Signup error:", error);
		res.status(500).json({
			success: false,
			message: "회원가입 중 오류가 발생했습니다.",
		});
	}
});

// 로그인
router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		// 입력 검증
		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: "이메일과 비밀번호를 모두 입력해주세요.",
				code: "auth/missing-fields",
			});
		}

		// 사용자 찾기
		const user = await userQueries.findByEmail.get(email);
		if (!user) {
			return res.status(401).json({
				success: false,
				message: "이메일에 해당하는 계정이 없습니다.",
				code: "auth/user-not-found",
			});
		}

		// 비밀번호 확인
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(401).json({
				success: false,
				message: "비밀번호가 일치하지 않습니다.",
				code: "auth/wrong-password",
			});
		}

		// JWT 토큰 생성
		const token = jwt.sign(
			{ id: user.id, email: user.email },
			process.env.JWT_SECRET,
			{ expiresIn: "7d" }
		);

		res.json({
			success: true,
			message: "로그인 성공",
			token,
			user: {
				id: user.id,
				email: user.email,
				name: user.name || getNameFromEmail(user.email),
			},
		});
	} catch (error) {
		console.error("Login error:", error);
		res.status(500).json({
			success: false,
			message:
				"로그인 중 오류가 발생했습니다. 잠시 후 다시 시도하십시오.",
			code: "auth/server-error",
		});
	}
});

// 비밀번호 재설정 (간단한 구현)
router.post("/reset-password", async (req, res) => {
	try {
		const { email } = req.body;

		if (!email) {
			return res.status(400).json({
				success: false,
				message: "이메일을 입력해주세요.",
			});
		}

		const user = await userQueries.findByEmail.get(email);
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "해당 이메일로 가입된 계정이 없습니다.",
				code: "auth/user-not-found",
			});
		}

		// 실제 프로덕션에서는 이메일 전송 로직이 필요합니다
		// 여기서는 간단히 성공 응답만 반환
		res.json({
			success: true,
			message: "비밀번호 재설정 링크가 이메일로 전송되었습니다.",
		});
	} catch (error) {
		console.error("Reset password error:", error);
		res.status(500).json({
			success: false,
			message: "비밀번호 재설정 중 오류가 발생했습니다.",
		});
	}
});

// 현재 사용자 정보 조회 (인증 필요)
router.get("/me", require("../middleware/auth"), async (req, res) => {
	try {
		const user = await userQueries.findById.get(req.user.id);

		if (!user) {
			return res.status(404).json({
				success: false,
				message: "사용자를 찾을 수 없습니다.",
			});
		}

		res.json({
			success: true,
			user: {
				id: user.id,
				email: user.email,
				name: user.name || getNameFromEmail(user.email),
				created_at: user.created_at,
			},
		});
	} catch (error) {
		console.error("Get user error:", error);
		res.status(500).json({
			success: false,
			message: "사용자 정보 조회 중 오류가 발생했습니다.",
		});
	}
});

module.exports = router;
