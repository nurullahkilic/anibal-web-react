import { useRef, useEffect } from "react";
import { useInView, useAnimation, motion } from "framer-motion";
import { ReferancesData, RefAnimation, ChildAnimation } from "./config";

import {
  Container,
  Title,
  LogoItemsContent,
  LogoItem,
  LogoImage,
} from "./styles";

const ReferancesSection = () => {
  const ref = useRef();
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <Container>
      <Title>Referanslarımız</Title>
      <LogoItemsContent
        ref={ref}
        as={motion.div}
        variants={RefAnimation}
        initial="hidden"
        animate={controls}
        exit="hidden"
      >
        {ReferancesData.map((item, key) => {
          return (
            <LogoItem
              href={item?.href}
              target="_blank"
              variants={ChildAnimation}
              as={motion.a}
              key={key}
            >
              <LogoImage src={item?.image} />
            </LogoItem>
          );
        })}
      </LogoItemsContent>
    </Container>
  );
};

export default ReferancesSection;
