import styled from "@emotion/styled";

import Title from "../../shared/Title";
import Button from "../../shared/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 10rem;
  @media (max-width: 760px) {
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 80vw;
  gap: 4rem;
  @media (max-width: 760px) {
    width: 85vw;
    height: fit-content;
    flex-direction: column;
  }
`;

export const AdressContent = styled.div`
  margin-top: 2.5rem;
  flex: 4;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 760px) {
    margin-top: 0;
  }
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
  font-size: 2.5rem;
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

export const ContactCard = styled.div`
  flex: 3;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 2rem 2.5rem;
  background-color: white;

  & > div {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2.5rem;
  }
  @media (max-width: 760px) {
    padding: 1rem 0;
    & > div {
    width: 100%;
  }
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 760px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const SubmitButton = styled(Button)`
  width: 10rem;
  align-self: flex-end;
`;
