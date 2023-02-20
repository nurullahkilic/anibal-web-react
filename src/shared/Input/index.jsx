import styled from "@emotion/styled";

const Input = ({ children, ...props }) => {
  return <InputWrapper placeholder={children} {...props} />;
};

const TextArea = ({ children, ...props }) => {
  return <TextWrapper placeholder={children} {...props} />;
};

export { Input, TextArea };

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
    color: #878787;
  }
`;

const TextWrapper = styled.textarea`
  background-color: transparent;
  outline: none;
  font-family: "SofiaPro", sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  letter-spacing: -0.0075em;
  color: black;
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #6e6e6e;
  resize: vertical;
  min-height: 150px;
  &::placeholder {
    font-family: "SofiaPro", sans-serif;
    font-weight: 400;
    font-size: 1.1rem;
    letter-spacing: 0.06em;
    color: #878787;
  }
`;
