import { useState } from "react";

import {
  Container,
  WorkItemsContent,
  WorksWrapper,
  Filter,
  Button,
} from "./styles";

import HeroSection from "../../components/HeroSection";
import { BottomArrow } from "../../components/icons";

import WorkCardItem from "../../shared/WorkCardItem";
import { WorksData } from "../../config/works";

import WorksHero from "../../assets/hero/isler.png";

const WorkDescription = (
  <div>
    Profesyonel ekibimiz ve çözüm ortakları ile 360° hizmet sunarak
    müşterilerine sürdürülebilir ve hızlı hizmet vermek için çalışıyoruz.
  </div>
);

const Work = () => {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(window.innerWidth > 760 ? true : false);

  return (
    <Container>
      <HeroSection
        heroText="Dijital dünyadaki yolculuğunuzda yanınızdayız."
        description={WorkDescription}
        animatedImage={WorksHero}
        titleText={"İŞ LER"}
      />
      <WorksWrapper>
        <Filter isOpen={isOpen}>
          <span onClick={() => setIsOpen(!isOpen)}>
            Filtrele <BottomArrow fill="black" />
          </span>
          <div className={!isOpen ? "hidden" : null}>
            <Button
              onClick={() => setSelected(0)}
              className={selected == 0 ? "active" : null}
            >
              Hepsi
            </Button>
            <Button
              onClick={() => setSelected(1)}
              className={selected == 1 ? "active" : null}
            >
              Web Tasarımı
            </Button>
            <Button
              onClick={() => setSelected(2)}
              className={selected == 2 ? "active" : null}
            >
              Web Yazılımı
            </Button>
            <Button
              onClick={() => setSelected(3)}
              className={selected == 3 ? "active" : null}
            >
              Kurumsal Kimlik
            </Button>
          </div>
        </Filter>
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
