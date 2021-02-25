import styled from 'styled-components';
import background from '../../images/background.png';

export const HeroContainer = styled.div`
  background: url(${background}) center center/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  margin-top: -80px;
`;

export const Trip = styled.h1`
  color: #1c1b1b;
  font-size: 100px;
  margin-top: 0px;

  @media screen and (max-width: 960px) {
    font-size: 70px;
  }

  @media screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

export const TripContent = styled.p`
  margin-top: 8px;
  color: #fff;
  font-size: 32px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const HeroBtns = styled.div`
  margin-top: 32px;
`;

export const Button = styled.button`
  border-radius: 30px;
  background: ${({ primary }) => (primary ? "#FF4040" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? "#0467FB" : "#FF4040")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;