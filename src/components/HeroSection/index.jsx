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
import { Trans } from "react-i18next";
import { t } from "i18next";

const HeroSection = ({
  titleText,
  heroImage,
  animatedImage,
  heroText,
  description,
}) => {
  const isAnimated = useAnimated({ minWidth: 760 });

  return (
    <Container>
      <SideContent>
        {!isAnimated &&
          (!heroImage ? <HeroTitle>{titleText}</HeroTitle> : heroImage)}
      </SideContent>
      {isAnimated && (animatedImage != null) && (
        <BackgroundTexture>
          <HeroFlowmap desktop={animatedImage} />
        </BackgroundTexture>
      )}
      <HeroTextContent>
        <BgText>{heroText ? heroText : t("heroTitle")}</BgText>
        <SmText>
          {description ? (
            description
          ) : (
            <Trans i18nKey="heroDefaultDesc" components={[<span />]} />
          )}
        </SmText>
      </HeroTextContent>
    </Container>
  );
};

export default HeroSection;
