import { useTranslation } from "react-i18next";

import { Container, Header } from "./styles";
import Accordion from "./components/Accordion";

import { OpportunitiesDatas } from "./config";

const Opportunities = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <Container>
      <Header>{t("opportunities.title")}</Header>
      <Accordion data={OpportunitiesDatas?.[language]} />
    </Container>
  );
};

export default Opportunities;
