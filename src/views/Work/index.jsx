import { Container, WorkItemsContent, WorksWrapper, Filter } from "./styles";

import HeroSection from "../../components/HeroSection";
import { Title } from "../../shared/BaseLayout/styles";

import WorkCardItem from "../../shared/WorkCardItem";
import { WorksData } from "../../components/WorksSection/config";

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
      <WorksWrapper>
        <Filter></Filter>
        <WorkItemsContent>
          {WorksData &&
            WorksData?.map((work, key) => (
              <WorkCardItem {...work} key={key} mode="light" />
            ))}
        </WorkItemsContent>
      </WorksWrapper>
    </Container>
  );
};

export default Work;
