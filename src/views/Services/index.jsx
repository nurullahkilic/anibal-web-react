import { useTranslation } from "react-i18next";
import { Container } from "./styles";

import HeroSection from "../../components/HeroSection";
import ServiceView from "../../components/ServiceView";
import { Services as ServicesData } from "./config";

import { useHeroImage } from "../../assets/hero";

const Services = () => {
  const { source } = useHeroImage({ name: "Services" });
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <Container>
      <HeroSection
        animatedImage={source}
        titleText={t("services.title")}
        heroText={t("services.heroText")}
      />
      {ServicesData[language] &&
        ServicesData[language]?.map((item, key) => {
          return (
            <ServiceView
              title={item?.title}
              image={item?.image}
              desc={item?.desc}
              key={key}
            />
          );
        })}
    </Container>
  );
};

export default Services;
