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
  font-size: 2.8rem;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme?.lightTurquoise};
`;

const SmTitle = styled(AdressTitle)`
  font-weight: 800;
  font-size: 1.1rem;
`;

export const Tel = styled(SmTitle)``;

export const Mail = styled(SmTitle)``;

export const Detail = styled.h4`
  margin: 0;
  width: 80%;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 150%;
  letter-spacing: -0.0075em;
  margin-bottom: 10px;
  color: black;
`;


export const LinksContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.3rem;
`;
