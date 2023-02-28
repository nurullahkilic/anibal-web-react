import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Content, BgTitle, MdTitle, SmTitle } from "./styles";

import ContactPopup from "../../shared/ContactModal";

import { OpportunitiesDatas } from "../../components/Opportunities/config";
const ApplyModal = ({ modalType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [searchParams, setSearchParams] = useSearchParams();

  const removeParam = (param) => {
    if (searchParams.has(param)) {
      searchParams.delete(param);
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    const selectedItem = OpportunitiesDatas.find(
      (item) => item.slug == modalType
    );
    if (selectedItem == undefined) return;
    setSelected(selectedItem);
    setIsOpen(true);
  }, [modalType]);

  return (
    <ContactPopup
      isOpen={isOpen}
      toggle={() => {
        removeParam("apply");
        setIsOpen(false);
      }}
    >
      <Content>
        <BgTitle>
          {selected?.name} pozisyonu için şimdi başvur!
        </BgTitle>
        <SmTitle>Bizimle iletişime geç!</SmTitle>
        <MdTitle href="mailto:destek@anibalbilisim.com">
          destek@anibalbilisim.com
        </MdTitle>
      </Content>
    </ContactPopup>
  );
};

export default ApplyModal;
