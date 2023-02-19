import {
  Container,
  Content,
  LeftSide,
  AdressContent,
  Adress,
  AdressTitle,
  Detail,
  ContactCard,
  Tel,
  Mail,
  InputGroup,
  SubmitButton,
  LinksContent,
} from "./styles";

import Input from "../../shared/Input";

import { SocialMedias } from "../../config/routes";

const Contact = () => {
  return (
    <Container>
      <Content>
        <LeftSide>

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
              Barış Mahallesi Koşuyolu Caddesi No:30 41470 Gebze/Kocaeli
            </Detail>
          </Adress>
        </AdressContent>
        <LinksContent>
        {SocialMedias && SocialMedias?.map((item,key)=>{
          return (
            <a href={item?.href} target="_blank" key={key}>
            <item.icon fill="#afafaf"/>
          </a>
          )
        })}
        
        </LinksContent>
        </LeftSide>

        <ContactCard>
          <div>
            <InputGroup>
              <Input>Ad</Input>
              <Input>Soyad</Input>
            </InputGroup>
            <Input>Email</Input>
            <Input>Konu</Input>
            <Input>Mesaj</Input>
            <SubmitButton to="/" isBackWhite={true}>
              GÖNDER
            </SubmitButton>
          </div>
        </ContactCard>
      </Content>
    </Container>
  );
};

export default Contact;
