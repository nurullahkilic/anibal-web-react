import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
import AnibalMigfer from "../../assets/anibal-hero.png";

import HamburgerIcon from "../HamburgerIcon";
import Menu from "../../views/Menu";

import { NavbarItems } from "../../config/routes";
import { LinksAnimation } from "./config"


const Navbar = () => {
  const [isMenuClose, setIsMenuClose] = useState(true);

  return (
    <>
      <Content isClose={isMenuClose}>
        <NavbarLeft className="logo">
          <LogoLink
            to={"/"}
            as={NavLink}
            onClick={() => setIsMenuClose(true)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Logo src={AnibalMigfer} />
          </LogoLink>
        </NavbarLeft>
        <NavbarRight>
          <ItemsContent
            as={motion.div}
            variants={LinksAnimation}
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
      <Menu isClose={isMenuClose} setIsMenuClose={setIsMenuClose} />
    </>
  );
};

export default Navbar;
