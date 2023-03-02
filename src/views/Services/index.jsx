import { Container } from "./styles";

import HeroSection from "../../components/HeroSection";
import ServiceView from "../../components/ServiceView";
import { Services as ServicesData } from "./config";

import ServicesHero from "../../assets/hero/hizmetler.png";

const Services = () => {
  return (
    <Container>
      <HeroSection
        animatedImage={ServicesHero}
        titleText={"HİZ MET LER"}
        heroText="Çalışma Alanlarımız"
      />
      {ServicesData &&
        ServicesData.map((item, key) => {
          return (
            <ServiceView
              title={item?.title}
              image={item?.image}
              desc={item?.desc}
              key={key}
            />
          );
        })}
    </Container>
  );
};

export default Services;
