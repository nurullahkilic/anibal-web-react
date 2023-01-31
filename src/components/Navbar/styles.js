import styled from "@emotion/styled";

export const Content = styled.div`
  background-color: red;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLeft = styled.div`
  background-color: aqua;
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Logo = styled.img`
  background-color: pink;
`;

export const NavbarRight = styled.div`
  background-color: yellow;
  width: 50px;
  height: 100%;
`;

export const NavbarText = styled.h4`
font-weight: 700;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 0.0075em;
color: #373737;
`;
