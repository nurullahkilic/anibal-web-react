import styled from "@emotion/styled";

export const Container = styled.div`
  /* position: relative; */
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 6rem;
  background-color: #1d3141;
  @media (max-width: 760px) {
    display: none;
  }
`;

export const Background = styled.div`
  position: fixed;
  padding: 0 200px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  & > svg {
    opacity: 0.4;
  }
  @media (max-width: 1500px) {
    padding: 0 1.3rem;
  }
`;

export const CitiesWrapper = styled.div`
  width: 100%;
  padding: 20rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 2;
`;

export const City = styled.h3`
  position: relative;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.625rem;
  font-weight: 900;
  color: white;
  cursor: pointer;
  transition: 200ms all;

  &:hover {
    color: ${({ theme }) => theme?.lightTurquoise};
    &::after {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::after {
    transition: 200ms all;
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-20px);

    content: "${({ projectName }) => (projectName ? projectName : "")}";
    font-size: 1rem;
    font-weight: 500;
    line-height: 110%;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.lightTurquoise};
    text-align: center;
    bottom: -5px;
    text-transform: uppercase;
  }

  .reveal {
    position: fixed;
    width: 350px;
    height: 300px;
    pointer-events: none;
    z-index: 5;
  }

  .reveal__inner,
  .reveal__image {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;
