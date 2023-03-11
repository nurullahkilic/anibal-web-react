import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
import { containerAnim, itemAnim } from "./config";

const Menu = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const isMenuClose = useModal((state) => state.isMenuClose);
  const toggleMenu = useModal((state) => state.toggleMenu);
  const toggleStartProject = useModal((state) => state.toggleStartProject);

  return (
    <AnimatePresence>
      {!isMenuClose && (
        <Container
          as={motion.div}
          variants={containerAnim}
          initial="hidden"
          animate={isMenuClose ? "hidden" : "visible"}
          exit="hidden"
        >
          <LinksContent>
            {MenuItems[language] &&
              MenuItems[language]?.map((item) => {
                return (
                  <motion.div variants={itemAnim} key={item?.id}>
                    <LinkItem as={Link} to={item?.href} onClick={toggleMenu}>
                      {item?.title}
                    </LinkItem>
                  </motion.div>
                );
              })}
          </LinksContent>
          <BottomSide as={motion.div} variants={itemAnim}>
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
              {t("startProject")}
            </StartProjectButton>
          </BottomSide>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default Menu;
