import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 760px) {
    padding: 4rem 0;
  }
`;

export const WorksWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const WorkItemsContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const Filter = styled.div`
  width: 100%;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;

  &::before {
    content: "";
    height: 1.5px;
    border-radius: 99px;
    flex: 1;
    background-color: red;
    opacity: 0.3;
    margin-right: 1rem;
    @media (max-width: 760px) {
      display: none;
    }
  }

  & > span {
    display: none;
    font-family: "SofiaPro";
    padding: 2px 4px;
    font-size: 2rem;
    font-weight: 900;
    line-height: 110%;
    color: ${({ theme }) => theme.red};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    & > svg {
      transition: 300ms transform;
      transform: translateY(2px) rotate(${({ isOpen }) => isOpen ? "180deg" : "0"});
      & > path {
      fill: ${({ theme }) => theme.red};
      
    }
    }
    @media (max-width: 760px) {
      display: flex;
    }
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    transition: 200ms all;
    height: 100%;

    &.hidden {
      visibility: hidden;
      opacity: 0;
      height: 0;
    }
    @media (max-width: 760px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  padding: 1rem 2rem;
  background-color: transparent;
  font-family: "SofiaPro";
  font-size: 1.3rem;
  font-weight: 900;
  line-height: 110%;
  color: ${({ theme }) => theme.red};
  padding: 0.625rem 1rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 100ms border;

  &.active {
    border: 2px solid ${({ theme }) => theme.red};
  }
  @media (max-width: 760px) {
    margin-top: 1rem;
  }
`;
