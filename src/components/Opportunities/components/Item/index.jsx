import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

import { ItemContent } from "./styles";
import { BottomArrow } from "../../../icons";

import InnerContent from "../InnerContent";

const Item = ({ title, i, expanded, setExpanded, item }) => {
  const isOpen = i === expanded;

  const { t } = useTranslation();
  return (
    <>
      <ItemContent
        onClick={() => setExpanded(isOpen ? false : i)}
        isOpen={isOpen}
        less={t("opportunities.detail.less")}
        more={t("opportunities.detail.more")}
      >
        <h3>{title}</h3>
        <span onClick={() => {}}>
          <BottomArrow fill="black" />
        </span>
      </ItemContent>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <InnerContent item={item} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Item;
