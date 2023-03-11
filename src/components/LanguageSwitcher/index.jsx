import { useTranslation } from "react-i18next";
import { Label, Flag } from "./styles";

import { changeLanguage, languages } from "../../config/i18n";

const LanguageSwitcher = (props) => {
  const {
    i18n: { language },
  } = useTranslation();

  const selectHandler = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <>
      <Label htmlFor="languages" {...props}>
        {languages.map((item, key) =>
          item.lng == language ? (
            <Flag key={key}>
              <img src={item.icon} />
            </Flag>
          ) : null
        )}
        <select
          name="languages"
          id="languages"
          defaultValue={language}
          onChange={selectHandler}
        >
          {languages &&
            languages?.map((item, key) => {
              return (
                <option value={item?.lng} key={key}>
                  {item?.name}
                </option>
              );
            })}
        </select>
      </Label>
    </>
  );
};

export default LanguageSwitcher;
