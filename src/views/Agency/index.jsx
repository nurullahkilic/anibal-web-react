import { Container, ImageContent } from "./styles";

import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/AboutUs";
import TeamsSection from "../../components/TeamsSection";
import ReferancesSection from "../../components/ReferancesSection";
import { ReferancesData } from "../../components/ReferancesSection/config";

import KurumsalHero from "../../assets/hero/kurumsal.png";
import AgencyImage from "../../assets/agency.jpeg";

const Agency = () => {
  return (
    <Container>
      <HeroSection animatedImage={KurumsalHero} titleText={"KU RUM SAL"} />
      <AboutUs />
      <ImageContent src={AgencyImage} alt="Agency Image" />
      <TeamsSection />
      <ReferancesSection data={ReferancesData} id="referances" />
    </Container>
  );
};

export default Agency;
