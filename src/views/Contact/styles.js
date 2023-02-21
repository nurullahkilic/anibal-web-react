import styled from "@emotion/styled";

import Title from "../../shared/Title";

export const AdressContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const Adress = styled.div`
  flex: 1;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;

export const AdressTitle = styled(Title)`
  width: 80%;
  font-weight: 900;
  font-size: 3.6rem;
  line-height: 115%;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme?.red};
  @media (max-width: 1500px) {
    font-size: 3.3rem;
  }
  @media (max-width: 760px) {
    font-size: 3rem;
  }
`;

const SmTitle = styled(AdressTitle)`
  font-weight: 800;
  font-size: 2rem;
  @media (max-width: 1500px) {
    font-size: 1.4rem;
  }
  @media (max-width: 760px) {
    font-size: 1.3rem;
  }
`;

export const Tel = styled(SmTitle)``;

export const Mail = styled(SmTitle)``;

export const Detail = styled.h4`
  margin: 0;
  width: 80%;
  font-weight: 900;
  font-size: 2rem;
  line-height: 120%;
  letter-spacing: -0.0075em;
  margin-bottom: 10px;
  color: black;
  @media (max-width: 1500px) {
    font-size: 1.5rem;
  }
  @media (max-width: 760px) {
    font-size: 1.7rem;
  }
`;

export const LinksContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.3rem;

  & > a svg {
    & g {
      transition: 250ms fill;
      & path {
        transition: 250ms fill;
      }
    }
  }
  & > a:hover svg {
    & g {
      fill: ${({ theme }) => theme?.red};
      stroke: transparent;
      & path {
        fill: white;
      }
    }
    & path {
      fill: white;
    }
  }
`;
