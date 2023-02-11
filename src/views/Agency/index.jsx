import { Container, ImageContent } from "./styles";
import { Title } from "../../shared/BaseLayout/styles";

import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/AboutUs";
import TeamsSection from "../../components/TeamsSection";
import ReferancesSection from "../../components/ReferancesSection";

import AgencyImage from "../../assets/agency.jpeg"

const Agency = () => {
  return (
    <Container>
      <HeroSection>
        <Title fontSize={"10rem"}>KU RUM SAL</Title>
      </HeroSection>
      <AboutUs/>
      <ImageContent src={AgencyImage} alt="Agency Image"/>
      <TeamsSection/>
      <ReferancesSection/>
    </Container>
  );
};

export default Agency;
