import { useTranslation } from "react-i18next";
import {
  AdressContent,
  Adress,
  AdressTitle,
  Detail,
  Tel,
  Mail,
  LinksContent,
} from "./styles";

import ContactLayout from "../../shared/ContactLayout";
import { SocialMedias } from "../../config/routes";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <ContactLayout isAnimated={true}>
      <AdressContent>
        <Adress>
          <AdressTitle>Bilişim Vadisi</AdressTitle>
          <Detail>{t("footer.adress1")}</Detail>
          <Tel>0 (262) 503 97 34</Tel>
          <Mail>info@anibalbilisim.com</Mail>
        </Adress>
        <Adress>
          <AdressTitle>Tubitak Teknokent</AdressTitle>
          <Detail>{t("footer.adress2")}</Detail>
        </Adress>
      </AdressContent>
      <LinksContent>
        {SocialMedias &&
          SocialMedias?.map((item, key) => {
            return (
              <a href={item?.href} target="_blank" key={key}>
                <item.icon fill="#afafaf" />
              </a>
            );
          })}
      </LinksContent>
    </ContactLayout>
  );
};

export default Contact;
