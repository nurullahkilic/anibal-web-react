import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  background-color: #242424;
  display: flex;
  flex-direction: row;
  padding: 5.5rem 7rem;

  @media (max-width: 720px) {
    flex-direction: column;
    height: fit-content;
    padding: 2rem 3rem 4rem 3rem;
  }
`;

export const LinksContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-decoration: none;
  gap: 20px;

  & > a {
    text-decoration: none;
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: 0.02em;
    color: #ffffff;
    text-transform: uppercase;
    transition: 200ms color;

    :hover {
      color: ${({ theme }) => theme.lightTurquoise};
    }
  }
  @media (max-width: 720px) {
    display: none;
  }
`;

export const FooterItem = styled.div`
  margin: 10px;
  flex: 1 0 21%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;

  & > p {
    margin: 0;
    width: 80%;
    font-weight: 500;
    font-size: 1rem;
    line-height: 160%;
    letter-spacing: 0.02em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: #fff;
    span {
      font-weight: 700;
    }
    @media (max-width: 720px) {
      width: 100%;
    }
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.02em;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.lightTurquoise};
`;

export const BlankSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;
