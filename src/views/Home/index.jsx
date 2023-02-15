import { Container, HeroImage } from "./styles"

import HeroSection from "../../components/HeroSection";
import WorksSection from "../../components/WorksSection";
import TeamsSection from "../../components/TeamsSection";
import ServicesSection from "../../components/ServicesSection";
import ReferancesSection from "../../components/ReferancesSection";

import AnibalImage from "../../assets/abibal-hero.png"



const Home = () => {
  return (
    <Container>
      <HeroSection>
        <HeroImage src={AnibalImage} />
      </HeroSection>
      <ServicesSection/>
      <WorksSection/>
      <ReferancesSection/>
      <TeamsSection/>
    </Container>
  );
};

export default Home;
