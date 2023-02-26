import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #242424;
  padding: 10rem 6.25rem;
  @media (max-width: 1100px) {
    height: fit-content;
    padding: 8rem 3rem;
  }
`;

export const Header = styled.h1`
  margin: 0;
  font-size: 3.6rem;
  line-height: 100%;
  color: ${({ theme }) => theme?.lightTurquoise};
  font-weight: 900;
  margin-bottom: 10rem;
  max-width: 15ch;
`;

export const AccordionContent = styled.div`
  width: 100%;
  height: 100%;
`;
