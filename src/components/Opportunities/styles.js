import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #242424;
  padding: 10rem 8.5rem;
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
  height: fit-content;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  & > h3 {
    margin: 0;
    font-size: 2.5rem;
    color: white;
    font-weight: 900;
  }
  & > span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme?.lightTurquoise};
    & > svg {
      margin-left: 4px;
      transition: 300ms transform;
      transform: translateY(0px)
        rotate(${({ isOpen }) => (isOpen ? "180deg" : "0")});
      & > path {
        fill: ${({ theme }) => theme?.lightTurquoise};
      }
    }
  }
`;
