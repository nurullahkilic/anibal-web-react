import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 9rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h4`
  margin: 0;
  font-weight: 700;
  font-size: 3.4rem;
  line-height: 110%;
  letter-spacing: -0.0075em;
  color: ${({ theme }) => theme.black};
  margin-bottom: 5rem;
`;

export const LogoItemsContent = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem 2rem;
  @media (max-width: 720px) {
    width: 90%;
    gap: 2.5rem 0.5rem;
  }
`;

export const LogoItem = styled.a`
  position: relative;
  flex: 1 0 21%;
  text-decoration: none;
  height: 5rem;
  width: 11rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 720px) {
    flex: 1 0 45%;
  }
`;

export const LogoImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
