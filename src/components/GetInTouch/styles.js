import styled from "@emotion/styled";
import Button from "../../shared/Button";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: radial-gradient(
    100% 392.69% at 0% 100%,
    #1d3141 0%,
    #008287 28.67%,
    #52b69c 68.5%
  );
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 10rem;

  @media (max-width: 1100px) {
    height: fit-content;
    padding: 8rem 3rem;
  }
  @media (max-width: 760px) {
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 6rem;
  }
`;

export const Background = styled.img`
  position: absolute;
  object-fit: cover;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Content = styled.div`
  z-index: 3;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  & > div {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 5.5rem 0 2rem;
  }
  & > div > ul {
    padding-right: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    & li {
      font-size: 2rem;
      line-height: 140%;
      font-weight: 900;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  @media (max-width: 760px) {
    flex-direction: column;
    padding: 6rem 0;
    gap: 6rem;
  }
`;

export const ButtonStyle = styled(Button)`
  margin-top: 3rem;
  padding: 1rem 3rem;

  &:hover {
    border: 1px solid white;
    color: #e55be0;
  }
  @media (max-width: 760px) {
    font-size: 1.1rem;
  }
`;

export const Text = styled.p`
  margin: 0;
  color: white;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 120%;
`;
