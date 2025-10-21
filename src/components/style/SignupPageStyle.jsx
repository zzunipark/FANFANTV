import styled from "styled-components";

export const SignupContainer = styled.div`
	background-color: rgb(27, 27, 27);
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px 20px;
`;

export const SignupBox = styled.div`
	background: rgba(37, 37, 37, 0.95);
	border-radius: 12px;
	padding: 40px;
	width: 100%;
	max-width: 450px;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

	@media screen and (max-width: 768px) {
		padding: 30px 20px;
	}
`;

export const SignupTitle = styled.h1`
	color: #fff;
	font-size: 32px;
	font-weight: 700;
	text-align: center;
	margin: 0 0 10px 0;

	@media screen and (max-width: 768px) {
		font-size: 28px;
	}
`;

export const SignupSubtitle = styled.p`
	color: #a5a5a5;
	font-size: 16px;
	text-align: center;
	margin: 0 0 30px 0;
`;

export const SignupForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Label = styled.label`
	color: #fff;
	font-size: 14px;
	font-weight: 600;
`;

export const Select = styled.select`
	background: rgba(47, 47, 47, 0.8);
	border: 2px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	color: #fff;
	font-size: 16px;
	padding: 12px 15px;
	transition: all 0.3s ease;
	cursor: pointer;

	&:focus {
		outline: none;
		border-color: #e50914;
		background: rgba(47, 47, 47, 1);
	}

	option {
		background: rgb(37, 37, 37);
		color: #fff;
		padding: 10px;
	}
`;

export const Input = styled.input`
	background: rgba(47, 47, 47, 0.8);
	border: 2px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	color: #fff;
	font-size: 16px;
	padding: 12px 15px;
	transition: all 0.3s ease;

	&::placeholder {
		color: #666;
	}

	&:focus {
		outline: none;
		border-color: #e50914;
		background: rgba(47, 47, 47, 1);
	}
`;

export const SignupButton = styled.button`
	background: linear-gradient(90deg, #e50914 0%, #b20710 100%);
	color: white;
	font-size: 18px;
	font-weight: 600;
	padding: 14px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.3s ease;
	margin-top: 10px;

	&:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(229, 9, 20, 0.4);
	}

	&:active:not(:disabled) {
		transform: translateY(0);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

export const LoginLink = styled.p`
	color: #a5a5a5;
	font-size: 14px;
	text-align: center;
	margin: 20px 0 0 0;
	cursor: pointer;
	transition: color 0.3s ease;

	&:hover {
		color: #e50914;
	}
`;
