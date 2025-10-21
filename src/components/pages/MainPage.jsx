import React, { useEffect, useState } from "react";
import * as s from "../style/MainPageStyle";
import { authAPI, imageAPI } from "../../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faImages,
	faUser,
	faUpload,
	faRightFromBracket,
	faRightToBracket,
	faUserPlus,
	faBell,
	faTimes,
	faTrash,
	faSearch,
	faCloudArrowUp,
	faCircleCheck,
	faFileImage,
} from "@fortawesome/free-solid-svg-icons";

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

const MainPage = () => {
	const [currentPage, setCurrentPage] = useState("home");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [images, setImages] = useState([]);
	const [myImages, setMyImages] = useState([]);
	const [userInfo, setUserInfo] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);
	const [uploadProgress, setUploadProgress] = useState(0);
	const [isUploading, setIsUploading] = useState(false);
	const [uploadAbortFn, setUploadAbortFn] = useState(null);
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [isDragging, setIsDragging] = useState(false);

	useEffect(() => {
		setIsLoggedIn(authAPI.isLoggedIn());
	}, []);

	const fetchImages = async () => {
		if (!authAPI.isLoggedIn()) return;

		try {
			const response = await imageAPI.list();
			setImages(response.images);
		} catch (error) {
			console.error("이미지 로딩 실패:", error);
		}
	};

	const fetchMyImages = async () => {
		if (!authAPI.isLoggedIn()) return;

		try {
			const response = await imageAPI.myImages();
			setMyImages(response.images);
		} catch (error) {
			console.error("내 이미지 로딩 실패:", error);
		}
	};

	const fetchUserInfo = async () => {
		if (!authAPI.isLoggedIn()) return;

		try {
			const response = await authAPI.me();
			setUserInfo(response.user);
		} catch (error) {
			console.error("사용자 정보 로딩 실패:", error);
		}
	};

	useEffect(() => {
		if (isLoggedIn) {
			fetchImages();
			fetchMyImages();
			fetchUserInfo();
		}
	}, [isLoggedIn]);

	const handleFileSelect = (files) => {
		if (!files || files.length === 0) return;

		const allowedTypes = [
			"image/jpeg",
			"image/jpg",
			"image/png",
			"image/gif",
		];
		const validFiles = [];

		for (let i = 0; i < files.length; i++) {
			const file = files[i];

			if (!allowedTypes.includes(file.type)) {
				window.alert(
					`${file.name}: JPG, PNG, GIF 형식의 이미지만 업로드 가능합니다.`
				);
				continue;
			}

			if (file.size > 10 * 1024 * 1024) {
				window.alert(
					`${file.name}: 파일 크기는 10MB를 초과할 수 없습니다.`
				);
				continue;
			}

			validFiles.push(file);
		}

		if (validFiles.length > 0) {
			setSelectedFiles(validFiles);
		}
	};

	const handleImageUpload = async () => {
		if (!selectedFiles || selectedFiles.length === 0) return;

		try {
			setIsUploading(true);
			setUploadProgress(0);

			let completedCount = 0;
			const totalFiles = selectedFiles.length;

			for (const file of selectedFiles) {
				await imageAPI.upload(file, (progress) => {
					const overallProgress =
						((completedCount + progress / 100) / totalFiles) * 100;
					setUploadProgress(overallProgress);
				});
				completedCount++;
			}

			await fetchImages();
			await fetchMyImages();

			window.alert(`${totalFiles}개의 이미지 업로드가 완료되었습니다.`);
			setUploadProgress(0);
			setSelectedFiles([]);
		} catch (error) {
			console.error("업로드 실패:", error);
			window.alert(
				error.message || "이미지 업로드 중 오류가 발생했습니다."
			);
		} finally {
			setIsUploading(false);
			setUploadAbortFn(null);
		}
	};

	const handleDeleteImage = async (imageId) => {
		if (!window.confirm("정말 이 이미지를 삭제하시겠습니까?")) {
			return;
		}

		try {
			await imageAPI.delete(imageId);
			window.alert("이미지가 삭제되었습니다.");
			await fetchImages();
			await fetchMyImages();
		} catch (error) {
			console.error("삭제 실패:", error);
			window.alert(
				error.message || "이미지 삭제 중 오류가 발생했습니다."
			);
		}
	};

	const cancelUpload = () => {
		if (uploadAbortFn) {
			uploadAbortFn();
		}
		setIsUploading(false);
		setUploadProgress(0);
		setUploadAbortFn(null);
		setSelectedFiles([]);
	};

	const handleDragEnter = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(true);
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);

		const files = e.dataTransfer.files;
		if (files && files.length > 0) {
			handleFileSelect(files);
		}
	};

	const handleLogout = () => {
		authAPI.logout();
		setIsLoggedIn(false);
		setImages([]);
		setCurrentPage("home");
		window.location.reload();
	};

	return (
		<>
			{currentPage === "home" && (
				<div className="home">
					<s.SubNavbar>
						<s.SubNavbarul>
							{isLoggedIn ? (
								<s.SubNavbarli onClick={handleLogout}>
									<FontAwesomeIcon
										icon={faRightFromBracket}
									/>{" "}
									로그아웃
								</s.SubNavbarli>
							) : (
								<s.LinkSubNav to="/login">
									<FontAwesomeIcon icon={faRightToBracket} />{" "}
									로그인
								</s.LinkSubNav>
							)}
							{isLoggedIn ? null : (
								<s.LinkSubNav to="/signup">
									<FontAwesomeIcon icon={faUserPlus} />{" "}
									회원가입
								</s.LinkSubNav>
							)}
							<s.SubNavbarli>
								<s.LinkSubNav to="/notice">
									<FontAwesomeIcon icon={faBell} /> 공지사항
								</s.LinkSubNav>
							</s.SubNavbarli>
						</s.SubNavbarul>
					</s.SubNavbar>
					<s.MainNavbar>
						<s.MainNavbarLogoText>FANFANTV</s.MainNavbarLogoText>
						<s.MainNavbarul>
							<s.MainNavbarli
								className={
									currentPage === "home" ? "active" : ""
								}
								onClick={() => setCurrentPage("home")}
							>
								홈
							</s.MainNavbarli>
							<s.MainNavbarli
								className={currentPage === "my" ? "active" : ""}
								onClick={() => setCurrentPage("my")}
							>
								MY
							</s.MainNavbarli>
							<s.MainNavbarli
								className={
									currentPage === "gallery" ? "active" : ""
								}
								onClick={() => setCurrentPage("gallery")}
							>
								갤러리
							</s.MainNavbarli>
							<s.MainNavbarli
								className={
									currentPage === "upload" ? "active" : ""
								}
								onClick={() => setCurrentPage("upload")}
							>
								이미지 업로드
							</s.MainNavbarli>
						</s.MainNavbarul>
					</s.MainNavbar>
					<s.AnnounceContainer>
						<s.AnnounceText>
							FANFANTV는 이제 로컬 서버로 운영됩니다. 빠르고
							안정적인 서비스를 즐기세요!
						</s.AnnounceText>
					</s.AnnounceContainer>
					<s.MainContainer>
						<s.TitleText>
							이제, 새로워진{" "}
							<s.fanfantvtext>FANFANTV</s.fanfantvtext>에서{" "}
							<s.textimpact>ON</s.textimpact>.
						</s.TitleText>
						<s.DescText>
							수많은 콘텐츠를 무료로 감상하고, 시청하세요.
							이용료는 부과되지 않습니다.
						</s.DescText>
					</s.MainContainer>
					<s.FeatureBox1>
						<s.FeatureBox1Left>
							<s.FeatureBox1TitleText>
								무료로 시청하세요.
							</s.FeatureBox1TitleText>
							<s.FeatureBox1DescText>
								FANFANTV에서는 모든 재밌는, 무서운 컨텐츠들을
								무료로 감상할 수 있습니다.
							</s.FeatureBox1DescText>
						</s.FeatureBox1Left>
						<s.FeatureBox1Right></s.FeatureBox1Right>
					</s.FeatureBox1>
					<s.FeatureBox2>
						<s.FeatureBox2Left></s.FeatureBox2Left>
						<s.FeatureBox2Right>
							<s.FeatureBox2TitleText>
								안전하게 즐기세요.
							</s.FeatureBox2TitleText>
							<s.FeatureBox2DescText>
								FANFANTV는 높은 수준의 보안을 보장합니다. 또한,
								신뢰할 수 있는 플랫폼에서 구동됩니다.
							</s.FeatureBox2DescText>
						</s.FeatureBox2Right>
					</s.FeatureBox2>
					<s.FeatureBox3>
						<s.FeatureBox3Left>
							<s.FeatureBox3TitleText>
								언제든지, 어떻게든.
							</s.FeatureBox3TitleText>
							<s.FeatureBox3DescText>
								FANFANTV는 365일 24시간 내내 중단없이
								<s.SupText>[1]</s.SupText> 언제든지 즉시 이용할
								수 있습니다.
								<br />
								모바일 기기, 태블릿, PC, TV 등 어떤 기기로든지
								<s.SupText>[2]</s.SupText> 시청하세요.
							</s.FeatureBox3DescText>
						</s.FeatureBox3Left>
						<s.FeatureBox3Right></s.FeatureBox3Right>
					</s.FeatureBox3>
					<s.AdditionalContainer>
						<s.AdditonalText>
							<s.SupText>[1]</s.SupText>정부의 요청이나 자연재해와
							같은 불가항력적인 상황에 대해서는 보장되지 않을 수
							있음.
						</s.AdditonalText>
						<s.AdditonalText>
							<s.SupText>[2]</s.SupText>웹 브라우저가 지원되는
							OS가 탑재된 디바이스에 한함.
						</s.AdditonalText>
					</s.AdditionalContainer>
					<s.FooterContainer>
						<s.FooterBarul>
							<s.FooterNav to="/terms-of-service">
								이용약관
							</s.FooterNav>
							<s.FooterNav to="/privacy-policy">
								개인정보처리방침
							</s.FooterNav>
							<s.FooterNav to="/refuse-collect-email">
								이메일무단수집거부
							</s.FooterNav>
							<s.FooterNav to="/service-status">
								서비스 상태
							</s.FooterNav>
						</s.FooterBarul>
						<s.Footerfanfantvinfocontainer>
							<s.Footerfanfantvinfo>
								FANFANTV | 전자우편주소 : admin@fanfantv.online
								<br />
								호스팅서비스제공자 : Google LLC.
							</s.Footerfanfantvinfo>
						</s.Footerfanfantvinfocontainer>
						<s.CopyrightText>
							© 2023 FANFANTV. All rights reserved.
						</s.CopyrightText>
						<s.ZzunilabsText>
							FANFANTV is a project of zzuniLabs
						</s.ZzunilabsText>
					</s.FooterContainer>
				</div>
			)}
			{currentPage === "my" && (
				<div className="my">
					<s.SubNavbar>
						<s.SubNavbarul>
							{isLoggedIn ? (
								<s.SubNavbarli onClick={handleLogout}>
									<FontAwesomeIcon
										icon={faRightFromBracket}
									/>{" "}
									로그아웃
								</s.SubNavbarli>
							) : (
								<s.LinkSubNav to="/login">
									<FontAwesomeIcon icon={faRightToBracket} />{" "}
									로그인
								</s.LinkSubNav>
							)}
							{isLoggedIn ? null : (
								<s.LinkSubNav to="/signup">
									<FontAwesomeIcon icon={faUserPlus} />{" "}
									회원가입
								</s.LinkSubNav>
							)}
							<s.SubNavbarli>
								<s.LinkSubNav to="/notice">
									<FontAwesomeIcon icon={faBell} /> 공지사항
								</s.LinkSubNav>
							</s.SubNavbarli>
						</s.SubNavbarul>
					</s.SubNavbar>
					<s.MainNavbar>
						<s.MainNavbarLogoText>FANFANTV</s.MainNavbarLogoText>
						<s.MainNavbarul>
							<s.MainNavbarli
								className={
									currentPage === "home" ? "active" : ""
								}
								onClick={() => setCurrentPage("home")}
							>
								홈
							</s.MainNavbarli>
							<s.MainNavbarli
								className={currentPage === "my" ? "active" : ""}
								onClick={() => setCurrentPage("my")}
							>
								MY
							</s.MainNavbarli>
							<s.MainNavbarli
								className={
									currentPage === "gallery" ? "active" : ""
								}
								onClick={() => setCurrentPage("gallery")}
							>
								갤러리
							</s.MainNavbarli>
							<s.MainNavbarli
								className={
									currentPage === "upload" ? "active" : ""
								}
								onClick={() => setCurrentPage("upload")}
							>
								이미지 업로드
							</s.MainNavbarli>
						</s.MainNavbarul>
					</s.MainNavbar>
					{isLoggedIn === false && (
						<div className="pleaselogin">
							<s.PleaseLoginContainer>
								<s.PleaseLoginTitleText>
									회원 전용 페이지입니다.
									<br />
									계속하시려면 로그인 해주세요.
								</s.PleaseLoginTitleText>
							</s.PleaseLoginContainer>
						</div>
					)}
					{isLoggedIn === true && userInfo && (
						<div className="loggedin">
							<s.MyPageContainer>
								<s.MyPageHeader>
									<s.MyPageTitle>
										<span>MY</span> 페이지
									</s.MyPageTitle>
									<s.ProfileSection>
										<s.ProfileAvatar>
											{userInfo.email
												.charAt(0)
												.toUpperCase()}
										</s.ProfileAvatar>
										<s.ProfileInfo>
											<s.ProfileEmail>
												{userInfo.email}
											</s.ProfileEmail>
											<s.ProfileDetail>
												가입일:{" "}
												{new Date(
													userInfo.created_at
												).toLocaleDateString("ko-KR")}
											</s.ProfileDetail>
										</s.ProfileInfo>
									</s.ProfileSection>
								</s.MyPageHeader>

								<s.StatsSection>
									<s.StatCard>
										<s.StatLabel>내 이미지</s.StatLabel>
										<s.StatValue>
											{myImages.length}개
										</s.StatValue>
									</s.StatCard>
									<s.StatCard>
										<s.StatLabel>전체 이미지</s.StatLabel>
										<s.StatValue>
											{images.length}개
										</s.StatValue>
									</s.StatCard>
								</s.StatsSection>

								<s.MyImagesSection>
									<s.SectionTitle>
										내가 업로드한 <span>이미지</span>
									</s.SectionTitle>

									{myImages.length === 0 ? (
										<s.EmptyGalleryContainer>
											<s.EmptyGalleryIcon>
												<FontAwesomeIcon
													icon={faImages}
												/>
											</s.EmptyGalleryIcon>
											<s.EmptyGalleryText>
												아직 업로드한 이미지가 없습니다.
											</s.EmptyGalleryText>
											<s.EmptyGalleryButton
												onClick={() =>
													setCurrentPage("upload")
												}
											>
												<FontAwesomeIcon
													icon={faUpload}
												/>{" "}
												이미지 업로드하기
											</s.EmptyGalleryButton>
										</s.EmptyGalleryContainer>
									) : (
										<s.MyImageGrid>
											{myImages.map((image) => (
												<s.MyImageCard key={image.id}>
													<img
														src={imageAPI.getImageUrl(
															image.filename
														)}
														alt={image.originalName}
														onClick={() =>
															setSelectedImage(
																imageAPI.getImageUrl(
																	image.filename
																)
															)
														}
													/>
													<s.ImageActions>
														<s.ImageActionButton
															onClick={() =>
																setSelectedImage(
																	imageAPI.getImageUrl(
																		image.filename
																	)
																)
															}
															title="확대보기"
														>
															<FontAwesomeIcon
																icon={faSearch}
															/>
														</s.ImageActionButton>
														<s.ImageActionButton
															className="delete"
															onClick={(e) => {
																e.stopPropagation();
																handleDeleteImage(
																	image.id
																);
															}}
															title="삭제"
														>
															<FontAwesomeIcon
																icon={faTrash}
															/>
														</s.ImageActionButton>
													</s.ImageActions>
													<s.ImageInfo>
														{new Date(
															image.createdAt
														).toLocaleDateString(
															"ko-KR"
														)}
													</s.ImageInfo>
												</s.MyImageCard>
											))}
										</s.MyImageGrid>
									)}
								</s.MyImagesSection>
							</s.MyPageContainer>

							{selectedImage && (
								<s.ModalContainer
									onClick={() => setSelectedImage(null)}
								>
									<s.ModalContent
										onClick={(e) => e.stopPropagation()}
									>
										<s.ModalCloseButton
											onClick={() =>
												setSelectedImage(null)
											}
										>
											×
										</s.ModalCloseButton>
										<img
											src={selectedImage}
											alt="selected-image"
										/>
									</s.ModalContent>
								</s.ModalContainer>
							)}
						</div>
					)}
					<s.FooterContainer>
						<s.FooterBarul>
							<s.FooterNav to="/terms-of-service">
								이용약관
							</s.FooterNav>
							<s.FooterNav to="/privacy-policy">
								개인정보처리방침
							</s.FooterNav>
							<s.FooterNav to="/refuse-collect-email">
								이메일무단수집거부
							</s.FooterNav>
							<s.FooterNav to="/service-status">
								서비스 상태
							</s.FooterNav>
						</s.FooterBarul>
						<s.Footerfanfantvinfocontainer>
							<s.Footerfanfantvinfo>
								FANFANTV | 전자우편주소 : admin@fanfantv.online
								<br />
								호스팅서비스제공자 : Google LLC.
							</s.Footerfanfantvinfo>
						</s.Footerfanfantvinfocontainer>
						<s.CopyrightText>
							© 2023 FANFANTV. All rights reserved.
						</s.CopyrightText>
						<s.ZzunilabsText>
							FANFANTV is a project of zzuniLabs
						</s.ZzunilabsText>
					</s.FooterContainer>
				</div>
			)}
			{currentPage === "gallery" && (
				<div className="gallery">
					<s.SubNavbar>
						<s.SubNavbarul>
							{isLoggedIn ? (
								<s.SubNavbarli onClick={handleLogout}>
									<FontAwesomeIcon
										icon={faRightFromBracket}
									/>{" "}
									로그아웃
								</s.SubNavbarli>
							) : (
								<s.LinkSubNav to="/login">
									<FontAwesomeIcon icon={faRightToBracket} />{" "}
									로그인
								</s.LinkSubNav>
							)}
							{isLoggedIn ? null : (
								<s.LinkSubNav to="/signup">
									<FontAwesomeIcon icon={faUserPlus} />{" "}
									회원가입
								</s.LinkSubNav>
							)}
							<s.SubNavbarli>
								<s.LinkSubNav to="/notice">
									<FontAwesomeIcon icon={faBell} /> 공지사항
								</s.LinkSubNav>
							</s.SubNavbarli>
						</s.SubNavbarul>
					</s.SubNavbar>
					<s.MainNavbar>
						<s.MainNavbarLogoText>FANFANTV</s.MainNavbarLogoText>
						<s.MainNavbarul>
							<s.MainNavbarli
								className={
									currentPage === "home" ? "active" : ""
								}
								onClick={() => setCurrentPage("home")}
							>
								홈
							</s.MainNavbarli>
							<s.MainNavbarli
								className={currentPage === "my" ? "active" : ""}
								onClick={() => setCurrentPage("my")}
							>
								MY
							</s.MainNavbarli>
							<s.MainNavbarli
								className={
									currentPage === "gallery" ? "active" : ""
								}
								onClick={() => setCurrentPage("gallery")}
							>
								갤러리
							</s.MainNavbarli>
							<s.MainNavbarli
								className={
									currentPage === "upload" ? "active" : ""
								}
								onClick={() => setCurrentPage("upload")}
							>
								이미지 업로드
							</s.MainNavbarli>
						</s.MainNavbarul>
					</s.MainNavbar>
					{isLoggedIn === false && (
						<div className="pleaselogin">
							<s.PleaseLoginContainer>
								<s.PleaseLoginTitleText>
									회원 전용 페이지입니다.
									<br />
									계속하시려면 로그인 해주세요.
								</s.PleaseLoginTitleText>
							</s.PleaseLoginContainer>
						</div>
					)}
					{isLoggedIn === true && (
						<div className="loggedin">
							<s.GalleryContainer>
								<s.GalleryHeader>
									<s.GalleryTitle>
										<span>갤러리</span> 이미지
									</s.GalleryTitle>
									<s.GalleryInfo>
										총 <span>{images.length}</span>개의
										이미지
									</s.GalleryInfo>
								</s.GalleryHeader>

								{images.length === 0 ? (
									<s.EmptyGalleryContainer>
										<s.EmptyGalleryIcon>
											<FontAwesomeIcon icon={faImages} />
										</s.EmptyGalleryIcon>
										<s.EmptyGalleryText>
											아직 업로드된 이미지가 없습니다.
											<br />첫 번째 이미지를
											업로드해보세요!
										</s.EmptyGalleryText>
										<s.EmptyGalleryButton
											onClick={() =>
												setCurrentPage("upload")
											}
										>
											<FontAwesomeIcon icon={faUpload} />{" "}
											이미지 업로드하기
										</s.EmptyGalleryButton>
									</s.EmptyGalleryContainer>
								) : (
									<s.GalleryGrid>
										{images.map((image) => (
											<s.GalleryImageContainer
												key={image.id}
												onClick={() =>
													setSelectedImage(
														imageAPI.getImageUrl(
															image.filename
														)
													)
												}
											>
												<img
													src={imageAPI.getImageUrl(
														image.filename
													)}
													alt={image.originalName}
												/>
												<s.UploadedByText>
													{image.uploadedByName ||
														getNameFromEmail(image.uploadedBy)}
												</s.UploadedByText>
											</s.GalleryImageContainer>
										))}
									</s.GalleryGrid>
								)}
							</s.GalleryContainer>

							{selectedImage && (
								<s.ModalContainer
									onClick={() => setSelectedImage(null)}
								>
									<s.ModalContent
										onClick={(e) => e.stopPropagation()}
									>
										<s.ModalCloseButton
											onClick={() =>
												setSelectedImage(null)
											}
										>
											<FontAwesomeIcon icon={faTimes} />
										</s.ModalCloseButton>
										<img
											src={selectedImage}
											alt="selected-image"
										/>
									</s.ModalContent>
								</s.ModalContainer>
							)}

							<s.FooterContainer>
								<s.FooterBarul>
									<s.FooterNav to="/terms-of-service">
										이용약관
									</s.FooterNav>
									<s.FooterNav to="/privacy-policy">
										개인정보처리방침
									</s.FooterNav>
									<s.FooterNav to="/refuse-collect-email">
										이메일무단수집거부
									</s.FooterNav>
									<s.FooterNav to="/service-status">
										서비스 상태
									</s.FooterNav>
								</s.FooterBarul>
								<s.Footerfanfantvinfocontainer>
									<s.Footerfanfantvinfo>
										FANFANTV | 전자우편주소 :
										admin@fanfantv.online
										<br />
										호스팅서비스제공자 : Google LLC.
									</s.Footerfanfantvinfo>
								</s.Footerfanfantvinfocontainer>
								<s.CopyrightText>
									© 2023 FANFANTV. All rights reserved.
								</s.CopyrightText>
								<s.ZzunilabsText>
									FANFANTV is a project of zzuniLabs
								</s.ZzunilabsText>
							</s.FooterContainer>
						</div>
					)}
				</div>
			)}
			{currentPage === "upload" && (
				<div className="upload">
					<s.SubNavbar>
						<s.SubNavbarul>
							{isLoggedIn ? (
								<s.SubNavbarli onClick={handleLogout}>
									<FontAwesomeIcon
										icon={faRightFromBracket}
									/>{" "}
									로그아웃
								</s.SubNavbarli>
							) : (
								<s.LinkSubNav to="/login">
									<FontAwesomeIcon icon={faRightToBracket} />{" "}
									로그인
								</s.LinkSubNav>
							)}
							{isLoggedIn ? null : (
								<s.LinkSubNav to="/signup">
									<FontAwesomeIcon icon={faUserPlus} />{" "}
									회원가입
								</s.LinkSubNav>
							)}
							<s.SubNavbarli>
								<s.LinkSubNav to="/notice">
									<FontAwesomeIcon icon={faBell} /> 공지사항
								</s.LinkSubNav>
							</s.SubNavbarli>
						</s.SubNavbarul>
					</s.SubNavbar>
					<s.MainNavbar>
						<s.MainNavbarLogoText>FANFANTV</s.MainNavbarLogoText>
						<s.MainNavbarul>
							<s.MainNavbarli
								className={
									currentPage === "home" ? "active" : ""
								}
								onClick={() => setCurrentPage("home")}
							>
								홈
							</s.MainNavbarli>
							<s.MainNavbarli
								className={currentPage === "my" ? "active" : ""}
								onClick={() => setCurrentPage("my")}
							>
								MY
							</s.MainNavbarli>
							<s.MainNavbarli
								className={
									currentPage === "gallery" ? "active" : ""
								}
								onClick={() => setCurrentPage("gallery")}
							>
								갤러리
							</s.MainNavbarli>
							<s.MainNavbarli
								className={
									currentPage === "upload" ? "active" : ""
								}
								onClick={() => setCurrentPage("upload")}
							>
								이미지 업로드
							</s.MainNavbarli>
						</s.MainNavbarul>
					</s.MainNavbar>
					{isLoggedIn === false && (
						<div className="pleaselogin">
							<s.PleaseLoginContainer>
								<s.PleaseLoginTitleText>
									회원 전용 페이지입니다.
									<br />
									계속하시려면 로그인 해주세요.
								</s.PleaseLoginTitleText>
							</s.PleaseLoginContainer>
						</div>
					)}
					{isLoggedIn === true && (
						<div className="loggedin">
							<s.UploadImageContainer>
								<s.UploadImageBox>
									<s.UploadImageTitle>
										<span>이미지</span> 업로드
									</s.UploadImageTitle>

									<s.UploadImageLabelBox
										isDragging={isDragging}
										onDragEnter={handleDragEnter}
										onDragLeave={handleDragLeave}
										onDragOver={handleDragOver}
										onDrop={handleDrop}
									>
										<s.UploadImageInput
											type="file"
											accept="image/jpg, image/jpeg, image/png, image/gif, image/webp"
											onChange={(e) =>
												handleFileSelect(e.target.files)
											}
											id="file-upload"
											disabled={isUploading}
											multiple
										/>
										<s.UploadIcon>
											{isDragging ? (
												<FontAwesomeIcon
													icon={faCloudArrowUp}
												/>
											) : (
												<FontAwesomeIcon
													icon={faUpload}
												/>
											)}
										</s.UploadIcon>
										<s.UploadText>
											{isDragging
												? "파일을 여기에 놓으세요"
												: "이미지를 드래그하거나 클릭하세요"}
										</s.UploadText>
										<s.UploadSubText>
											JPG, PNG, GIF, WEBP (최대 10MB) •
											여러 파일 선택 가능
										</s.UploadSubText>
									</s.UploadImageLabelBox>

									{selectedFiles.length > 0 &&
										!isUploading && (
											<s.UploadFileList>
												{selectedFiles.map(
													(file, index) => (
														<s.UploadFileInfo
															key={index}
														>
															<s.FileIcon>
																<FontAwesomeIcon
																	icon={
																		faFileImage
																	}
																/>
															</s.FileIcon>
															<s.FileDetails>
																<s.FileName>
																	{file.name}
																</s.FileName>
																<s.FileSize>
																	{(
																		file.size /
																		1024 /
																		1024
																	).toFixed(
																		2
																	)}{" "}
																	MB
																</s.FileSize>
															</s.FileDetails>
														</s.UploadFileInfo>
													)
												)}
											</s.UploadFileList>
										)}

									{isUploading && (
										<>
											<s.UploadImageProgress>
												<s.UploadProgressBar
													progress={uploadProgress}
												/>
											</s.UploadImageProgress>
											<s.ProgressText>
												업로드 중...{" "}
												{Math.round(uploadProgress)}%
											</s.ProgressText>
										</>
									)}

									{selectedFiles.length > 0 &&
										!isUploading && (
											<s.UploadButtonGroup>
												<s.UploadButton
													onClick={handleImageUpload}
												>
													{selectedFiles.length}개
													파일 업로드
												</s.UploadButton>
												<s.CancelUploadButton
													onClick={() =>
														setSelectedFiles([])
													}
												>
													취소
												</s.CancelUploadButton>
											</s.UploadButtonGroup>
										)}

									{isUploading && (
										<s.UploadButtonGroup>
											<s.CancelUploadButton
												onClick={cancelUpload}
											>
												업로드 취소
											</s.CancelUploadButton>
										</s.UploadButtonGroup>
									)}

									<s.UploadImageTermssNotice>
										이미지를 업로드하면 이용약관과
										개인정보처리방침에 동의한 것으로
										간주됩니다.
									</s.UploadImageTermssNotice>
								</s.UploadImageBox>
							</s.UploadImageContainer>
						</div>
					)}
					<s.FooterContainer>
						<s.FooterBarul>
							<s.FooterNav to="/terms-of-service">
								이용약관
							</s.FooterNav>
							<s.FooterNav to="/privacy-policy">
								개인정보처리방침
							</s.FooterNav>
							<s.FooterNav to="/refuse-collect-email">
								이메일무단수집거부
							</s.FooterNav>
							<s.FooterNav to="/service-status">
								서비스 상태
							</s.FooterNav>
						</s.FooterBarul>
						<s.Footerfanfantvinfocontainer>
							<s.Footerfanfantvinfo>
								FANFANTV | 전자우편주소 : admin@fanfantv.online
								<br />
								호스팅서비스제공자 : Google LLC.
							</s.Footerfanfantvinfo>
						</s.Footerfanfantvinfocontainer>
						<s.CopyrightText>
							© 2023 FANFANTV. All rights reserved.
						</s.CopyrightText>
						<s.ZzunilabsText>
							FANFANTV is a project of zzuniLabs
						</s.ZzunilabsText>
					</s.FooterContainer>
				</div>
			)}
		</>
	);
};

export default MainPage;
