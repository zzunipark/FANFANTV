import styled from "styled-components";

export const LoginContainer = styled.div`
	background-color: rgb(27, 27, 27);
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 20px;
	gap: 15px;
`;

export const FANFANTVTitle = styled.h1`
	color: #e50914;
	font-size: 36px;
	font-weight: 800;
	margin: 30px 0 20px 0;
	text-align: center;
	text-shadow: 0 0 20px rgba(229, 9, 20, 0.3);
`;

export const LoginBox = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-width: 450px;
	background: rgba(37, 37, 37, 0.95);
	border-radius: 12px;
	padding: 20px;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(10px);

	@media screen and (max-width: 500px) {
		max-width: 100%;
	}
`;

export const SignUpBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	width: 100%;
	max-width: 450px;
	padding: 20px;
	background: rgba(37, 37, 37, 0.95);
	border-radius: 12px;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

	@media screen and (max-width: 500px) {
		max-width: 100%;
	}
`;

export const InputWrapper = styled.div`
	width: 100%;
	margin-bottom: 20px;
`;

export const InputLabel = styled.label`
	display: block;
	color: #e0e0e0;
	font-size: 14px;
	font-weight: 500;
	margin-bottom: 8px;
	padding-left: 5px;
`;

export const EmailInputBox = styled.input`
	width: 100%;
	height: 55px;
	background-color: #2f2f2f;
	border-radius: 8px;
	border: 2px solid transparent;
	padding: 0 20px;
	font-size: 16px;
	font-weight: 400;
	color: white;
	transition: all 0.3s ease;
	box-sizing: border-box;

	&::placeholder {
		color: #707070;
	}

	&:focus {
		outline: none;
		border-color: #e50914;
		background-color: #3a3a3a;
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

export const SelectBox = styled.select`
	width: 100%;
	height: 55px;
	background-color: #2f2f2f;
	border-radius: 8px;
	border: 2px solid transparent;
	padding: 0 20px;
	font-size: 16px;
	font-weight: 400;
	color: white;
	transition: all 0.3s ease;
	box-sizing: border-box;
	cursor: pointer;

	&:focus {
		outline: none;
		border-color: #e50914;
		background-color: #3a3a3a;
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	option {
		background-color: #2f2f2f;
		color: white;
		padding: 10px;
	}
`;

export const PasswordInputBox = styled.input`
	width: 100%;
	height: 55px;
	background-color: #2f2f2f;
	border-radius: 8px;
	border: 2px solid transparent;
	padding: 0 20px;
	font-size: 16px;
	font-weight: 400;
	color: white;
	transition: all 0.3s ease;
	box-sizing: border-box;

	&::placeholder {
		color: #707070;
	}

	&:focus {
		outline: none;
		border-color: #e50914;
		background-color: #3a3a3a;
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

export const ReminderText = styled.p`
	color: #909090;
	font-size: 11px;
	font-weight: 400;
	text-align: center;
	line-height: 1.5;
	margin: 15px 0 0 0;
`;

export const LoginButton = styled.button`
	width: 100%;
	height: 55px;
	background: linear-gradient(90deg, #e50914 0%, #b20710 100%);
	border: none;
	font-size: 18px;
	font-weight: 600;
	color: white;
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.3s ease;
	margin-top: 10px;

	&:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(229, 9, 20, 0.4);
	}

	&:active:not(:disabled) {
		transform: translateY(0);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		transform: none;
	}
`;

export const ForgotPasswordText = styled.p`
	color: #a5a5a5;
	font-size: 14px;
	font-weight: 400;
	text-align: center;
	cursor: pointer;
	margin: 20px 0 10px 0;
	transition: color 0.3s ease;

	&:hover {
		color: #e50914;
	}
`;

export const ErrorText = styled.p`
	color: #ff4444;
	font-size: 14px;
	font-weight: 500;
	margin: 10px 0;
	text-align: center;
	background-color: rgba(255, 68, 68, 0.1);
	padding: 10px;
	border-radius: 5px;
	border-left: 3px solid #ff4444;
`;

export const SignUpText = styled.span`
	color: #a5a5a5;
	font-size: 15px;
	font-weight: 400;
`;

export const SignUpButton = styled.span`
	color: #e50914;
	font-size: 15px;
	font-weight: 600;
	cursor: pointer;
	transition: color 0.3s ease;

	&:hover {
		color: #f40612;
		text-decoration: underline;
	}
`;

export const Formbox = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 0 20px;
`;
