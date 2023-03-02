import { Container, HeroImage } from "./styles";

import HeroFlowmap from "../../shared/HeroFlowmap";
import HeroSection from "../../components/HeroSection";
import WorksSection from "../../components/WorksSection";
import TeamsSection from "../../components/TeamsSection";
import ServicesSection from "../../components/ServicesSection";
import ReferancesSection from "../../components/ReferancesSection";
import { HomePageReferancesData } from "../../components/ReferancesSection/config";

import AnibalImage from "../../assets/anibal-hero.png";
import Wallpaper from "../../assets/hero/home.png";

import HomeScrollView from "../../components/HomeScrollView";
import Button from "../../shared/Button";
import { HashLink } from "react-router-hash-link";

import { WorldMap } from "../../components/icons";

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
      <ReferancesSection data={HomePageReferancesData}>
        <Button
          isBackWhite={true}
          as={HashLink}
          to={"/agency#referances"}
          scroll={(el) => el.scrollIntoView({ behavior: "auto" })}
        >
          HEPSİNİ GÖR
        </Button>
      </ReferancesSection>
      <TeamsSection />
    </Container>
  );
};

export default Home;
