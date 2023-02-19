import {
  WorkItem,
  LinkSection,
  WorkImage,
  TextContent,
  Tags,
  Title,
  Desc,
} from "./styles";

const WorkCardItem = ({
  slug,
  image,
  tags,
  title,
  description,
  mode = "dark",
}) => {
  return (
    <WorkItem mode={mode}>
      <LinkSection to={`/work/${slug}`}>
        <WorkImage src={image} />
        <TextContent>
          <Tags>
            {tags && tags?.map((tag, key) => <span key={key}>{tag}</span>)}
          </Tags>
          <Title>{title}</Title>
          <Desc>{description}</Desc>
        </TextContent>
      </LinkSection>
    </WorkItem>
  );
};

export default WorkCardItem;
