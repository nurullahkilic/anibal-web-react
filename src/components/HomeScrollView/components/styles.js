import styled from "@emotion/styled";

import Title from "../../../shared/Title";

export const Container = styled.div`
  width: 100%;
  max-width: 80vw;
  height: 70vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;
  @media (max-width: 1500px) {
    gap: 0;
    height: fit-content;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: flex-start;
    padding: 6rem 0;
  }
  @media (max-width: 720px) {
    padding: 0;
    height: fit-content;
  }
`;

export const TitleSection = styled(Title)`
  position: relative;
  font-size: 3.5rem;
  text-align: left;
  &::before {
    position: absolute;
    content: "${({ titleId }) => (titleId ? titleId : "01")}";
    font-size: 1rem;
    font-weight: 500;
    line-height: 110%;
    color: ${({ theme }) => theme.lightTurquoise};
    text-align: left;
    top: 14px;
    left: -35px;
  }
  @media (max-width: 1500px) {
    font-size: 3rem;
  }
  @media (max-width: 1000px) {
    font-size: 2rem;
  }
  @media (max-width: 720px) {
    width: 100%;
    font-size: 1.8rem;
    &::before {
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 110%;
      text-align: left;
      top: 2px;
      left: -25px;
    }
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
  @media (max-width: 1500px) {
    max-width: 50%;
    padding: 2rem;
  }
  @media (max-width: 720px) {
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
  text-align: left;
  @media (max-width: 720px) {
  }
`;

export const ImageSide = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  width: 36rem;
  height: 32rem;
  visibility: hidden;
  @media (max-width: 1500px) {
    visibility: visible;
    border-radius: 1rem;
    width: 60vw;
    height: 28rem;
  }
  @media (max-width: 720px) {
    width: 80vw;
    height: 20rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
