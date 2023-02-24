import { Container } from "./styles";

import HeroSection from "../../components/HeroSection";
import { Title } from "../../shared/BaseLayout/styles";
import ServiceView from "../../components/ServiceView";
import { Services as ServicesData } from "../../components/ServicesSection/config";

import ServicesHero from "../../assets/hero/hizmetler.png"

const ServicesDescription = (
  <div>
    Profesyonel ekibimiz ve çözüm ortakları ile 360° hizmet sunarak
    müşterilerine sürdürülebilir ve hızlı hizmet vermek için çalışıyoruz.
  </div>
);

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
