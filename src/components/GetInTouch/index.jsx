import { Link } from "react-router-dom";

import { Container, Background, Content, Text, ButtonStyle } from "./styles";

import GetInTouchImage from "../../assets/get-in-touch.webp";

const GetInTouch = () => {
  return (
    <Container>
      <Content>
        <div>
          <Text>
            Paylaşmak istediğin harika şeyler varsa, şu anda aktif bir ilan
            olmasa bile görmek isteriz.
          </Text>
          <ButtonStyle isBackWhite={false} to={"/contact"} as={Link}>
            İLETİŞİME GEÇ
          </ButtonStyle>
        </div>
        <div>
          <Text>İlgileniyoruz:</Text>
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
