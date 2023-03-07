import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import {
  Container,
  LinksContent,
  FooterItem,
  Title,
  BlankSection,
} from "./styles";

import { MenuItems, SocialMedias } from "../../config/routes";

const Footer = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <Container>
      <FooterItem>
        <LinksContent>
          {MenuItems[language] &&
            MenuItems[language]?.map((item) => (
              <Link to={item?.href} key={item?.id}>
                {item?.title}
              </Link>
            ))}
        </LinksContent>
      </FooterItem>
      <FooterItem>
        <Title>{t("footer.office")} 1</Title>
        <p>
          <span>Bilişim Vadisi</span>
          {t("footer.adress1")}
        </p>
      </FooterItem>
      <FooterItem>
        <Title>{t("footer.office")} 2</Title>
        <p>
          <span>Tubitak Marmara Teknokent</span>
          {t("footer.adress2")}
        </p>
      </FooterItem>
      <FooterItem>
        <BlankSection>
          {SocialMedias &&
            SocialMedias?.map((item, key) => {
              return (
                <a
                  href={item?.href}
                  target="_blank"
                  title={item?.title}
                  key={key}
                >
                  <item.icon />
                </a>
              );
            })}
        </BlankSection>
        <p>
          <span>0 (262) 503 97 34</span>
          <br />
          <span className="mail">info@anibalbilisim.com</span>
        </p>
      </FooterItem>
    </Container>
  );
};

export default Footer;
