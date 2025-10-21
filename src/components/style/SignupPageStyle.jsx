import styled from "styled-components";

export const SignupContainer = styled.div`
	background-color: rgb(27, 27, 27);
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 40px 20px;
	gap: 30px;
`;

export const IconWrapper = styled.div`
	width: 100px;
	height: 100px;
	background: rgba(229, 9, 20, 0.1);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 3px solid rgba(229, 9, 20, 0.3);
`;

export const LockIcon = styled.span`
	font-size: 50px;
	filter: grayscale(100%);
	opacity: 0.7;
`;

export const NoticeTitleText = styled.h1`
	color: #fff;
	font-size: 36px;
	font-weight: 700;
	text-align: center;
	margin: 0;

	@media screen and (max-width: 768px) {
		font-size: 28px;
	}
`;

export const NoticeDescText = styled.p`
	color: #a5a5a5;
	font-size: 18px;
	font-weight: 400;
	text-align: center;
	line-height: 1.8;
	margin: 0;

	@media screen and (max-width: 768px) {
		font-size: 16px;
	}
`;

export const ContactBox = styled.div`
	background: rgba(37, 37, 37, 0.95);
	border-radius: 12px;
	padding: 30px;
	width: 100%;
	max-width: 500px;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(10px);

	@media screen and (max-width: 768px) {
		padding: 20px;
	}
`;

export const ContactTitle = styled.h2`
	color: #e50914;
	font-size: 24px;
	font-weight: 600;
	margin: 0 0 20px 0;
	text-align: center;
`;

export const ContactItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-bottom: 20px;
	padding: 15px;
	background: rgba(47, 47, 47, 0.5);
	border-radius: 8px;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const ContactLabel = styled.span`
	color: #909090;
	font-size: 14px;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

export const ContactLink = styled.a`
	color: #e50914;
	font-size: 18px;
	font-weight: 600;
	text-decoration: none;
	transition: all 0.3s ease;

	&:hover {
		color: #f40612;
		text-decoration: underline;
	}
`;

export const ContactText = styled.span`
	color: #fff;
	font-size: 18px;
	font-weight: 500;
`;

export const BackButton = styled.button`
	background: linear-gradient(90deg, #e50914 0%, #b20710 100%);
	color: white;
	font-size: 18px;
	font-weight: 600;
	padding: 15px 40px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(229, 9, 20, 0.4);
	}

	&:active {
		transform: translateY(0);
	}

	@media screen and (max-width: 768px) {
		font-size: 16px;
		padding: 12px 30px;
	}
`;
