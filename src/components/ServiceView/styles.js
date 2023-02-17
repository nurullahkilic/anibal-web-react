import styled from "@emotion/styled";

import Title from "../../shared/Title";

export const Container = styled.div`
  width: 100%;
  max-width: 83vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8rem 0;
  gap: 6rem;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 2rem;
    text-align: center;
  }
  @media (max-width: 720px) {
    flex-direction: column-reverse;
    padding: 8rem 0;
  }
`;

export const TitleSection = styled(Title)`
  @media (max-width: 1500px) {
    text-align: center;
    font-size: 3.5rem;
  }
`;

export const TextSide = styled.div`
  height: 100%;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  @media (max-width: 1000px) {
    max-width: 70%;
    align-items: center;
    padding: 8rem 5rem;
  }
  @media (max-width: 720px) {
    padding: 2rem 3rem;
    max-width: 100%;
    height: fit-content;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const Desc = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.0075em;
  color: #373737;
  padding-right: 2rem;
  @media (max-width: 1000px) {
    padding-right: 0;
    text-align: center;
  }
`;

export const ImageSide = styled.div`
  height: 38rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    padding: 0 5rem;
  }
  @media (max-width: 720px) {
    padding: 0 2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
