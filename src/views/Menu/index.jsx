import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "../../context/ModalContext";

import {
  Container,
  LinksContent,
  LinkItem,
  BottomSide,
  BlankSection,
  StartProjectButton,
} from "./styles";

import { MenuItems, SocialMedias } from "../../config/routes";

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

const Menu = () => {
  const isMenuClose = useModal((state) => state.isMenuClose);
  const toggleMenu = useModal((state) => state.toggleMenu);
  const toggleStartProject = useModal((state) => state.toggleStartProject);

  return (
    <AnimatePresence>
      {!isMenuClose && (
        <Container
          as={motion.div}
          variants={container}
          initial="hidden"
          animate={isMenuClose ? "hidden" : "visible"}
          exit="hidden"
        >
          <LinksContent>
            {MenuItems &&
              MenuItems.map((item) => {
                return (
                  <motion.div variants={itemValues} key={item?.id}>
                    <LinkItem
                      as={Link}
                      to={item?.href}
                      onClick={toggleMenu}
                    >
                      {item?.title}
                    </LinkItem>
                  </motion.div>
                );
              })}
          </LinksContent>
          <BottomSide as={motion.div} variants={itemValues}>
            <BlankSection>
              {SocialMedias &&
                SocialMedias?.map((item, key) => {
                  return (
                    <a
                      href={item?.href}
                      title={item?.title}
                      target="_blank"
                      key={key}
                    >
                      <item.icon />
                    </a>
                  );
                })}
            </BlankSection>
            <StartProjectButton onClick={toggleStartProject}>
              PROJENİ BAŞLAT
            </StartProjectButton>
          </BottomSide>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default Menu;
