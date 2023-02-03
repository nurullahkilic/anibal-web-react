import { Container } from "./styles"

import HeroSection from "../../components/HeroSection";
import ServicesSection from "../../components/ServicesSection";
import ReferancesSection from "../../components/ReferancesSection";

const Home = () => {
  return (
    <Container>
      <HeroSection/>
      <ServicesSection/>
      <ReferancesSection/>
    </Container>
  );
};

export default Home;
