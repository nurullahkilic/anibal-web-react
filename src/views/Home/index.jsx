import { Container, HeroImage } from "./styles";

import HeroFlowmap from "../../components/HeroFlowmap";
import HeroSection from "../../components/HeroSection";
import WorksSection from "../../components/WorksSection";
import TeamsSection from "../../components/TeamsSection";
import ServicesSection from "../../components/ServicesSection";
import ReferancesSection from "../../components/ReferancesSection";

import AnibalImage from "../../assets/anibal-hero.png";
import Wallpaper from "../../assets/wallpaper.png";

import HomeScrollView from "../../components/HomeScrollView";

const Home = () => {
  return (
    <Container>
      <HeroSection isAnimated={window.innerWidth > 760 ? true : false}>
        {window.innerWidth > 760 ? (
          <HeroFlowmap desktop={Wallpaper} />
        ) : (
          <HeroImage src={AnibalImage} />
        )}
      </HeroSection>
      <HomeScrollView />
      <ServicesSection />
      <WorksSection />
      <ReferancesSection />
      <TeamsSection />
    </Container>
  );
};

export default Home;
