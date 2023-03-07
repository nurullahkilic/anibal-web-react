import { Container } from "./styles";

import HeroSection from "../../components/HeroSection";
import Opportunities from "../../components/Opportunities";
import GetInTouch from "../../components/GetInTouch";

import KariyerHero from "../../assets/hero/kariyer.png";
import { useTranslation } from "react-i18next";

const Careers = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <HeroSection
        animatedImage={KariyerHero}
        titleText={t("careers.title")}
        heroText={t("careers.heroText")}
        description={t("careers.desc")}
      />
      <Opportunities />
      <GetInTouch />
    </Container>
  );
};

export default Careers;
