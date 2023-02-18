import {
  Container,
  Content,
  AdressContent,
  Adress,
  AdressTitle,
  Detail,
  ContactCard,
  Tel,
  Mail,
  InputGroup,
  SubmitButton
} from "./styles";

import Input from "../../shared/Input";

const Contact = () => {
  return (
    <Container>
      <Content>
        <AdressContent>
        <Adress>
          <AdressTitle>Bilişim Vadisi</AdressTitle>
          <Detail>
            Muallimköy Mahallesi Deniz Caddesi TGB 1.Etap 1.2.B-Blok Kat:1
            41400 Gebze/Kocaeli
          </Detail>
          <Tel>0 (262) 503 97 34</Tel>
          <Mail>info@anibalbilisim.com</Mail>
        </Adress>
        <Adress>
          <AdressTitle>Tubitak Teknokent</AdressTitle>
          <Detail>
            Muallimköy Mahallesi Deniz Caddesi TGB 1.Etap 1.2.B-Blok Kat:1
            41400 Gebze/Kocaeli
          </Detail>
        </Adress>
        </AdressContent>
        <ContactCard>
          <div>
          <InputGroup>
            <Input>Ad</Input>
            <Input>Soyad</Input>
          </InputGroup>
          <Input>Email</Input>
          <Input>Konu</Input>
          <Input>Mesaj</Input>
          <SubmitButton to="/" isBackWhite={true}>Gönder</SubmitButton>
          </div>
        </ContactCard>
      </Content>
    </Container>
  );
};

export default Contact;
