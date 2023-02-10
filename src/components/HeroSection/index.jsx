import { Container,SideContent, HeroTextContent, BgText, SmText} from "./styles";

const HeroSection = ({ children }) => {
  return (
    <Container>
      <SideContent>
      {children}
      </SideContent>
      <HeroTextContent>
        <BgText>Geleceğe yol açar</BgText>
        <SmText>
          Ulaşmak istediğiniz teknolojik hedefe, en doğru teknolojiler ve
          mühendislik teknikleri ile gitmenize yardımcı olurken, özverili ve
          samimi ekibimiz ile <span>her zaman sizlerin yanında olacağız.</span>
        </SmText>
      </HeroTextContent>
    </Container>
  );
};

export default HeroSection;
