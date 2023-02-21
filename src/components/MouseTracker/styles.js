import styled from "@emotion/styled";

export const Outer = styled.div`
  position: absolute;
  margin: 0 auto;
  cursor: crosshair;
  height: auto;
  min-height: 100vh;
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 760px) {
    cursor: initial;
    overflow: visible;
  }

  @media (max-width: 650px) {
    height: auto;
    padding-top: 14rem;
  }
`
export const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
  display: block;

  @media (max-width: 760px) {
    display: none;
  }
`