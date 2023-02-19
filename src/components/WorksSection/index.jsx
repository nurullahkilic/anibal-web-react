import { Container, WorkItemsContent } from "./styles";

import BaseLayout from "../../shared/BaseLayout";

import WorkCardItem from "../../shared/WorkCardItem";
import { WorksData } from "./config";

const WorksSection = () => {
  return (
    <BaseLayout
      title="İŞ LER"
      sideText="Lorem ipsum dolor sit amet"
      backgroundColor="#242424"
    >
      <Container>
        <WorkItemsContent>
          {WorksData &&
            WorksData?.map((work, key) => <WorkCardItem {...work} key={key}/>)}
        </WorkItemsContent>
      </Container>
    </BaseLayout>
  );
};

export default WorksSection;
