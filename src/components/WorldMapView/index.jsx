import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Ira from "./util/ira";

import useFullInView from "./util";

import { Container, Background, CitiesWrapper, City } from "./styles";
import { WorldMap } from "../icons";
import PaletImage from "../../assets/works-2.jpeg";

const WorldMapView = () => {
  const { ref, isFullInView } = useFullInView();
  const citiesRef = useRef();

  useEffect(() => {
    Array.from(citiesRef.current.children).forEach((boringElement) => {
      new Ira(boringElement, boringElement.dataset?.image, "corner");
    });
  }, []);

  return (
    <Container ref={ref}>
      <AnimatePresence>
        {isFullInView && (
          <Background
            as={motion.div}
            variants={animConfig}
            initial="hidden"
            animate={isFullInView ? "visible" : "hidden"}
            exit="hidden"
          >
            <WorldMap />
          </Background>
        )}
      </AnimatePresence>
      <CitiesWrapper ref={citiesRef}>
        {CitiesData &&
          CitiesData?.map(({ name, projectName, image }, key) => (
            <City key={key} projectName={projectName} data-image={image}>
              {name}
            </City>
          ))}
      </CitiesWrapper>
    </Container>
  );
};

export default WorldMapView;

const animConfig = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.12,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.12,
    },
  },
};

const CitiesData = [
  {
    name: "LONDON",
    projectName: "A Palet Center",
    image: PaletImage,
  },
  {
    name: "ROMA",
    projectName: "Paletto Merkezo",
    image: PaletImage,
  },
  {
    name: "MADRID",
    projectName: "Los Palettos Hermanos",
    image: PaletImage,
  },
  {
    name: "NEW YORK",
    projectName: "The Paleth",
    image: PaletImage,
  },
  {
    name: "GEBZE",
    projectName: "Palet Merkezi",
    image: PaletImage,
  },
  {
    name: "LONDON",
    projectName: "A Palet Center",
    image: PaletImage,
  },
  {
    name: "ROMA",
    projectName: "Paletto Merkezo",
    image: PaletImage,
  },
  {
    name: "MADRID",
    projectName: "Los Palettos Hermanos",
    image: PaletImage,
  },
  {
    name: "NEW YORK",
    projectName: "The Paleth",
    image: PaletImage,
  },
  {
    name: "GEBZE",
    projectName: "Palet Merkezi",
    image: PaletImage,
  },
  {
    name: "LONDON",
    projectName: "A Palet Center",
    image: PaletImage,
  },
  {
    name: "ROMA",
    projectName: "Paletto Merkezo",
    image: PaletImage,
  },
  {
    name: "MADRID",
    projectName: "Los Palettos Hermanos",
    image: PaletImage,
  },
  {
    name: "NEW YORK",
    projectName: "The Paleth",
    image: PaletImage,
  },
  {
    name: "GEBZE",
    projectName: "Palet Merkezi",
    image: PaletImage,
  },
  {
    name: "LONDON",
    projectName: "A Palet Center",
    image: PaletImage,
  },
  {
    name: "ROMA",
    projectName: "Paletto Merkezo",
    image: PaletImage,
  },
  {
    name: "MADRID",
    projectName: "Los Palettos Hermanos",
    image: PaletImage,
  },
  {
    name: "NEW YORK",
    projectName: "The Paleth",
    image: PaletImage,
  },
  {
    name: "GEBZE",
    projectName: "Palet Merkezi",
    image: PaletImage,
  },
];
