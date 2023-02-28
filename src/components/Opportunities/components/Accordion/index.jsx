import { useState } from "react";
import { AccordionContent } from "./styles";

import Item from "../Item";

const Accordion = ({ data }) => {
  const [expanded, setExpanded] = useState();

  return (
    <AccordionContent>
      {data?.map((item, key) => (
        <Item
          title={item?.name}
          i={key}
          expanded={expanded}
          setExpanded={setExpanded}
          item={item}
          key={key}
        />
      ))}
    </AccordionContent>
  );
};

export default Accordion;
