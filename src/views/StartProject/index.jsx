import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "../../context/ModalContext";

import {
  Container,
  CloseButton,
  Content,
  BgTitle,
  MdTitle,
  SmTitle,
} from "./styles";
import { CloseIcon } from "../../components/icons";
import ContactLayout from "../../shared/ContactLayout";
import { useTheme } from "@emotion/react";

const container = {
  hidden: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.32,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
    },
  },
};

const StartProject = () => {
  const isStartProjectOpen = useModal((state) => state.isStartProjectOpen);
  const toggleStartProject = useModal((state) => state.toggleStartProject);
  const theme = useTheme();

  return (
    <AnimatePresence>
      {isStartProjectOpen && (
        <Container
          as={motion.div}
          variants={container}
          initial="hidden"
          animate={!isStartProjectOpen ? "hidden" : "visible"}
          exit="hidden"
        >
          <CloseButton
            onClick={toggleStartProject}
            as={CloseIcon}
            fill={theme.lightTurquoise}
          />
          <div>
            <ContactLayout>
              <Content>
                <BgTitle>
                  Haydi! Projene başlamanda sana yardımcı olalım!
                </BgTitle>
                <SmTitle>Bizimle iletişime geç!</SmTitle>
                <MdTitle href="mailto:destek@anibalbilisim.com">
                  destek@anibalbilisim.com
                </MdTitle>
              </Content>
            </ContactLayout>
          </div>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default StartProject;
