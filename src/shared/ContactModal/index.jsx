import { useTheme } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";

import { Container, CloseButton } from "./styles";
import { CloseIcon } from "../../components/icons";
import ContactLayout from "../ContactLayout";

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

const ContactModal = ({ isOpen, toggle, children }) => {
  const theme = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <Container
          as={motion.div}
          variants={container}
          initial="hidden"
          animate={!isOpen ? "hidden" : "visible"}
          exit="hidden"
        >
          <CloseButton
            onClick={toggle}
            as={CloseIcon}
            fill={theme.lightTurquoise}
          />
          <div>
            <ContactLayout>{children}</ContactLayout>
          </div>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
