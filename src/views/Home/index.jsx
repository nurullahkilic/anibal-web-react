import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

import { Container, HeroImage } from "./styles";

import HeroSection from "../../components/HeroSection";
import WorksSection from "../../components/WorksSection";
import TeamsSection from "../../components/TeamsSection";
import ServicesSection from "../../components/ServicesSection";
import ReferancesSection from "../../components/ReferancesSection";
import { HomePageReferancesData } from "../../components/ReferancesSection/config";

import AnibalImage from "../../assets/anibal-hero.png";
import { useHeroImage } from "../../assets/hero";

import HomeScrollView from "../../components/HomeScrollView";
import Button from "../../shared/Button";

const Home = () => {
  const { source } = useHeroImage({ name: "Home" });
  const { t } = useTranslation();
  return (
    <Container>
      <HeroSection
        animatedImage={source}
        heroImage={<HeroImage src={AnibalImage} />}
      />
      <HomeScrollView />
      <ServicesSection />
      <WorksSection />
      <ReferancesSection data={HomePageReferancesData}>
        <Button
          isBackWhite={true}
          as={HashLink}
          to={"/agency#referances"}
          scroll={(el) => el.scrollIntoView({ behavior: "auto" })}
        >
          {t("seeAll")}
        </Button>
      </ReferancesSection>
      <TeamsSection />
    </Container>
  );
};

export default Home;
