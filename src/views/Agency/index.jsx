import { css } from "@emotion/react";

import { Container } from "./styles";

import HeroSection from "../../components/HeroSection";
import { Title } from "../../components/BaseLayout/styles";
import TeamsSection from "../../components/TeamsSection";
import ReferancesSection from "../../components/ReferancesSection";

const Agency = () => {
  return (
    <Container>
      <HeroSection>
        <Title fontSize={"10rem"}>KU RUM SAL</Title>
      </HeroSection>
      <TeamsSection/>
      <ReferancesSection/>
    </Container>
  );
};

export default Agency;
