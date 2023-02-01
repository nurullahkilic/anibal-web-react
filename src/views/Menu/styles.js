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
  padding: 1.3rem;
  padding-bottom: 6rem;
  width: 60vw;
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
