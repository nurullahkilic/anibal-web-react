import styled from "@emotion/styled";

export const ItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;

  & > h3 {
    margin: 0;
    font-size: 2.5rem;
    color: white;
    font-weight: 900;
    @media (max-width: 720px) {
      font-size: 1.9rem;
    }
  }
  & > span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme?.lightTurquoise};
    &::before {
      font-size: 0.8rem;
      content: "${({ isOpen, less, more }) => (isOpen ? less : more)}";
      letter-spacing: 0.02em;
      margin-right: 5px;
    }
    @media (max-width: 720px) {
      font-size: 0.9rem;
    }
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
  @media (max-width: 720px) {
    padding: 35px 0;
  }
`;
