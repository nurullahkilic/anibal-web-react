import { useTranslation } from "react-i18next";

import { Container, Header } from "./styles";
import Accordion from "./components/Accordion";

import { OpportunitiesDatas } from "./config";

const Opportunities = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Header>{t("opportunities.title")}</Header>
      <Accordion data={OpportunitiesDatas} />
    </Container>
  );
};

export default Opportunities;
