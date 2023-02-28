import { Container, Header } from "./styles";
import Accordion from "./components/Accordion";

import { OpportunitiesDatas } from "./config";

const Opportunities = () => {
  return (
    <Container>
      <Header>Current Opportunities</Header>
      <Accordion data={OpportunitiesDatas} />
    </Container>
  );
};

export default Opportunities;
