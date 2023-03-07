import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Container, Content } from "./styles";

import Navbar from "../../components/Navbar";
import Button from "../../shared/Button";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Navbar />
      <Content>
        <h1>404</h1>
        <h4>{t("notFound.desc")}</h4>
        <Button to={"/"} isBackWhite={true} as={Link}>
          {t("notFound.button")}
        </Button>
      </Content>
    </Container>
  );
};

export default NotFound;
