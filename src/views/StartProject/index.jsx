import { useModal } from "../../context/ModalContext";

import { Content, BgTitle, MdTitle, SmTitle } from "./styles";

import ContactPopup from "../../shared/ContactModal";

const StartProject = () => {
  const isStartProjectClose = useModal((state) => state.isStartProjectClose);
  const toggleStartProject = useModal((state) => state.toggleStartProject);

  return (
    <ContactPopup isOpen={!isStartProjectClose} toggle={toggleStartProject}>
      <Content>
        <BgTitle>Haydi! Projene başlamanda sana yardımcı olalım!</BgTitle>
        <SmTitle>Bizimle iletişime geç!</SmTitle>
        <MdTitle href="mailto:destek@anibalbilisim.com">
          destek@anibalbilisim.com
        </MdTitle>
      </Content>
    </ContactPopup>
  );
};

export default StartProject;
