import { useTranslation } from "react-i18next";
import {
  Container,
  Content,
  LeftSide,
  ContactCard,
  InputGroup,
  SubmitButton,
} from "./styles";

import { Input, TextArea } from "../../shared/Input";
import MouseTracker from "../../components/MouseTracker";

const ContactLayout = ({ isAnimated = false, children }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Content>
        <LeftSide>{children}</LeftSide>
        <ContactCard>
          <div>
            <InputGroup>
              <Input>{t("contactLayout.name")}</Input>
              <Input>{t("contactLayout.surname")}</Input>
            </InputGroup>
            <Input>{t("contactLayout.mail")}</Input>
            <Input>{t("contactLayout.subject")}</Input>
            <TextArea>{t("contactLayout.message")}</TextArea>
            <SubmitButton to="/" isBackWhite={true}>
              {t("contactLayout.submit")}
            </SubmitButton>
          </div>
        </ContactCard>
      </Content>
      {isAnimated && <MouseTracker />}
    </Container>
  );
};

export default ContactLayout;
