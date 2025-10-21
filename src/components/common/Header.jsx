import React from "react";
import { useNavigate } from "react-router-dom";
import * as s from "../style/MainPageStyle";

const Header = ({ currentPage, setCurrentPage, isLoggedIn, onLogout }) => {
	const navigate = useNavigate();

	const handleNavigation = (page) => {
		if (page === "home") {
			navigate("/");
		} else {
			setCurrentPage(page);
		}
	};

	return (
		<>
			<s.SubNavbar>
				<s.SubNavbarul>
					{isLoggedIn ? (
						<s.SubNavbarli onClick={onLogout}>
							로그아웃
						</s.SubNavbarli>
					) : (
						<s.LinkSubNav to="/login">로그인</s.LinkSubNav>
					)}
					{!isLoggedIn && (
						<s.LinkSubNav to="/signup">회원가입</s.LinkSubNav>
					)}
					<s.LinkSubNav to="/notice">공지사항</s.LinkSubNav>
				</s.SubNavbarul>
			</s.SubNavbar>
			<s.MainNavbar>
				<s.MainNavbarLogoText
					onClick={() => handleNavigation("home")}
					style={{ cursor: "pointer" }}
				>
					FANFANTV
				</s.MainNavbarLogoText>
				<s.MainNavbarul>
					<s.MainNavbarli
						className={currentPage === "home" ? "active" : ""}
						onClick={() => handleNavigation("home")}
					>
						홈
					</s.MainNavbarli>
					<s.MainNavbarli
						className={currentPage === "my" ? "active" : ""}
						onClick={() => handleNavigation("my")}
					>
						MY
					</s.MainNavbarli>
					<s.MainNavbarli
						className={currentPage === "gallery" ? "active" : ""}
						onClick={() => handleNavigation("gallery")}
					>
						갤러리
					</s.MainNavbarli>
					<s.MainNavbarli
						className={currentPage === "upload" ? "active" : ""}
						onClick={() => handleNavigation("upload")}
					>
						이미지 업로드
					</s.MainNavbarli>
				</s.MainNavbarul>
			</s.MainNavbar>
		</>
	);
};

export default Header;
