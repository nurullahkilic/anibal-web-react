import styled from "@emotion/styled";
import Title from "../../shared/Title";

export const Container = styled.div`
  width: 100%;
  padding: 9rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: white; */
`;

export const BgTitle = styled(Title)`
  @media (max-width: 760px) {
    font-size: 3.5rem;
  }
`;

export const LogoItemsContent = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem 2rem;
  margin-top: 5rem;
  @media (max-width: 760px) {
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
  @media (max-width: 760px) {
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
