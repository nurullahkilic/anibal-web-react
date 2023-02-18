import styled from "@emotion/styled";

const Input = ({ children, ...props }) => {
  return <InputWrapper placeholder={children} {...props} />;
};

export default Input;

const InputWrapper = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-family: "SofiaPro", sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  letter-spacing: -0.0075em;
  color: black;
  width: 100%;
  padding: 0.6rem;
  border-bottom: 1px solid #6e6e6e;
  &::placeholder {
    font-family: "SofiaPro", sans-serif;
    font-weight: 400;
    font-size: 1.1rem;
    letter-spacing: 0.06em;
    color: #6e6e6e;
  }
`;
