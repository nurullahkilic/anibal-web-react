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

const ServicesSection = () => {
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
        <Title>SERVİSLERİMİZ</Title>
        <TabContent>
          {Services &&
            Services.map((item, key) => {
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
        <Button to={"/services"}>TÜM HİZMETLERİ GÖRÜNTÜLE</Button>
      </SelectionContent>
      <ImagesContent>
        <AnimatePresence mode="wait">
          <SelectionImage
            src={Services[selectedId]?.image}
            as={motion.img}
            key={Services[selectedId]?.title}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.22 }}
          />
        </AnimatePresence>
        <SelectionText>{Services[selectedId]?.desc}</SelectionText>
      </ImagesContent>
    </Container>
  );
};

export default ServicesSection;
