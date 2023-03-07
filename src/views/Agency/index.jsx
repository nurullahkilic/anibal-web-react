import { useTranslation } from "react-i18next";
import { Container, ImageContent } from "./styles";

import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/AboutUs";
import TeamsSection from "../../components/TeamsSection";
import WorldMapView from "../../components/WorldMapView";
import ReferancesSection from "../../components/ReferancesSection";

import { ReferancesData } from "../../components/ReferancesSection/config";

import KurumsalHero from "../../assets/hero/kurumsal.png";
import AgencyImage from "../../assets/agency.jpeg";

const Agency = () => {
  const { t } = useTranslation();
  
  return (
    <Container>
      <HeroSection animatedImage={KurumsalHero} titleText={t("agency.title")} />
      <AboutUs />
      <ImageContent src={AgencyImage} alt="Agency Image" />
      <TeamsSection />
      <WorldMapView />
      <ReferancesSection data={ReferancesData} id="referances" />
    </Container>
  );
};

export default Agency;
