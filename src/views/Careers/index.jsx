import { useTranslation } from "react-i18next";

import { Container } from "./styles";

import HeroSection from "../../components/HeroSection";
import Opportunities from "../../components/Opportunities";
import GetInTouch from "../../components/GetInTouch";

import { useHeroImage } from "../../assets/hero";

const Careers = () => {
  const { source } = useHeroImage({ name: "Careers" });
  const { t } = useTranslation();

  return (
    <Container>
      <HeroSection
        animatedImage={source}
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
