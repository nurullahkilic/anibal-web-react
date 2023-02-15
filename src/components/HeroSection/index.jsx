import {
  Container,
  SideContent,
  HeroTextContent,
  BgText,
  SmText,
} from "./styles";

const defaultDescription = (
  <div>
    Ulaşmak istediğiniz teknolojik hedefe, en doğru teknolojiler ve mühendislik
    teknikleri ile gitmenize yardımcı olurken, özverili ve samimi ekibimiz ile{" "}
    <span>her zaman sizlerin yanında olacağız.</span>
  </div>
);

const HeroSection = ({
  children,
  heroText = "Geleceğe yol açar",
  description = defaultDescription,
}) => {
  return (
    <Container>
      <SideContent>{children}</SideContent>
      <HeroTextContent>
        <BgText>{heroText}</BgText>
        <SmText>{description}</SmText>
      </HeroTextContent>
    </Container>
  );
};

export default HeroSection;
