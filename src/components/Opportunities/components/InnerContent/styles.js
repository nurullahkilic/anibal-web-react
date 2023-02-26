import styled from "@emotion/styled";
import Button from "../../../../shared/Button";

export const Content = styled.div`
  width: 100%;
  height: fit-content;
  padding: 2rem 0;
  color: white;
  & > p {
    font-size: 1rem;
    line-height: 1.8;
    @media (max-width: 760px) {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 760px) {
    font-size: 1.4rem;
  }
`;

export const Clauses = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  & > h5 {
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
    @media (max-width: 760px) {
      font-size: 1.4rem;
    }
  }
  & > ul {
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  & > ul li {
    position: relative;
    line-height: 1.8;
    padding-left: 2rem;
    margin-bottom: 0.8rem;

    &::before {
      position: absolute;
      content: "";
      top: 8px;
      left: 0;

      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme?.lightTurquoise};
      @media (max-width: 760px) {
        width: 8px;
        height: 8px;
      }
    }
  }
`;

export const ApplyButton = styled(Button)`
  max-width: 15rem;
`;