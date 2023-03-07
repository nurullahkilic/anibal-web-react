import { useTranslation } from "react-i18next";

import { useRef, useEffect } from "react";
import { useInView, useAnimation, motion } from "framer-motion";
import { RefAnimation, ChildAnimation } from "./config";

import {
  Container,
  LogoItemsContent,
  LogoItem,
  LogoImage,
  BgTitle,
} from "./styles";

const ReferancesSection = ({ children, data, ...props }) => {
  const { t } = useTranslation();

  const ref = useRef();
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <Container {...props}>
      <BgTitle>{t("referancesSection.title")}</BgTitle>
      <LogoItemsContent
        ref={ref}
        as={motion.div}
        variants={RefAnimation}
        initial="hidden"
        animate={controls}
        exit="hidden"
      >
        {data?.map((item, key) => {
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
      {children}
    </Container>
  );
};

export default ReferancesSection;
