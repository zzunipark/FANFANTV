import React, { useState, useEffect } from "react";
import * as s from "../style/ServiceStatusStyle";
import { Link } from "react-router-dom";

const ServiceStatus = () => {
	const [secondsLeft, setSecondsLeft] = useState(5);
	const [redirected, setRedirected] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		const redirectTimer = setTimeout(() => {
			setRedirected(true);
			window.location.replace("https://zzunilabs.statuspage.io");
		}, 5000);

		const intervalTimer = setInterval(() => {
			if (!isPaused) {
				setSecondsLeft((prevSeconds) => prevSeconds - 1);
			}
		}, 1000);

		return () => {
			clearTimeout(redirectTimer);
			clearInterval(intervalTimer);
		};
	}, [isPaused]);

	const progress = redirected ? 100 : ((5 - secondsLeft) / 5) * 100;

	const handlePause = () => {
		setIsPaused(true);
	};

	const handleReturn = () => {
		window.location.replace("/");
	};

	return (
		<s.ServiceStatusContainer>
			<s.TitleText>서비스 상태 페이지로 이동합니다.</s.TitleText>
			{redirected ? (
				<s.DescText>페이지 이동 중입니다...</s.DescText>
			) : (
				<s.DescText>{`${Math.max(
					secondsLeft,
					0
				)}초 후 zzunilabs.statuspage.io로 이동됩니다.`}</s.DescText>
			)}
			<s.ProgressBarContainer>
				<s.ProgressBar style={{ width: `${progress}%` }} />
			</s.ProgressBarContainer>
			<s.ButtonContainer>
				<s.StopButton onClick={handlePause}>정지</s.StopButton>
				<s.ReturnButton onClick={handleReturn}>뒤로가기</s.ReturnButton>
			</s.ButtonContainer>
		</s.ServiceStatusContainer>
	);
};

export default ServiceStatus;
