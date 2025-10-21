import styled from "styled-components";

export const ForgotPasswordContainer = styled.div`
	background-color: rgb(27, 27, 27);
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 20px;
`;

export const FANFANTVTitle = styled.p`
	color: #fff;
	font-size: 24px;
	font-weight: 700;
	line-height: 75px;
`;

export const ForgotPasswordBox = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 400px;
	background-color: #252525;
	border-radius: 10px;
`;

export const EmailInputBox = styled.input`
	width: 300px;
	height: 50px;
	background-color: #2f2f2f;
	border-radius: 5px;
	border: none;
	margin-top: 0px;
	padding-left: 20px;
	font-size: 18px;
	font-weight: 400;
	line-height: 75px;
	color: white;

	&:focus {
		outline: none;
	}
`;

export const ErrorText = styled.p`
	color: #a5a5a5;
	font-size: 12px;
	font-weight: 400;
	margin-top: 10px;
`;

export const FindPasswordButton = styled.button`
	width: 320px;
	height: 50px;
	background-color: gray;
	border: none;
	margin-top: 10px;
	font-size: 18px;
	font-weight: 400;
	color: white;
	border-radius: 3px;
	cursor: pointer;
	margin-bottom: 25px;

	&:focus {
		outline: none;
	}
`;
