import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Container, Background, Content, Text, ButtonStyle } from "./styles";
import GetInTouchImage from "../../assets/get-in-touch.webp";

const GetInTouch = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Content>
        <div>
          <Text>{t("getInTouch.desc")}</Text>
          <ButtonStyle isBackWhite={false} to={"/contact"} as={Link}>
            {t("getInTouch.button")}
          </ButtonStyle>
        </div>
        <div>
          <Text>{t("getInTouch.interested")}:</Text>
          <ul>
            <li>Flutter Developer</li>
            <li>PHP Laravel Developer</li>
            <li>Golang Developer</li>
            <li>React.js Developer</li>
            <li>DevOps</li>
            <li>UI/UX Designer</li>
            <li>Product Owner</li>
            <li>Scrum Master</li>
          </ul>
        </div>
      </Content>
      <Background src={GetInTouchImage} />
    </Container>
  );
};

export default GetInTouch;
