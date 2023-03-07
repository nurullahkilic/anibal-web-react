import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > .loader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 6rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: pulsOut 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.75));
  }
  .loader:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1rem ${({theme})=>theme?.lightTurquoise} ;
    animation-name: pulsIn;
  }
  .loader:after {
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);
    box-shadow: 0 0 0 0 ${({theme})=>theme?.lightTurquoise};
  }

  @keyframes pulsIn {
    0% {
      box-shadow: inset 0 0 0 1rem ${({theme})=>theme?.lightTurquoise};
      opacity: 1;
    }
    50%,
    100% {
      box-shadow: inset 0 0 0 0 ${({theme})=>theme?.lightTurquoise};
      opacity: 0;
    }
  }

  @keyframes pulsOut {
    0%,
    50% {
      box-shadow: 0 0 0 0 ${({theme})=>theme?.lightTurquoise};
      opacity: 0;
    }
    100% {
      box-shadow: 0 0 0 1rem ${({theme})=>theme?.lightTurquoise};
      opacity: 1;
    }
  }
`;
