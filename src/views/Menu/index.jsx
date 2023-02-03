import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
  Container,
  LinksContent,
  LinkItem,
  BottomSide,
  BlankSection,
  StartProjectButton,
} from "./styles";
import { Linkedin, Instagram } from "../../components/icons";
import { MenuItems } from "../../config/routes";

const container = {
  hidden: {
    opacity: 1,
    height: 0,
    transition: {
      duration: 0.7,
      delay: 0.4,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    height: "100%",
    transition: {
      duration: 0.3,
      delayChildren: 0.34,
      staggerChildren: 0.13,
    },
  },
};

const itemValues = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Menu = ({ isClose }) => {
  return (
    <AnimatePresence>
      {!isClose && (
        <Container
          as={motion.div}
          variants={container}
          initial="hidden"
          animate={isClose ? "hidden" : "visible"}
          exit="hidden"
        >
          <LinksContent>
            {MenuItems &&
              MenuItems.map((item) => {
                return (
                  <motion.div variants={itemValues} key={item?.id}>
                    <LinkItem as={Link} to={item?.href}>
                      {item?.title}
                    </LinkItem>
                  </motion.div>
                );
              })}
          </LinksContent>
          <BottomSide as={motion.div} variants={itemValues}>
            <BlankSection>
              <a href="https://www.linkedin.com/company/anibalbilisim/" target="_blank">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com/anibalbilisim/" target="_blank">
                <Instagram />
              </a>
            </BlankSection>
            <StartProjectButton as={Link} to="/">PROJENİ BAŞLAT</StartProjectButton>
          </BottomSide>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default Menu;
