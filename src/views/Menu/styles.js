import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: turquoise;
  z-index: 99999;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.lightTurquoise};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LinksContent = styled.div`
  flex: 1;
  padding: 1.3rem;
  width: 64vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.5rem;
  @media (max-width: 1020px) {
    width: 80vw;
  }
  @media (max-width: 760px) {
    width: 93vw;
  }
`;

export const LinkItem = styled.a`
  text-decoration: none;
  font-weight: 900;
  font-size: 6rem;
  line-height: 2.5rem;
  letter-spacing: -0.008em;
  color: rgba(0, 0, 0, 0.2);
  transition: 200ms color;

  &:hover {
    color: white;
  }
  @media (max-width: 1500px) {
  font-size: 5rem;
  line-height: 2.3rem;
  

  }
  @media (max-width: 760px) {
    font-size: 4.8rem;
    line-height: 3.8rem;
  }
  @media (max-width: 400px) {
    font-size: 3.4rem;
    line-height: 3rem;
  }
`;

export const BottomSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 3.125rem;
  height: fit-content;
  transform: translateY(-3rem) !important;
  width: 100%;
`;

export const BlankSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
`;

export const StartProjectButton = styled.button`
  text-decoration: none;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "SofiaPro";
  padding: 1.2rem 3.2rem;
  width: fit-content;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 9999px;
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  line-height: 24px;
  letter-spacing: 0.0075em;
  color: #ffffff;

  &:hover {
    background: rgba(255, 255, 255, 1);
    color: ${({ theme }) => theme.turquoise};
  }
  @media (max-width: 760px) {
    display: none;
  }
`;
