import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 6rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 6rem;

  @media (max-width: 760px) {
    gap: 6rem;
  }
`;

export const ImageWrapper = styled(motion.div)`
  visibility: ${({ isClose }) => (!isClose ? "visible" : "hidden")};
  transition: 200ms all;
  @media (max-width: 1000px) {
    display: none;
    visibility: hidden;
  }
`;

export const ImageContent = styled.img`
  position: fixed;
  top: 50%;
  right: 100px;
  z-index: 10;
  transform: translateY(-50%);
  width: 40vw;
  height: 50vh;
  object-fit: cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  overflow: hidden;
`;
