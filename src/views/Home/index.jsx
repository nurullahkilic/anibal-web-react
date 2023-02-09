import { Container } from "./styles"

import HeroSection from "../../components/HeroSection";
import WorksSection from "../../components/WorksSection";
import TeamsSection from "../../components/TeamsSection";
import ServicesSection from "../../components/ServicesSection";
import ReferancesSection from "../../components/ReferancesSection";
import Footer from "../../components/Footer";


const Home = () => {
  return (
    <Container>
      <HeroSection/>
      <ServicesSection/>
      <WorksSection/>
      <ReferancesSection/>
      <TeamsSection/>
    </Container>
  );
};

export default Home;
