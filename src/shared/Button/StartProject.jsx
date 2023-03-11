import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useModal } from "../../context/ModalContext";
import { useScrollEvent } from "../../util";

const StartProjectButton = ({ children, ...props }) => {
  const { isPass } = useScrollEvent();
  const toggleStartProject = useModal((state) => state.toggleStartProject);

  return (
    <StartProjectButtonWrapper
      className={!isPass ? "hidden" : null}
      onClick={toggleStartProject}
      {...props}
    >
      {children}
    </StartProjectButtonWrapper>
  );
};

export default StartProjectButton;

const StartProjectButtonWrapper = styled.button`
  text-decoration: none;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 9999px;
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;
  font-family: "SofiaPro";
  font-size: 1rem;
  line-height: 24px;
  font-weight: 600;
  letter-spacing: 0.0075em;
  padding: 1.2rem 3.2rem;
  color: #ffffff;
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  z-index: 89;
  visibility: visible;
  opacity: 1;

  &.hidden {
    visibility: hidden;
    opacity: 0;
  }

  &:hover {
    background: rgba(255, 255, 255, 1);
    color: ${({ theme }) => theme.turquoise};
  }
`;
