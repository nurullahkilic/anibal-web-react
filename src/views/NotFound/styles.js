import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  h1 {
    margin: 0;
    font-size: 6rem;
    line-height: 100%;
    color: ${({ theme }) => theme.lightTurquoise};
  }

  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.lightTurquoise};
    margin-bottom: 2rem;
  }
`;
