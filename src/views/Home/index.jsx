import { Container, HeroImage } from "./styles";

import HeroSection from "../../components/HeroSection";
import WorksSection from "../../components/WorksSection";
import TeamsSection from "../../components/TeamsSection";
import ServicesSection from "../../components/ServicesSection";
import ReferancesSection from "../../components/ReferancesSection";

import AnibalImage from "../../assets/anibal-hero.png";

import HomeScrollView from "../../components/HomeScrollView";

const Home = () => {
  return (
    <Container>
      <HeroSection>
        <HeroImage src={AnibalImage} />
      </HeroSection>
      <HomeScrollView
      />
      <ServicesSection />
      <WorksSection />
      <ReferancesSection />
      <TeamsSection />
    </Container>
  );
};

export default Home;
