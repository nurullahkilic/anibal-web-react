import { Container } from "./styles";

import HeroSection from "../../components/HeroSection";
import { Title } from "../../shared/BaseLayout/styles";
import ServiceView from "../../components/ServiceView";
import { Services as ServicesData } from "../../components/ServicesSection/config";

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
        heroText="Çalışma Alanlarımız"
        description={ServicesDescription}
      >
        <Title fontSize={"10rem"}>HİZ MET LER</Title>
      </HeroSection>
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
