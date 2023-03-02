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
        heroText="Mükemmel takımımızın bir parçası olmaya hazır mısın?"
        description="Anibal ekibi kreatif ve başarılı yeteneklerden oluşur."
      />
      <Opportunities />
      <GetInTouch />
    </Container>
  );
};

export default Careers;
