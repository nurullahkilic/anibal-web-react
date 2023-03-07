import { AnimatePresence, useAnimationControls, motion } from "framer-motion";
import { useState } from "react";

import { Services } from "./config";

import {
  Container,
  SelectionContent,
  Title,
  TabContent,
  TabItem,
  ImagesContent,
  SelectionImage,
  SelectionText,
} from "./styles";

import Button from "../../shared/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const [selectedId, setSelectedId] = useState(0);
  const controls = useAnimationControls();

  const animation = async (itemId) => {
    await controls.start("hidden");
    setSelectedId(itemId);
    setTimeout(() => {
      controls.start("visible");
    }, 200);
  };

  return (
    <Container>
      <SelectionContent>
        <Title>{t("servicesSection.title")}</Title>
        <TabContent>
          {Services[language] &&
            Services[language]?.map((item, key) => {
              return (
                <TabItem
                  isSelected={key == selectedId}
                  as={motion.div}
                  key={key}
                  onClick={() => animation(key)}
                >
                  {item?.title}
                </TabItem>
              );
            })}
        </TabContent>
        <Button to={"/services"} as={Link}>
          {t("servicesSection.button")}
        </Button>
      </SelectionContent>
      <ImagesContent>
        <AnimatePresence mode="wait">
          <SelectionImage
            src={Services[language][selectedId]?.image}
            as={motion.img}
            key={Services[language][selectedId]?.title}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.22 }}
          />
        </AnimatePresence>
        <SelectionText>{Services[language][selectedId]?.desc}</SelectionText>
      </ImagesContent>
    </Container>
  );
};

export default ServicesSection;
