const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { imageQueries, likeQueries } = require("../database");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

const ADMIN_EMAIL = "s23046@gsm.hs.kr";

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

// uploads 폴더 생성
const uploadsDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadsDir)) {
	fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer 설정 (파일 업로드)
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, uploadsDir);
	},
	filename: (req, file, cb) => {
		// 파일명: timestamp-originalname
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		const ext = path.extname(file.originalname);
		const nameWithoutExt = path.basename(file.originalname, ext);
		cb(null, `${nameWithoutExt}-${uniqueSuffix}${ext}`);
	},
});

const fileFilter = (req, file, cb) => {
	// 이미지 파일만 허용
	const allowedTypes = [
		"image/jpeg",
		"image/jpg",
		"image/png",
		"image/gif",
		"image/webp",
	];

	if (allowedTypes.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(
			new Error("이미지 파일만 업로드 가능합니다. (JPG, PNG, GIF, WEBP)"),
			false
		);
	}
};

const upload = multer({
	storage,
	fileFilter,
	limits: {
		fileSize: 30 * 1024 * 1024,
	},
});

// 이미지 업로드
router.post(
	"/upload",
	authMiddleware,
	upload.single("image"),
	async (req, res) => {
		try {
			if (!req.file) {
				return res.status(400).json({
					success: false,
					message: "이미지 파일을 선택해주세요.",
				});
			}

			// DB에 이미지 정보 저장
			const result = await imageQueries.create.run(
				req.file.filename,
				req.file.originalname,
				req.user.email,
				req.file.path,
				req.file.size,
				req.file.mimetype
			);

			res.status(201).json({
				success: true,
				message: "이미지가 성공적으로 업로드되었습니다.",
				image: {
					id: result.lastID,
					filename: req.file.filename,
					originalName: req.file.originalname,
					uploadedBy: req.user.email,
					size: req.file.size,
					url: `/api/images/${req.file.filename}`,
				},
			});
		} catch (error) {
			console.error("Upload error:", error);

			// 업로드 실패 시 파일 삭제
			if (req.file && fs.existsSync(req.file.path)) {
				fs.unlinkSync(req.file.path);
			}

			res.status(500).json({
				success: false,
				message: "이미지 업로드 중 오류가 발생했습니다.",
			});
		}
	}
);

// 모든 이미지 목록 조회
router.get("/list", authMiddleware, async (req, res) => {
	try {
		const images = await imageQueries.findAll.all();

		const imageListWithLikes = await Promise.all(
			images.map(async (img) => {
				const likeCount = await likeQueries.count.get(img.id);
				const isLiked = await likeQueries.check.get(
					img.id,
					req.user.email
				);
				return {
					id: img.id,
					filename: img.filename,
					originalName: img.original_name,
					uploadedBy: img.uploaded_by,
					uploadedByName: getNameFromEmail(img.uploaded_by),
					size: img.file_size,
					mimeType: img.mime_type,
					createdAt: img.created_at,
					url: `/api/images/${img.filename}`,
					likeCount,
					isLiked,
				};
			})
		);

		res.json({
			success: true,
			count: imageListWithLikes.length,
			images: imageListWithLikes,
			isAdmin: req.user.email === ADMIN_EMAIL,
		});
	} catch (error) {
		console.error("Get images error:", error);
		res.status(500).json({
			success: false,
			message: "이미지 목록 조회 중 오류가 발생했습니다.",
		});
	}
});

// 내가 업로드한 이미지 목록 조회
router.get("/my-images", authMiddleware, async (req, res) => {
	try {
		const myImages = await imageQueries.findByUser.all(req.user.email);

		const imageListWithLikes = await Promise.all(
			myImages.map(async (img) => {
				const likeCount = await likeQueries.count.get(img.id);
				const isLiked = await likeQueries.check.get(
					img.id,
					req.user.email
				);
				return {
					id: img.id,
					filename: img.filename,
					originalName: img.original_name,
					uploadedBy: img.uploaded_by,
					uploadedByName: getNameFromEmail(img.uploaded_by),
					size: img.file_size,
					mimeType: img.mime_type,
					createdAt: img.created_at,
					url: `/api/images/${img.filename}`,
					likeCount,
					isLiked,
				};
			})
		);

		res.json({
			success: true,
			count: imageListWithLikes.length,
			images: imageListWithLikes,
		});
	} catch (error) {
		console.error("Get my images error:", error);
		res.status(500).json({
			success: false,
			message: "내 이미지 목록 조회 중 오류가 발생했습니다.",
		});
	}
});

// 특정 이미지 파일 제공
router.get("/:filename", (req, res) => {
	try {
		const filename = req.params.filename;
		const filePath = path.join(uploadsDir, filename);

		// 파일 존재 확인
		if (!fs.existsSync(filePath)) {
			return res.status(404).json({
				success: false,
				message: "이미지를 찾을 수 없습니다.",
			});
		}

		// 파일 전송
		res.sendFile(filePath);
	} catch (error) {
		console.error("Get image error:", error);
		res.status(500).json({
			success: false,
			message: "이미지 조회 중 오류가 발생했습니다.",
		});
	}
});

// 이미지 좋아요 토글
router.post("/:id/like", authMiddleware, async (req, res) => {
	try {
		const imageId = req.params.id;
		const image = await imageQueries.findById.get(imageId);

		if (!image) {
			return res.status(404).json({
				success: false,
				message: "이미지를 찾을 수 없습니다.",
			});
		}

		const result = await likeQueries.toggle.run(imageId, req.user.email);
		const likeCount = await likeQueries.count.get(imageId);

		res.json({
			success: true,
			liked: result.liked,
			likeCount,
		});
	} catch (error) {
		console.error("Toggle like error:", error);
		res.status(500).json({
			success: false,
			message: "좋아요 처리 중 오류가 발생했습니다.",
		});
	}
});

// 이미지 삭제
router.delete("/:id", authMiddleware, async (req, res) => {
	try {
		const imageId = req.params.id;
		const image = await imageQueries.findById.get(imageId);

		if (!image) {
			return res.status(404).json({
				success: false,
				message: "이미지를 찾을 수 없습니다.",
			});
		}

		if (
			image.uploaded_by !== req.user.email &&
			req.user.email !== ADMIN_EMAIL
		) {
			return res.status(403).json({
				success: false,
				message: "본인이 업로드한 이미지만 삭제할 수 있습니다.",
			});
		}

		if (fs.existsSync(image.file_path)) {
			fs.unlinkSync(image.file_path);
		}

		await imageQueries.delete.run(imageId);

		res.json({
			success: true,
			message: "이미지가 삭제되었습니다.",
		});
	} catch (error) {
		console.error("Delete image error:", error);
		res.status(500).json({
			success: false,
			message: "이미지 삭제 중 오류가 발생했습니다.",
		});
	}
});

module.exports = router;
