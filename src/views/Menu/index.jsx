import { useState } from "react";
import { Link } from "react-router-dom";
//Animation
import { motion } from "framer-motion";

import { Container, Button, LinksContent, LinkItem } from "./styles";
import HamburgerIcon from "./components/HamburgerIcon";
import { MenuItems } from "../../config/routes";

const container = {
  hidden: {
    opacity: 1,
    y: -999,
    transition: {
      duration:0.8,
      delay: 0.4,
      staggerChildren: 0.1,
      staggerDirection:-1
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration:0.7,
      delayChildren: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const itemValues = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};



const Menu = () => {
  const [isClose, setIsClose] = useState(true);

  return (
    <>

      <HamburgerIcon isClose={isClose} onClick={() => setIsClose(!isClose)}></HamburgerIcon>

      <Container
        as={motion.div}
        variants={container}
        initial="hidden"
        animate={isClose ? "hidden" : "visible"}
      >
        <LinksContent>
          {MenuItems &&
            MenuItems.map((item) => {
              return (
                <motion.div variants={itemValues}>
                  <LinkItem as={Link} to={item?.href} key={item?.id}>
                    {item?.title}
                  </LinkItem>
                </motion.div>
              );
            })}
        </LinksContent>
      </Container>
    </>
  );
};

export default Menu;
