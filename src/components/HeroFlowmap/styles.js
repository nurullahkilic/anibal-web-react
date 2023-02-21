import styled from "@emotion/styled";
import { animated } from "react-spring";

export const Outer = styled.section`
  position: relative;
  height: fit-content;
  width: 99vw;
  height: 100vh;
  overflow: hidden;
`;

export const WrapCanvas = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
