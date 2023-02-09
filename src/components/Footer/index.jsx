import { Link } from "react-router-dom";
import {
  Container,
  LinksContent,
  FooterItem,
  Title,
  BlankSection,
} from "./styles";

import { MenuItems } from "../../config/routes";
import { Linkedin, Instagram } from "../icons";

const Footer = () => {
  return (
    <Container>
      <FooterItem>
        <LinksContent>
          {MenuItems &&
            MenuItems?.map((item) => (
              <Link to={item?.href} key={item?.id}>
                {item?.title}
              </Link>
            ))}
          <Link to={"/"} className="active">
            BİZE ULAŞIN
          </Link>
        </LinksContent>
      </FooterItem>
      <FooterItem>
        <Title>OFİS 1</Title>
        <p>
          <span>Bilişim Vadisi</span>
          Muallimköy Mahallaesi Deniz Caddesi TGB 1.Etap 1.2.B-Blok Kat:1 41400
          Gebze/Kocaeli
        </p>
      </FooterItem>
      <FooterItem>
        <Title>OFİS 2</Title>
        <p>
          <span>Tubitak Marmara Teknokent</span>
          Barış Mahallesi Koşuyolu Caddesi No:30 41470 Gebze/Kocaeli
        </p>
      </FooterItem>
      <FooterItem>
        <BlankSection>
          <a
            href="https://www.linkedin.com/company/anibalbilisim/"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/anibalbilisim/" target="_blank">
            <Instagram />
          </a>
        </BlankSection>
        <p>
          <span>0 (262) 503 97 34</span>
          <br />
          <span>info@anibalbilisim.com</span>
        </p>
      </FooterItem>
    </Container>
  );
};

export default Footer;
