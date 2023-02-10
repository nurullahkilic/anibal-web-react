import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  @media (max-width: 720px) {
    flex-direction: column;
    padding: 8rem 0 4rem 0;
    height: fit-content;
  }
`;

export const SideContent = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 720px) {
    flex-direction: column;
    padding: 4rem 0;
  }
`;

export const HeroTextContent = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  @media (max-width: 720px) {
    width: 70vw;
    text-align: center;
    align-items: center;
    padding: 2rem 0;
  }
`;

export const BgText = styled.div`
  width: 70%;
  font-weight: 700;
  font-size: 5rem;
  line-height: 110%;
  letter-spacing: 0.0075em;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.black};
  @media (max-width: 720px) {
    font-size: 3.7rem;
  }
`;

export const SmText = styled.div`
  width: 50%;
  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: 0.0075em;
  color: ${({ theme }) => theme.black};
  & > span {
    color: ${({ theme }) => theme.turquoise};
  }
  @media (max-width: 720px) {
    width: 95%;
    font-size: 1.3rem;
  }
`;
