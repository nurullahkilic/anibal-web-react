import styled from "@emotion/styled";

const Title = ({ children, ...props }) => {
  return <TitleWrapper {...props}>{children}</TitleWrapper>;
};

export default Title;

const TitleWrapper = styled.h1`
  margin: 0;
  font-weight: 700;
  line-height: 110%;
  font-size: 4.5rem;
  letter-spacing: -0.0075em;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.black};
`;
