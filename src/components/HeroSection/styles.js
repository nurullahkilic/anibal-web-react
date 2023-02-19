import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 760px) {
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
  margin-left: 7rem;
  @media (max-width: 760px) {
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
  @media (max-width: 760px) {
    width: 100%;
    text-align: center;
    align-items: center;
    padding: 2rem 0;
  }
`;

export const BgText = styled.div`
  width: 70%;
  font-weight: 900;
  font-size: 5.2rem;
  line-height: 100%;
  letter-spacing: 0.0075em;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.black};
  @media (max-width: 760px) {
    font-size: 3.7rem;
  }
`;

export const SmText = styled.div`
  width: 55%;
  font-weight: 500;
  font-size: 1.15rem;
  letter-spacing: 0.0075em;
  color: ${({ theme }) => theme.black};
  & span {
    color: ${({ theme }) => theme.turquoise};
  }
  @media (max-width: 760px) {
    width: 70%;
    font-size: 1.3rem;
  }
`;
