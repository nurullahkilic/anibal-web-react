import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6.25rem;
  padding-top: 4rem;
  @media (max-width: 720px) {
    flex-direction: column;
  padding-top: 7rem;
    gap: 3.25rem;
  }
`;

export const HeroImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30rem;
  object-fit: cover;
`;

export const HeroTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 40vw;
  @media (max-width: 720px) {
    width: 70vw;
    text-align: center;
    align-items: center;

  }
`;

export const BgText = styled.div`
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
width: 80%;
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
