import { Container } from "./styles";

import HeroSection from "../../components/HeroSection";
import { Title } from "../../shared/BaseLayout/styles";

const WorkDescription = (
  <div>
    Profesyonel ekibimiz ve çözüm ortakları ile 360° hizmet sunarak
    müşterilerine sürdürülebilir ve hızlı hizmet vermek için çalışıyoruz.
  </div>
);


const Work = () => {
  return (
    <Container>
      <HeroSection heroText="İşlerimiz" description={WorkDescription}>
        <Title fontSize={"10rem"}>İŞ LER</Title>
      </HeroSection>
    </Container>
  );
};

export default Work;
