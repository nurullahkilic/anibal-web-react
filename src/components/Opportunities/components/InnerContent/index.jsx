import { Content, Clauses, ApplyButton } from "./styles";

import { Opportunities } from "../../config";

const InnerContent = ({ itemId }) => {
  return (
    <Content>
      {Opportunities && (
        <>
          <p>{Opportunities[itemId]?.description}</p>
          {Opportunities[itemId]?.requirements?.map((item, key) => (
            <Clauses key={key}>
              <h5>{item?.title}</h5>
              <ul>
                {item?.clauses &&
                  item?.clauses?.map((clause, key) => (
                    <li key={key}>{clause}</li>
                  ))}
              </ul>
            </Clauses>
          ))}
        </>
      )}
      <ApplyButton isBackWhite={false} to={"/contact"}>
        Şimdi Başvur
      </ApplyButton>
    </Content>
  );
};

export default InnerContent;
