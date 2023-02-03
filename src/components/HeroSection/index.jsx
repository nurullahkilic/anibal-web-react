import { Container, HeroImage, HeroTextContent, BgText, SmText} from "./styles";
import ImageSource from "../../assets/abibal-hero.png";

const HeroSection = () => {
  return (
    <Container>
      <HeroImage src={ImageSource}/>
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
