import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Content, Clauses, ApplyButton } from "./styles";

const InnerContent = ({ item }) => {
  const { t } = useTranslation();
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
        {t("opportunities.button")}
      </ApplyButton>
    </Content>
  );
};

export default InnerContent;
