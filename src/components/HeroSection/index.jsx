import {
  Container,
  SideContent,
  BackgroundTexture,
  HeroTextContent,
  HeroTitle,
  BgText,
  SmText,
} from "./styles";

import HeroFlowmap from "../../shared/HeroFlowmap";

import { useAnimated } from "./util";

const defaultDescription = (
  <div>
    Ulaşmak istediğiniz teknolojik hedefe, en doğru teknolojiler ve mühendislik
    teknikleri ile gitmenize yardımcı olurken, özverili ve samimi ekibimiz ile{" "}
    <span>her zaman sizlerin yanında olacağız.</span>
  </div>
);

const HeroSection = ({
  titleText,
  heroImage,
  animatedImage,
  heroText = "Geleceğe yol açar",
  description = defaultDescription,
}) => {
  const isAnimated = useAnimated({ minWidth: 760 });

  return (
    <Container>
      <SideContent>
        {!isAnimated && (!heroImage ?  <HeroTitle>{titleText}</HeroTitle> : heroImage)}
      </SideContent>
      {isAnimated && (
        <BackgroundTexture>
          <HeroFlowmap desktop={animatedImage} />
        </BackgroundTexture>
      )}
      <HeroTextContent>
        <BgText>{heroText}</BgText>
        <SmText>{description}</SmText>
      </HeroTextContent>
    </Container>
  );
};

export default HeroSection;
