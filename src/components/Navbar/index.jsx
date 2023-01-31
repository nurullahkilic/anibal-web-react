import { Content, Logo, NavbarLeft, NavbarRight,NavbarText } from "./styles.js";
import AnibalLogo from "../../assets/anibal-logo.png";

const Navbar = () => {
  return (
    <Content>
      <NavbarLeft>
        <Logo src={AnibalLogo} />
      </NavbarLeft>
      <NavbarRight>
        <NavbarText>İşlerimiz</NavbarText>
        <NavbarText>İletişim</NavbarText>
      </NavbarRight>
    </Content>
  );
};

export default Navbar;
