import styled from "@emotion/styled";

const Button = ({ children, isBackWhite, ...props }) => {
  return (
    <ButtonWrapper isbackwhite={isBackWhite ? 1 : 0} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  text-decoration: none;
  font-family: "SofiaPro";
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 100%;
  letter-spacing: 0.0075em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  transition: 300ms all;
  cursor: pointer;

  color: ${({ isbackwhite, theme }) =>
    isbackwhite ? theme.turquoise : "white"};
  border: 1px solid
    ${({ isbackwhite, theme }) => (isbackwhite ? theme.turquoise : "white")};
  background-color: transparent;

  &:hover {
    background-color: ${({ isbackwhite, theme }) =>
      isbackwhite ? theme.turquoise : "white"};
    color: ${({ isbackwhite, theme }) =>
      !isbackwhite ? theme.turquoise : "white"};
    border: 1px solid
      ${({ isbackwhite, theme }) => (!isbackwhite ? theme.turquoise : "white")};
  }
`;
