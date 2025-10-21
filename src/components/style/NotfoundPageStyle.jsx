import styled from "styled-components";

export const NotfoundPageContainer = styled.div`
	background-color: rgb(27, 27, 27);
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	padding: 20px;
`;

export const NotfoundPageTitleText = styled.h1`
	color: #e50914;
	font-size: 120px;
	font-weight: 900;
	text-align: center;
	margin: 0;
	text-shadow: 0 0 30px rgba(229, 9, 20, 0.5);
	animation: pulse 2s ease-in-out infinite;

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.7;
		}
	}

	@media screen and (max-width: 768px) {
		font-size: 80px;
	}
`;

export const NotfoundPageSubTitle = styled.h2`
	color: #fff;
	font-size: 32px;
	font-weight: 700;
	text-align: center;
	margin: 0;

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}
`;

export const NotfoundPageDescText = styled.p`
	color: #a5a5a5;
	font-size: 18px;
	font-weight: 400;
	text-align: center;
	line-height: 1.6;
	margin: 10px 0 30px 0;

	@media screen and (max-width: 768px) {
		font-size: 16px;
		padding: 0 20px;
	}
`;

export const BackButton = styled.button`
	background-color: #e50914;
	color: white;
	font-size: 18px;
	font-weight: 600;
	padding: 15px 40px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: #f40612;
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
