import styled from "@emotion/styled";
import { Title } from "../../shared/BaseLayout/styles";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 760px) {
    flex-direction: column;
    padding: 8rem 0 4rem 0;
    height: fit-content;
  }
`;

export const BackgroundTexture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  @media (max-width: 760px) {
    display: none;
  }
`;

export const SideContent = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-left: 7rem;
  @media (max-width: 760px) {
    visibility: visible;
    flex-direction: column;
    margin-left: 0;
    padding: 4rem 0;
  }
`;

export const HeroTextContent = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  z-index: 3;
  @media (max-width: 760px) {
    width: 100%;
    text-align: center;
    align-items: center;
    padding: 2rem 0;
  }
`;

export const HeroTitle = styled(Title)`
  font-size: 10rem;
  @media (max-width: 760px) {
    font-size: 8rem;
    text-align: center;
    padding: 0 4rem;
  }
`;

export const BgText = styled.div`
  width: 65%;
  font-weight: 900;
  font-size: 5rem;
  line-height: 110%;
  letter-spacing: 0.0075em;
  margin-bottom: 1.4rem;
  color: ${({ theme }) => theme.black};
  @media (max-width: 1500px) {
    font-size: 3.7rem;
  }
  @media (max-width: 760px) {
    font-size: 3rem;
  }
`;

export const SmText = styled.div`
  width: 55%;
  font-weight: 500;
  font-size: 1.6rem;
  letter-spacing: 0.0075em;
  color: ${({ theme }) => theme.black};
  & span {
    color: ${({ theme }) => theme.turquoise};
  }
  @media (max-width: 1500px) {
    width: 70%;
    font-size: 1.3rem;
    line-height: 150%;
  }
  @media (max-width: 760px) {
    width: 70%;
    font-size: 1.3rem;
  }
`;
