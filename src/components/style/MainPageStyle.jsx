import styled from "styled-components";
import fanfantvtitlepngPath from "../assets/images/fanfantvtitle.png";
import { Link } from "react-router-dom";

export const LinkSubNav = styled(Link)`
	text-decoration: none;
	color: #a5a5a5;
	font-size: 12px;
	line-height: 34px;
	margin-left: 10px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	gap: 5px;

	&:first-child {
		margin-left: 0;
	}

	svg {
		font-size: 12px;
	}
`;

export const FooterNav = styled(Link)`
	text-decoration: none;
	color: rgb(130, 130, 130);
	font-size: 14px;
	line-height: 34px;
	font-weight: 200;
	margin-left: 1vw;
	cursor: pointer;

	&:hover {
		opacity: 0.85;
	}

	&:first-child {
		margin-left: 0;
	}
`;

export const SubNavbar = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	height: 33px;
	background-color: rgb(27, 27, 27);
	border-bottom: 1px solid rgb(47, 47, 47);
	padding: 0 5vw;
`;

export const SubNavbarul = styled.ul`
	display: flex;
`;

export const SubNavbarli = styled.li`
	text-decoration: none;
	color: #a5a5a5;
	font-size: 12px;
	line-height: 34px;
	margin-left: 10px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	gap: 5px;

	&:first-child {
		margin-left: 0;
	}

	svg {
		font-size: 12px;
	}
`;

export const MainNavbar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 75px;
	background-color: rgb(27, 27, 27);
	padding: 0 5vw;

	@media screen and (max-width: 410px) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 130px;
	}
`;

export const MainNavbarLogoText = styled.p`
	color: #fff;
	font-size: 24px;
	font-weight: 700;
	line-height: 75px;
`;

export const MainNavbarul = styled.ul`
	display: flex;
`;

export const MainNavbarli = styled.li`
	text-decoration: none;
	color: rgb(165, 165, 165);
	font-size: 20px;
	line-height: 34px;
	font-weight: 500;
	margin-left: 2vw;
	opacity: 0.6;
	cursor: pointer;

	&:first-child {
		margin-right: 5px;
	}

	&.active {
		opacity: 1;
	}

	&:hover {
		opacity: 0.85;
	}
`;

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 600px;
	padding: 0 5vw;
	background-color: rgb(27, 27, 27);
	background-image: url(${fanfantvtitlepngPath});
`;

export const TitleText = styled.div`
	font-size: 40px;
	color: white;
	font-weight: 600;
`;

export const fanfantvtext = styled.span`
	font-weight: 800;

	background-image: linear-gradient(to right, #e50914, white);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
`;

export const textimpact = styled.span`
	font-weight: 600;
	display: inline-block;
	text-align: center;
	width: 65px;
	background-color: #e50914;
	color: white;
	border-radius: 5px;
	margin: 0;
`;

export const DescText = styled.div`
	font-size: 18px;
	font-weight: 400;
	color: #fff;
`;

export const FeatureBox1 = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	height: 175px;
	background-color: rgb(33, 33, 33);
`;

export const FeatureBox1Right = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const FeatureBox1Left = styled.div``;

export const FeatureBox1TitleText = styled.p`
	font-size: 30px;
	color: white;
	font-weight: 600;
	padding-left: 5vw;
	padding-right: 5vw;
`;

export const FeatureBox1DescText = styled.p`
	font-size: 18px;
	font-weight: 400;
	color: #fff;
	padding-left: 5vw;
	padding-right: 5vw;
`;

export const FeatureBox2 = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	height: 175px;
	background-color: rgb(27, 27, 27);
`;

export const FeatureBox2Right = styled.div``;

export const FeatureBox2Left = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const FeatureBox2TitleText = styled.p`
	font-size: 30px;
	color: white;
	font-weight: 600;
	padding-left: 5vw;
	padding-right: 5vw;
	text-align: right;
`;

export const FeatureBox2DescText = styled.p`
	font-size: 18px;
	font-weight: 400;
	color: #fff;
	padding-left: 5vw;
	padding-right: 5vw;
	text-align: right;
`;

export const FeatureBox3 = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	height: 175px;
	background-color: rgb(33, 33, 33);
`;

export const FeatureBox3Right = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const FeatureBox3Left = styled.div``;

export const FeatureBox3TitleText = styled.p`
	font-size: 30px;
	color: white;
	font-weight: 600;
	padding-left: 5vw;
	padding-right: 5vw;
`;

export const FeatureBox3DescText = styled.p`
	font-size: 18px;
	font-weight: 400;
	color: #fff;
	padding-left: 5vw;
	padding-right: 5vw;
`;

export const SupText = styled.sup`
	font-size: 10px;
`;

export const SmallText = styled.small`
	font-size: 12px;
	color: white;
`;

export const AdditionalContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 50px;
	background-color: rgb(27, 27, 27);
	border-top: 1.5px solid rgb(47, 47, 47);
	border-bottom: 1.5px solid rgb(47, 47, 47);
`;

export const AdditonalText = styled.p`
	font-size: 10px;
	color: #6e6e73;
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 140px;
	background-color: rgb(27, 27, 27);
	padding: 0 5vw;
`;

export const FooterBarul = styled.ul`
	display: flex;
	margin-top: 20px;
`;

export const Footerfanfantvinfocontainer = styled.div`
	display: flex;
`;

export const Footerfanfantvinfo = styled.p`
	font-size: 11px;
	color: rgb(130, 130, 130);
	margin-top: 3px;
`;

export const CopyrightText = styled.p`
	font-size: 13px;
	color: rgb(130, 130, 130);
	margin-top: 6px;
`;

export const PleaseLoginContainer = styled.div`
	background-color: rgb(27, 27, 27);
	min-height: calc(100vh - 109px);
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 410px) {
		min-height: calc(100vh - 160px);
	}
`;

export const PleaseLoginTitleText = styled.p`
	font-size: 40px;
	color: white;
	font-weight: 600;
	text-align: center;
	margin-bottom: 120px;
`;

export const AnnounceContainer = styled.div`
	display: flex;
	height: 50px;
	background-color: #2a9df4;
	justify-content: center;
	align-items: center;
	padding: 0 5vw;

	@media screen and (max-width: 530px) {
		height: 80px;
	}

	@media screen and (max-width: 354px) {
		height: 90px;
	}

	@media screen and (max-width: 266px) {
		height: 103px;
	}
`;

export const AnnounceText = styled.p`
	font-size: 14px;
	color: white;
	text-align: center;
	line-height: 20px;
`;

export const AnnounceHyperlink = styled.a`
	color: white;
	text-decoration: underline;
	font-weight: 600;
`;

export const GalleryContainer = styled.div`
	min-height: calc(100vh - 250px);
	background: linear-gradient(
		135deg,
		rgb(27, 27, 27) 0%,
		rgb(35, 35, 35) 100%
	);
	padding: 40px 5vw 60px 5vw;
`;

export const GalleryHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30px;
	padding-bottom: 20px;
	border-bottom: 2px solid rgba(229, 9, 20, 0.3);

	@media screen and (max-width: 768px) {
		flex-direction: column;
		gap: 15px;
		align-items: flex-start;
	}
`;

export const GalleryTitle = styled.h1`
	color: #fff;
	font-size: 32px;
	font-weight: 700;
	margin: 0;

	span {
		color: #e50914;
	}

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}
`;

export const GalleryInfo = styled.p`
	color: #a5a5a5;
	font-size: 16px;
	margin: 0;

	span {
		color: #e50914;
		font-weight: 600;
	}
`;

export const GalleryGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 30px;
	justify-content: center;

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 20px;
	}
`;

export const EmptyGalleryContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 400px;
	gap: 20px;
`;

export const EmptyGalleryIcon = styled.div`
	font-size: 80px;
	opacity: 0.3;

	svg {
		font-size: 80px;
	}
`;

export const EmptyGalleryText = styled.p`
	color: #a5a5a5;
	font-size: 20px;
	font-weight: 500;
	text-align: center;
	margin: 0;
`;

export const EmptyGalleryButton = styled.button`
	background: linear-gradient(90deg, #e50914 0%, #b20710 100%);
	color: white;
	font-size: 16px;
	font-weight: 600;
	padding: 12px 30px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.3s ease;
	display: inline-flex;
	align-items: center;
	gap: 8px;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(229, 9, 20, 0.4);
	}

	svg {
		font-size: 14px;
	}

	&:active {
		transform: translateY(0);
	}
`;

export const GalleryImageContainer = styled.div`
	position: relative;
	background: rgba(47, 47, 47, 0.5);
	border-radius: 12px;
	overflow: hidden;
	cursor: pointer;
	transition: all 0.3s ease;
	aspect-ratio: 1;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 40px rgba(229, 9, 20, 0.3);

		img {
			transform: scale(1.1);
		}

		&::after {
			opacity: 1;
		}
	}

	&::after {
		content: "🔍 확대하기";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-size: 18px;
		font-weight: 600;
		opacity: 0;
		transition: opacity 0.3s ease;
	}
`;

export const UploadedByText = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 10px;
	font-size: 12px;
	color: white;
	background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
	text-align: center;
	font-weight: 500;
`;

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.95);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	cursor: pointer;
	animation: fadeIn 0.3s ease;

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const ModalContent = styled.div`
	max-width: 90vw;
	max-height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	cursor: default;

	img {
		max-width: 100%;
		max-height: 85vh;
		object-fit: contain;
		border-radius: 8px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
	}
`;

export const ModalCloseButton = styled.button`
	position: absolute;
	top: -50px;
	right: 0;
	background: rgba(229, 9, 20, 0.9);
	color: white;
	font-size: 20px;
	font-weight: 700;
	width: 40px;
	height: 40px;
	border: none;
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease;

	svg {
		font-size: 20px;
	}

	&:hover {
		background: #e50914;
		transform: rotate(90deg);
	}

	@media screen and (max-width: 768px) {
		top: -40px;
		width: 35px;
		height: 35px;
		font-size: 16px;

		svg {
			font-size: 16px;
		}
	}
`;

export const UploadImageContainer = styled.div`
	height: calc(100vh - 290px);
	background-color: rgb(27, 27, 27);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	overflow-y: auto;
`;

export const UploadImageBox = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-width: 420px;
	background: rgba(47, 47, 47, 0.5);
	border-radius: 8px;
	padding: 20px;
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);

	@media screen and (max-width: 768px) {
		padding: 18px 15px;
		max-width: 100%;
	}
`;

export const UploadImageTitle = styled.h1`
	color: #fff;
	font-size: 22px;
	font-weight: 600;
	margin: 0 0 18px 0;
	text-align: center;

	span {
		color: #e50914;
	}

	@media screen and (max-width: 768px) {
		font-size: 19px;
		margin: 0 0 15px 0;
	}
`;

export const UploadImageInput = styled.input`
	display: none;
`;

export const UploadImageLabelBox = styled.label`
	width: 100%;
	min-height: 140px;
	background: ${(props) =>
		props.isDragging
			? "linear-gradient(135deg, rgba(229, 9, 20, 0.2), rgba(178, 7, 16, 0.2))"
			: "rgba(37, 37, 37, 0.8)"};
	border: 2px dashed ${(props) => (props.isDragging ? "#e50914" : "#606060")};
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	transition: all 0.3s ease;
	padding: 20px 15px;

	&:hover {
		border-color: #e50914;
		background: linear-gradient(
			135deg,
			rgba(229, 9, 20, 0.1),
			rgba(178, 7, 16, 0.1)
		);
		transform: translateY(-2px);
	}

	@media screen and (max-width: 768px) {
		min-height: 130px;
		padding: 18px 12px;
		gap: 8px;
	}
`;

export const UploadIcon = styled.div`
	font-size: 45px;
	opacity: 0.7;
	transition: all 0.3s ease;

	svg {
		font-size: 45px;
	}

	${UploadImageLabelBox}:hover & {
		opacity: 1;
		transform: scale(1.05);
	}

	@media screen and (max-width: 768px) {
		font-size: 38px;

		svg {
			font-size: 38px;
		}
	}
`;

export const UploadText = styled.p`
	color: #fff;
	font-size: 16px;
	font-weight: 600;
	margin: 0;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 15px;
	}
`;

export const UploadSubText = styled.p`
	color: #a5a5a5;
	font-size: 13px;
	font-weight: 400;
	margin: 0;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
`;

export const UploadFileList = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-top: 12px;
	max-height: 200px;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 6px;
	}

	&::-webkit-scrollbar-track {
		background: rgba(37, 37, 37, 0.5);
		border-radius: 3px;
	}

	&::-webkit-scrollbar-thumb {
		background: rgba(229, 9, 20, 0.5);
		border-radius: 3px;

		&:hover {
			background: rgba(229, 9, 20, 0.7);
		}
	}
`;

export const UploadFileInfo = styled.div`
	width: 100%;
	padding: 10px;
	background: rgba(229, 9, 20, 0.1);
	border-radius: 6px;
	margin-top: 12px;
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const FileIcon = styled.div`
	font-size: 28px;
	color: #e50914;

	svg {
		font-size: 28px;
	}
`;

export const FileDetails = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const FileName = styled.p`
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	margin: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const FileSize = styled.p`
	color: #a5a5a5;
	font-size: 13px;
	margin: 0;
`;

export const UploadImageProgress = styled.div`
	width: 100%;
	height: 6px;
	background: rgba(37, 37, 37, 0.8);
	border-radius: 3px;
	overflow: hidden;
	margin-top: 12px;
`;

export const UploadProgressBar = styled.div`
	height: 100%;
	background: linear-gradient(90deg, #e50914 0%, #b20710 100%);
	border-radius: 3px;
	transition: width 0.3s ease;
	width: ${(props) => props.progress}%;
`;

export const ProgressText = styled.p`
	color: #fff;
	font-size: 13px;
	font-weight: 600;
	margin: 8px 0 0 0;
	text-align: center;
`;

export const UploadButtonGroup = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 15px;
	width: 100%;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		gap: 8px;
	}
`;

export const UploadButton = styled.button`
	flex: 1;
	padding: 10px 20px;
	background: linear-gradient(90deg, #e50914 0%, #b20710 100%);
	color: white;
	font-size: 14px;
	font-weight: 600;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(229, 9, 20, 0.4);
	}

	&:active:not(:disabled) {
		transform: translateY(0);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

export const CancelUploadButton = styled.button`
	flex: 1;
	padding: 10px 20px;
	background: rgba(255, 255, 255, 0.1);
	color: white;
	font-size: 14px;
	font-weight: 600;
	border: 2px solid rgba(255, 255, 255, 0.2);
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background: rgba(255, 255, 255, 0.2);
		border-color: rgba(255, 255, 255, 0.4);
	}

	&:active {
		transform: scale(0.98);
	}
`;

export const UploadImageTermssNotice = styled.p`
	color: #909090;
	font-size: 11px;
	font-weight: 400;
	margin-top: 12px;
	text-align: center;
	line-height: 1.4;
`;

export const ZzunilabsText = styled.p`
	color: rgb(130, 130, 130);
	font-size: 10px;
	font-weight: 400;
	margin-top: 10px;
`;

export const MyPageContainer = styled.div`
	min-height: calc(100vh - 250px);
	background-color: rgb(27, 27, 27);
	padding: 40px 5vw 60px 5vw;
`;

export const MyPageHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 40px;
	padding-bottom: 30px;
	border-bottom: 1px solid rgb(47, 47, 47);
`;

export const MyPageTitle = styled.h1`
	color: #fff;
	font-size: 32px;
	font-weight: 600;
	margin: 0;

	span {
		color: #e50914;
	}

	@media screen and (max-width: 768px) {
		font-size: 26px;
	}
`;

export const ProfileSection = styled.div`
	display: flex;
	align-items: center;
	gap: 25px;
	background: rgb(33, 33, 33);
	padding: 25px;
	border-radius: 8px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		text-align: center;
		gap: 20px;
	}
`;

export const ProfileAvatar = styled.div`
	width: 80px;
	height: 80px;
	background-color: #e50914;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 36px;
	font-weight: 600;
	color: white;
	flex-shrink: 0;
`;

export const ProfileInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const ProfileEmail = styled.h2`
	color: #fff;
	font-size: 20px;
	font-weight: 500;
	margin: 0;

	@media screen and (max-width: 768px) {
		font-size: 18px;
	}
`;

export const ProfileDetail = styled.p`
	color: #909090;
	font-size: 14px;
	margin: 0;

	span {
		color: #e50914;
		font-weight: 500;
	}
`;

export const StatsSection = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	gap: 15px;
	margin-bottom: 40px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export const StatCard = styled.div`
	background: rgb(33, 33, 33);
	padding: 20px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	transition: background 0.2s ease;

	&:hover {
		background: rgb(37, 37, 37);
	}
`;

export const StatLabel = styled.p`
	color: #909090;
	font-size: 13px;
	font-weight: 400;
	margin: 0;
`;

export const StatValue = styled.p`
	color: #fff;
	font-size: 28px;
	font-weight: 600;
	margin: 0;
`;

export const MyImagesSection = styled.div`
	margin-top: 40px;
`;

export const SectionTitle = styled.h2`
	color: #fff;
	font-size: 28px;
	font-weight: 700;
	margin: 0 0 25px 0;

	span {
		color: #e50914;
	}

	@media screen and (max-width: 768px) {
		font-size: 22px;
	}
`;

export const MyImageGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 20px;

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 15px;
	}
`;

export const MyImageCard = styled.div`
	position: relative;
	background: rgba(47, 47, 47, 0.5);
	border-radius: 12px;
	overflow: hidden;
	cursor: pointer;
	transition: all 0.3s ease;
	aspect-ratio: 1;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 40px rgba(229, 9, 20, 0.3);

		img {
			transform: scale(1.1);
		}
	}
`;

export const ImageActions = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	display: flex;
	gap: 8px;
	opacity: 0;
	transition: opacity 0.3s ease;

	${MyImageCard}:hover & {
		opacity: 1;
	}
`;

export const ImageActionButton = styled.button`
	background: rgba(0, 0, 0, 0.8);
	color: white;
	border: none;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	transition: all 0.3s ease;

	svg {
		font-size: 14px;
	}

	&:hover {
		background: #e50914;
		transform: scale(1.1);
	}

	&.delete {
		background: rgba(255, 0, 0, 0.8);

		&:hover {
			background: #ff0000;
		}
	}
`;

export const ImageInfo = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 10px;
	background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
	color: white;
	font-size: 11px;
	text-align: center;
`;
