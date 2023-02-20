import styled from "@emotion/styled";
import Title from "../../shared/Title";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 8rem 0;
  @media (max-width: 760px) {
    padding: 10rem 0;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 70vh;
  background-color: white;
  object-fit: contain;
  @media (max-width: 760px) {
    height: fit-content;
    padding: 0 1rem;
  }
`;

export const BannerTitle = styled.h1`
  margin: 0;
  width: 80%;
  color: ${({ theme }) => theme.black};
  font-weight: 900;
  font-size: 6.5rem;
  line-height: 1;
  letter-spacing: -0.075rem;
  text-align: center;
  margin-bottom: 8rem;
  @media (max-width: 760px) {
    font-size: 4rem;
    margin-bottom: 4rem;
  }
`;

export const InfoSection = styled.div`
  height: fit-content;
  width: 72%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 6rem;
  @media (max-width: 760px) {
    width: 85%;
    flex-direction: column-reverse;
  }
`;

export const Content = styled.div`
  flex: 3;
  height: 100%;
`;

export const BriefText = styled.div`
  width: 80%;
  color: ${({ theme }) => theme.black};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75;
  white-space: pre-line;
  @media (max-width: 760px) {
  font-size: 1.25rem;
  }
`;

export const Details = styled.div`
  flex: 1;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  & > div {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    gap: 0.5rem;
    @media (max-width: 760px) {
      width: calc(50% - 1rem);
    }
  }
  @media (max-width: 760px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: 4rem;
  }
`;

export const DetailTitle = styled.h6`
  margin: 0;
  color: ${({ theme }) => theme.lightTurquoise};
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.22rem;
  text-transform: uppercase;
  @media (max-width: 760px) {
    font-size: 1rem;
  }
`;

export const DetailItem = styled.h6`
  margin: 0;
  color: ${({ theme }) => theme.black};
  font-weight: 700;
  font-size: 1.05rem;
  line-height: 150%;
  letter-spacing: -0.045rem;
  & > a {
    color: inherit;
  }
  @media (max-width: 760px) {
    font-size: 1.4rem;
  }
`;

export const SideTitle = styled(Title)`
  font-size: 3.125rem;
  font-weight: 900;
  letter-spacing: -0.075rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  &::before {
    content: "${({ displayNumber }) => (displayNumber ? displayNumber : "01")}";
    color: ${({ theme }) => theme.lightTurquoise};
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 100%;
    margin-bottom: 0.5rem;
    letter-spacing: 0.22rem;
    text-transform: uppercase;
  }
`;

export const ProjectScreenView = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: fit-content;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 30px;
  width: 80%;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  @media (max-width: 760px) {
    width: 85%;
  }
`;
