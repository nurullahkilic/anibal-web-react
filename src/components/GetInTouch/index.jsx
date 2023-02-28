import { Link } from "react-router-dom";

import { Container, Background, Content, Text, ButtonStyle } from "./styles";

import GetInTouchImage from "../../assets/get-in-touch.webp";

const GetInTouch = () => {
  return (
    <Container>
      <Content>
        <div>
          <Text>
            If you’ve got some cool stuff you’d like to share we’d love to see
            it even if there isn’t a fit right right now.
          </Text>
          <ButtonStyle isBackWhite={false} to={"/contact"} as={Link}>
            GET IN TOUCH
          </ButtonStyle>
        </div>
        <div>
          <Text>We're interested in:</Text>
          <ul>
            <li>Webflow</li>
            <li>Webgl</li>
            <li>Web Animation</li>
            <li>Motion Graphics</li>
            <li>Photography</li>
            <li>Illustration</li>
            <li>Creative Strategy</li>
            <li>Copywriting</li>
          </ul>
        </div>
      </Content>
      <Background src={GetInTouchImage} />
    </Container>
  );
};

export default GetInTouch;
