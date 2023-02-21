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
  return (
    <Container>
      <Content>
        <LeftSide>{children}</LeftSide>
        <ContactCard>
          <div>
            <InputGroup>
              <Input>Ad</Input>
              <Input>Soyad</Input>
            </InputGroup>
            <Input>Email</Input>
            <Input>Konu</Input>
            <TextArea>Mesaj</TextArea>
            <SubmitButton to="/" isBackWhite={true}>
              GÖNDER
            </SubmitButton>
          </div>
        </ContactCard>
      </Content>
      {isAnimated && <MouseTracker />}
    </Container>
  );
};

export default ContactLayout;
