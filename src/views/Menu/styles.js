import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: turquoise;
  z-index: 99999;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
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
  gap: 3.125rem;
  @media (max-width: 1020px) {
    width: 80vw;
  }
  @media (max-width: 720px) {
    width: 90vw;
  }
`;

export const LinkItem = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 4.65rem;
  line-height: 3.75rem;
  letter-spacing: -0.008em;
  color: rgba(0, 0, 0, 0.2);
  transition: 200ms color;

  &:hover {
    color: white;
  }

  @media (max-width: 720px) {
    font-size: 4.2rem;
    line-height: 3.8rem;
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
  gap: 1.87rem;
`;

export const StartProjectButton = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  width: fit-content;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 9999px;
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.0075em;
  color: #ffffff;

  &:hover {
    background: rgba(255, 255, 255, 1);
    color: ${({ theme }) => theme.turquoise};
  }
`;
