import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import {
  Container,
  BannerImage,
  BannerTitle,
  InfoSection,
  SideTitle,
  Content,
  Details,
  DetailTitle,
  DetailItem,
  BriefText,
  ProjectScreenView,
  RelatedProjects,
} from "./styles";

import BannerImageSource from "../../assets/PaletMerkezi.webp";
import { WorksData } from "../../config/works";

import WorkCardItem from "../../shared/WorkCardItem";

const SingleWork = () => {
  const { t } = useTranslation();

  const { slug } = useParams();
  const work = WorksData.find((item) => item.slug == slug);

  return (
    <Container>
      <BannerImage src={BannerImageSource} />
      <BannerTitle>{work?.title}</BannerTitle>
      <InfoSection>
        <Content>
          <SideTitle displayNumber={"01"}>{t("singleWork.brief")}</SideTitle>
          <BriefText>
            <p>
              We love a challenge here at KOTA, so being tasked with creating a
              new website for one of the world’s design pioneers was an exciting
              prospect.
            </p>
            <p>
              With studios in London and Seoul, tangerine designs compelling
              customer experiences for globally renowned brands. Their
              experience spans more than 30 years with countless awards, dozens
              of patents and game-changing products and services that have
              exceeded people’s expectations every single time.
            </p>
            <p>
              The goal of the project was to create a thoughtful, intuitive,
              inspiring website which supports their new projects, brand values
              and messaging.
            </p>
            <p>
              Not only that, the site needed to be multilingual, optimised for
              strong search/localisation performance and built using a cutting
              edge framework all linked to a flexible content management system.
            </p>
          </BriefText>
        </Content>
        <Details>
          <div>
            <DetailTitle>{t("singleWork.detail.industry")}</DetailTitle>
            <DetailItem>Sanayi</DetailItem>
          </div>
          <div>
            <DetailTitle>{t("singleWork.detail.location")}</DetailTitle>
            <DetailItem>Gebze</DetailItem>
          </div>
          <div>
            <DetailTitle>{t("singleWork.detail.involvement")}</DetailTitle>
            <DetailItem>Web Tasarımı</DetailItem>
            <DetailItem>Web Yazılımı</DetailItem>
            <DetailItem>Kurumsal Kimlik</DetailItem>
            <DetailItem>Wordpress</DetailItem>
          </div>
          <div>
            <DetailTitle>{t("singleWork.detail.visit")}</DetailTitle>
            <DetailItem>
              <a href={work?.title} target={"_blank"}>
                martinbuilding.com
              </a>
            </DetailItem>
          </div>
        </Details>
      </InfoSection>
      <ProjectScreenView>
        <img src={work?.webScreen} alt="AtikHesapla" />
      </ProjectScreenView>
      <RelatedProjects>
        <SideTitle displayNumber={""} style={{ marginBottom: "0" }}>
          {t("singleWork.related")}
        </SideTitle>
        <div>
          {WorksData &&
            WorksData?.slice(0, 2).map((work, key) => (
              <WorkCardItem {...work} key={key} mode="light" />
            ))}
        </div>
      </RelatedProjects>
    </Container>
  );
};

export default SingleWork;
