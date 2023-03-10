import styled from "@emotion/styled";

import Button from "../../shared/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  cursor: crosshair;
  @media (max-width: 1100px) {
    padding: 10rem 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 80vw;
  gap: 4rem;
  z-index: 4;
  @media (max-width: 1100px) {
    height: fit-content;
    flex-direction: column;
  }
  @media (max-width: 760px) {
    width: 85vw;
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  flex: 4;
  margin-top: 2.5rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 760px) {
    margin-top: 0;
  }
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
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);

  & > div {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.8rem;
    @media (max-width: 1100px) {
      width: 100%;
    }
  }
  @media (max-width: 1100px) {
    padding: 1rem 0;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const SubmitButton = styled(Button)`
  width: 10rem;
  align-self: flex-end;
`;
