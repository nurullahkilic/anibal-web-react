import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({color})=>color};
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  text-align: left;
  padding-top: 9.3rem;
  margin: 0 auto 4rem auto;
  @media (max-width: 720px) {
    flex-direction: column;
    padding: 9rem 2rem 0 2rem;
    align-items: center;
  }
`;

export const Title = styled.h1`
  width: 28rem;
  word-wrap: break-word;
  text-transform: uppercase;
  margin: 0;
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize ? fontSize : "12.5rem"};
  line-height: 116%;
  letter-spacing: 0.05em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.lightTurquoise};
  @media (max-width: 720px) {
    text-align: center;
  }
`;

export const SideText = styled.h3`
  margin: 0;
  width: 33rem;
  font-weight: 700;
  font-size: 5rem;
  line-height: 110%;
  letter-spacing: -0.0075em;
  color: #ffffff;
  transform: translateY(2rem);
  @media (max-width: 720px) {
    width: 95%;
    font-size: 4.6rem;
    text-align: center;
    transform: translateY(0);
  }
`;
