import { useTranslation } from "react-i18next";
import { useModal } from "../../context/ModalContext";

import { Content, BgTitle, MdTitle, SmTitle } from "./styles";

import ContactPopup from "../../shared/ContactModal";

const StartProject = () => {
  const { t } = useTranslation();
  const isStartProjectClose = useModal((state) => state.isStartProjectClose);
  const toggleStartProject = useModal((state) => state.toggleStartProject);

  return (
    <ContactPopup isOpen={!isStartProjectClose} toggle={toggleStartProject}>
      <Content>
        <BgTitle>{t("startProjectModal.title")}</BgTitle>
        <SmTitle>{t("startProjectModal.contact")}</SmTitle>
        <MdTitle href="mailto:destek@anibalbilisim.com">
          destek@anibalbilisim.com
        </MdTitle>
      </Content>
    </ContactPopup>
  );
};

export default StartProject;
