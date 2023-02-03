import { Container, TextContent, Title, SideText} from "./styles";

const BaseLayout = ({title,sideText,backgroundColor,children}) => {
  return (
    <Container color={backgroundColor}>
      <TextContent>
        <Title>{title}</Title>
        <SideText>{sideText}</SideText>
      </TextContent>

      {children}
    </Container>
  );
};

export default BaseLayout;
