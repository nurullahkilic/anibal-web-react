import { useState } from "react";
import { AccordionContent } from "./styles";

import Item from "../Item";
import { Opportunities } from "../../config";

const Accordion = () => {
  const [expanded, setExpanded] = useState();

  return (
    <AccordionContent>
      {Opportunities.map((item, key) => (
        <Item title={item?.name} i={key} expanded={expanded} setExpanded={setExpanded} key={key} />
      ))}
    </AccordionContent>
  );
};

export default Accordion;
