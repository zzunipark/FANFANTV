import styled from "styled-components";

export const ServiceStatusContainer = styled.div`
  background-color: rgb(27, 27, 27);
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
`;

export const TitleText = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5px;
`;

export const DescText = styled.p`
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
`;

export const ProgressBarContainer = styled.div`
  width: 400px;
  height: 10px;
  background-color: #333;
  margin-top: 20px;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: #4caf50;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const StopButton = styled.button`
  width: 75px;
  height: 40px;
  background-color: #f44336;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 10px;
`;

export const ReturnButton = styled.button`
  width: 75px;
  height: 40px;
  background-color: #2196f3;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 10px;
`;
