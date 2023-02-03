import { useAnimationControls, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Services, ImagesAnimationConfig } from "./config"

import {
  Container,
  SelectionContent,
  Title,
  TabContent,
  TabItem,
  SeeAllButton,
  ImagesContent,
  SelectionImage,
  SelectionText,
} from "./styles";

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
        <SeeAllButton as={Link} to={"/"}>
          TÜM HİZMETLERİ GÖRÜNTÜLE
        </SeeAllButton>
      </SelectionContent>
      <ImagesContent>
        <SelectionImage
          src={Services[selectedId]?.image}
          as={motion.img}
          variants={ImagesAnimationConfig}
          initial="visible"
          animate={controls}
        />
        <SelectionText>{Services[selectedId]?.desc}</SelectionText>
      </ImagesContent>
    </Container>
  );
};

export default ServicesSection;
