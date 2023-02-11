import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 175px;
  gap: 0.8rem;

  @media (max-width: 720px) {
    padding: 4rem 3rem;
  }
`;

export const TextContent = styled.div`
  width: 72%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  color: ${({ theme }) => theme.black};
  margin-bottom: 0.5rem;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  line-height: 110%;
  font-size: 4.6rem;
  letter-spacing: -0.0075em;
  margin-bottom: 0.5rem;
  @media (max-width: 720px) {
    font-size: 3.5rem;
  }
`;

export const SideText = styled.div`
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.0175em;
  color: #373737;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  p {
    margin: 0.5rem 0;
  }
`;
