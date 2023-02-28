import { Link } from "react-router-dom";
import { Content, Clauses, ApplyButton } from "./styles";

const InnerContent = ({ item }) => {
  return (
    <Content>
      {item && (
        <>
          <p>{item?.description}</p>
          {item?.requirements?.map((item, key) => (
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
      <ApplyButton isBackWhite={false} as={Link} to={`?apply=${item?.slug}`}>
        Şimdi Başvur
      </ApplyButton>
    </Content>
  );
};

export default InnerContent;
