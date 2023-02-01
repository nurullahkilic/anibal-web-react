import { Link } from "react-router-dom";

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

import { NavbarItems } from "../../config/routes"

const Navbar = ({ children }) => {
  return (
    <Content>
      <NavbarLeft>
        <LogoLink to={"/"} as={Link}>
          <Logo src={AnibalLogo} />
        </LogoLink>
      </NavbarLeft>
      <NavbarRight>
        <ItemsContent>
          {NavbarItems &&
            NavbarItems.map((item) => {
              return (
                <NavbarLink as={Link} to={item?.href} key={item?.id}>
                  {item?.title}
                </NavbarLink>
              );
            })}
        </ItemsContent>
        {children}
      </NavbarRight>
    </Content>
  );
};

export default Navbar;
