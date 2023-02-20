import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "../../context/ModalContext";


const container = {
  hidden: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    y:0,
    transition: {
      duration: 0.5,
    },
  },
};

import {
  Container,
} from "./styles";

const StartProject = () => {
  const isStartProjectOpen = useModal((state) => state.isStartProjectOpen);
  const toggleStartProject = useModal((state) => state.toggleStartProject);

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
       <button onClick={toggleStartProject}>Kapat</button>
      </Container>
    )}
  </AnimatePresence>
  );
};

export default StartProject;
