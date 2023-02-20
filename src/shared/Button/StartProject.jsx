import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useModal} from "../../context/ModalContext"

const StartProjectButton = ({ children, ...props }) => {
  const [isHidden, setIsHidden] = useState(true);
  const toggleStartProject = useModal(state=>state.toggleStartProject);
  

  function calculateWindowSize() {
    setIsHidden(window.pageYOffset < window.innerHeight / 2);
  }

  useEffect(() => {
    window.addEventListener("scroll", calculateWindowSize);
    return () => {
      window.removeEventListener("scroll", calculateWindowSize);
    };
  });

  return (
    <StartProjectButtonWrapper
      className={isHidden ? "hidden" : null}
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
  padding: 1rem 2.5rem;
  width: fit-content;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 9999px;
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.0075em;
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
