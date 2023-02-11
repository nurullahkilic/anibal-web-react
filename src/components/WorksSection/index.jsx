import {
  Container,
  WorkItemsContent,
  WorkItem,
  LinkSection,
  WorkImage,
  TextContent,
  Tags,
  Title,
  Desc,
} from "./styles";

import BaseLayout from "../../shared/BaseLayout";

import WorksResim from "../../assets/works.jpeg";
import WorksResim2 from "../../assets/works-2.jpeg";
import { Link } from "react-router-dom";

const WorksSection = () => {
  return (
    <BaseLayout
      title="İŞ LER"
      sideText="Lorem ipsum dolor sit amet"
      backgroundColor="#242424"
    >
      <Container>
        <WorkItemsContent>

        
          <WorkItem>
            <LinkSection as={Link} to={"/work"}>
            <WorkImage src={WorksResim2}/>
            <TextContent>
              <Tags>
                <span>WEB TASARIMI</span>
                <span>MOBİL TASARIMI</span>
              </Tags>
              <Title>Palet Merkezi</Title>
              <Desc>
                Lorem ipsum dolor sit amet consectetur. Venenatis risus varius.
              </Desc>
            </TextContent>
            </LinkSection>
          </WorkItem>

          <WorkItem>
            <LinkSection as={Link} to={"/work"}>
            <WorkImage src={WorksResim}/>
            <TextContent>
              <Tags>
                <span>WEB TASARIMI</span>
                <span>MOBİL TASARIMI</span>
              </Tags>
              <Title>Palet Merkezi</Title>
              <Desc>
                Lorem ipsum dolor sit amet consectetur. Venenatis risus varius.
              </Desc>
            </TextContent>
            </LinkSection>
          </WorkItem>


        </WorkItemsContent>
      </Container>
    </BaseLayout>
  );
};

export default WorksSection;
