import styled from "@emotion/styled";
import { Link } from "react-router-dom";

let isBackWhiteProp = false;

const Button = ({ children, isBackWhite, ...props }) => {
  isBackWhiteProp = isBackWhite;
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 100%;
  letter-spacing: 0.0075em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 9999px;
  transition: 300ms all;
  cursor: pointer;

  color: ${({ theme }) => (isBackWhiteProp ? theme.turquoise : "white")};
  border: 1px solid
    ${({ theme }) => (isBackWhiteProp ? theme.turquoise : "white")};
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) =>
      isBackWhiteProp ? theme.turquoise : "white"};
    color: ${({ theme }) => (!isBackWhiteProp ? theme.turquoise : "white")};
    border: 1px solid
      ${({ theme }) => (!isBackWhiteProp ? theme.turquoise : "white")};
  }
`;
