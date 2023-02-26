import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: ${({ theme }) => theme.lightTurquoise};
  background-color: white;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
`;

export const CloseButton = styled.svg`
  position: absolute;
  top: 3rem;
  right: 3rem;
  z-index: 35;
  cursor: pointer;
`;
