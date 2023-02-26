import styled from "@emotion/styled";

import Title from "../../shared/Title";

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-right: 1px solid #dedede;
  @media (max-width: 760px) {
    border-right: none;
  }
`;

export const BgTitle = styled(Title)`
  width: 80%;
  font-weight: 900;
  font-size: 3rem;
  line-height: 125%;
  color: ${({ theme }) => theme?.lightTurquoise};
  margin-bottom: 3rem;
`;

export const SmTitle = styled.h6`
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 125%;
  color: ${({ theme }) => theme?.black};
  opacity: 0.8;
`;

export const MdTitle = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: 900;
  font-size: 1.8rem;
  line-height: 125%;
  color: ${({ theme }) => theme?.red};
  opacity: 0.8;

  &:hover {
    text-decoration: underline;
  }
`;
