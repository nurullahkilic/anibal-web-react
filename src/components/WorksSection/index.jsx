import { useTranslation } from "react-i18next";

import { Container, WorkItemsContent } from "./styles";

import BaseLayout from "../../shared/BaseLayout";

import WorkCardItem from "../../shared/WorkCardItem";
import { WorksData } from "../../config/works";

const WorksSection = () => {
  const { t } = useTranslation();
  return (
    <BaseLayout
      title={t("worksSection.title")}
      sideText={t("worksSection.desc")}
      backgroundColor="#242424"
    >
      <Container>
        <WorkItemsContent>
          {WorksData &&
            WorksData?.map((work, key) => <WorkCardItem {...work} key={key} />)}
        </WorkItemsContent>
      </Container>
    </BaseLayout>
  );
};

export default WorksSection;
