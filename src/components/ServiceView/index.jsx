import {
  Container,
  TextSide,
  TitleSection,
  Desc,
  ImageSide,
  Image
} from "./styles";

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
