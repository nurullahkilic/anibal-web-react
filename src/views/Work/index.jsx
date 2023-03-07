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
import { useTranslation } from "react-i18next";

const WorkDescription = (
  <div>
    Profesyonel ekibimiz ve çözüm ortakları ile 360° hizmet sunarak
    müşterilerine sürdürülebilir ve hızlı hizmet vermek için çalışıyoruz.
  </div>
);

const Work = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(window.innerWidth > 760 ? true : false);

  return (
    <Container>
      <HeroSection
        heroText={t("work.heroText")}
        description={t("work.desc")}
        animatedImage={WorksHero}
        titleText={t("work.title")}
      />
      <WorksWrapper>
        <Filter isOpen={isOpen}>
          <span onClick={() => setIsOpen(!isOpen)}>
            {t("work.filter.title")} <BottomArrow fill="black" />
          </span>
          <div className={!isOpen ? "hidden" : null}>
            <Button
              onClick={() => setSelected(0)}
              className={selected == 0 ? "active" : null}
            >
              {t("work.filter.all")}
            </Button>
            <Button
              onClick={() => setSelected(1)}
              className={selected == 1 ? "active" : null}
            >
              {t("work.filter.webDesign")}
            </Button>
            <Button
              onClick={() => setSelected(2)}
              className={selected == 2 ? "active" : null}
            >
              {t("work.filter.webDevelopment")}
            </Button>
            <Button
              onClick={() => setSelected(3)}
              className={selected == 3 ? "active" : null}
            >
              {t("work.filter.corporate")}
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
