import {
  Container,
  TextSide,
  TitleSection,
  Desc,
  ImageSide,
  Image
} from "./styles";

import Title from "../../shared/Title";

import { Services } from "../ServicesSection/config";

const ServiceView = ({title,desc,image}) => {
  return (
    <Container>
      <TextSide>
        <TitleSection>{title}</TitleSection>
        <Desc>{desc}</Desc>
      </TextSide>
      <ImageSide>
        <Image src={image} />
      </ImageSide>
    </Container>
  );
};

export default ServiceView;
