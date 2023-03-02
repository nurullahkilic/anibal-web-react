import { Container, Content } from "./styles";

import Navbar from "../../components/Navbar";
import Button from "../../shared/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <h1>404</h1>
        <h4>Aradığınız sayfa bulunamadı!</h4>
        <Button to={"/"} isBackWhite={true} as={Link}>
          ANA SAYFAYA DÖN!
        </Button>
      </Content>
    </Container>
  );
};

export default NotFound;
