import { Container, HeroImage } from "./styles";

import HeroFlowmap from "../../shared/HeroFlowmap";
import HeroSection from "../../components/HeroSection";
import WorksSection from "../../components/WorksSection";
import TeamsSection from "../../components/TeamsSection";
import ServicesSection from "../../components/ServicesSection";
import ReferancesSection from "../../components/ReferancesSection";

import AnibalImage from "../../assets/anibal-hero.png";
import Wallpaper from "../../assets/hero/home.png";

import HomeScrollView from "../../components/HomeScrollView";

const Home = () => {
  return (
    <Container>
      <HeroSection
        animatedImage={Wallpaper}
        heroImage={<HeroImage src={AnibalImage} />}
      />
      <HomeScrollView />
      <ServicesSection />
      <WorksSection />
      <ReferancesSection />
      <TeamsSection />
    </Container>
  );
};

export default Home;
