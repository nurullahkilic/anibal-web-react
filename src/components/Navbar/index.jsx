import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { useModal } from "../../context/ModalContext";

import {
  Content,
  LogoLink,
  Logo,
  NavbarLeft,
  ItemsContent,
  NavbarRight,
  NavbarLink,
} from "./styles";
import LanguageSwitcher from "../LanguageSwitcher";

import AnibalMigfer from "../../assets/anibal-hero.png";
import HamburgerIcon from "../HamburgerIcon";

import { NavbarItems } from "../../config/routes";
import { LinksAnimation } from "./config";

const Navbar = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const isMenuClose = useModal((state) => state.isMenuClose);
  const toggleMenu = useModal((state) => state.toggleMenu);

  return (
    <>
      <Content isClose={isMenuClose}>
        <NavbarLeft className="logo">
          <LogoLink
            to={"/"}
            as={NavLink}
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
            {NavbarItems[language] &&
              NavbarItems[language]?.map((item) => {
                return (
                  <NavbarLink as={Link} to={item?.href} key={item?.id}>
                    {item?.title}
                  </NavbarLink>
                );
              })}
          </ItemsContent>
          <>
            <LanguageSwitcher />
            <HamburgerIcon
              isClose={isMenuClose}
              onClick={toggleMenu}
            ></HamburgerIcon>
          </>
        </NavbarRight>
      </Content>
    </>
  );
};

export default Navbar;
