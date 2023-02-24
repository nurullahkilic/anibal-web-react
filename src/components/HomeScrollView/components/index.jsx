import {
  Container,
  TextSide,
  TitleSection,
  Desc,
  ImageSide,
  Image,
} from "./styles";

import useActiveSection from "../util";

const HomeScrollViewItem = ({
  state,
  setState,
  _id,
  titleId,
  title,
  desc,
  image,
}) => {
  const { ref } = useActiveSection({
    itemId: _id,
    active: state,
    setActive: setState,
  });

  return (
    <Container ref={ref}>
      <TextSide>
        <TitleSection titleId={titleId}>{title}</TitleSection>
        <Desc>{desc}</Desc>
      </TextSide>
      <ImageSide>
        <Image src={image} />
      </ImageSide>
    </Container>
  );
};

export default HomeScrollViewItem;
