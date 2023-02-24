import { Container, ImageContent } from "./styles";

import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/AboutUs";
import TeamsSection from "../../components/TeamsSection";
import ReferancesSection from "../../components/ReferancesSection";

import KurumsalHero from "../../assets/hero/kurumsal.png";
import AgencyImage from "../../assets/agency.jpeg";

const Agency = () => {
  return (
    <Container>
      <HeroSection
        animatedImage={KurumsalHero}
        titleText={"KU RUM SAL"}
      />
      <AboutUs />
      <ImageContent src={AgencyImage} alt="Agency Image" />
      <TeamsSection />
      <ReferancesSection />
    </Container>
  );
};

export default Agency;
