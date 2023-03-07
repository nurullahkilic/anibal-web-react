import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "../../shared/Button";
import { Container, TextContent, BgTitle, SideText } from "./styles";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <TextContent>
        <BgTitle>{t("aboutUs.title")}</BgTitle>
        <SideText>
          <p>{t("aboutUs.desc.p1")}</p>
          <p>{t("aboutUs.desc.p2")}</p>
          <p>{t("aboutUs.desc.p3")}</p>
        </SideText>
      </TextContent>
      <Button to={"/services"} isBackWhite={true} as={Link}>
        {t("aboutUs.button")}
      </Button>
    </Container>
  );
};

export default AboutUs;
