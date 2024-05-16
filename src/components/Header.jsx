import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { GiFastBackwardButton } from "react-icons/gi";

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <div>
        <Title>CINEFLEX</Title>
      </div>
      <BackIcon onClick={() => navigate(-1)} />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: 67px;
  background-color: #c3cfd9;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;

  div {
    position: relative;
  }
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  color: #e8833a;
`;

const BackIcon = styled(GiFastBackwardButton)`
  font-size: 30px;
  color: #e8833a;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  cursor: pointer;
`;
