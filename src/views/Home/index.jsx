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
      <WorksSection/>
      <ServicesSection/>
      <ReferancesSection/>
      <TeamsSection/>
      <Footer/>
    </Container>
  );
};

export default Home;
