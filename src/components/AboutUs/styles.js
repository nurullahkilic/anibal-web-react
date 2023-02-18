import styled from "@emotion/styled";
import Title from "../../shared/Title";


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 175px;
  gap: 0.8rem;

  @media (max-width: 760px) {
    padding: 6rem 3rem;
  }
`;

export const TextContent = styled.div`
  width: 72%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  color: ${({ theme }) => theme.black};
  margin-bottom: 0.5rem;
`;

export const BgTitle = styled(Title)`
  @media (max-width: 760px) {
    font-size: 3.5rem;
  }
`;

export const SideText = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: #373737;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  p {
    margin: 0.5rem 0;
  }
`;
