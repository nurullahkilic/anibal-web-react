import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Content,
  LogoLink,
  Logo,
  NavbarLeft,
  ItemsContent,
  NavbarRight,
  NavbarLink,
} from "./styles";

import AnibalLogo from "../../assets/anibal-logo.png";

import HamburgerIcon from "../HamburgerIcon";
import Menu from "../../views/Menu";

import { NavbarItems } from "../../config/routes";

const linksAnimation = {
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.4,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.72,
    },
  },
};

const Navbar = () => {
  const [isMenuClose, setIsMenuClose] = useState(true);

  return (
    <>
      <Content>
        <NavbarLeft>
          <LogoLink to={"/"} as={Link} onClick={() => setIsMenuClose(true)}>
            <Logo src={AnibalLogo} />
          </LogoLink>
        </NavbarLeft>
        <NavbarRight>
          <ItemsContent
            as={motion.div}
            variants={linksAnimation}
            initial="visible"
            animate={!isMenuClose ? "hidden" : "visible"}
          >
            {NavbarItems &&
              NavbarItems.map((item) => {
                return (
                  <NavbarLink as={Link} to={item?.href} key={item?.id}>
                    {item?.title}
                  </NavbarLink>
                );
              })}
          </ItemsContent>
          <HamburgerIcon
            isClose={isMenuClose}
            onClick={() => setIsMenuClose(!isMenuClose)}
          ></HamburgerIcon>
        </NavbarRight>
      </Content>
      <Menu isClose={isMenuClose} setIsMenuClose={setIsMenuClose}/>
    </>
  );
};

export default Navbar;
