
import { Container, Content } from "./styles";

import Navbar from "../../components/Navbar";
import Button from "../../shared/Button";

const NotFound = () => {

  return (
    <Container>
      <Navbar/>
      <Content>
        <h1>404</h1>
        <h4>Aradığınız sayfa bulunamadı!</h4>
        <Button to={'/'} isBackWhite={true}>ANA SAYFAYA DÖN!</Button>
      </Content>
    </Container>
  );
};

export default NotFound;
