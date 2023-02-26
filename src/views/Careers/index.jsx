import { Container } from "./styles";

import HeroSection from "../../components/HeroSection";
import Opportunities from "../../components/Opportunities";
import GetInTouch from "../../components/GetInTouch";

import KariyerHero from "../../assets/hero/kariyer.png";

const Careers = () => {
  return (
    <Container>
      <HeroSection
        animatedImage={KariyerHero}
        titleText={"KA TIL"}
        heroText="Mükemmel takımımızın bir parçası ol ve istediğin yerde çalış!"
      />
      <Opportunities />
      <GetInTouch />
    </Container>
  );
};

export default Careers;
