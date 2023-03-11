import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useHeroImage = ({ name }) => {
  const [source, setSource] = useState(null);
  const {
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    import(`../hero/${language}/${name}.png`)
      .then((path) => {
        setSource(path?.default);
      })
      .catch(() =>
        console.error(
          `Cannot find the "${language}/${name}.png" file in locales/${language} directory.`
        )
      );
  }, [language]);

  return { source };
};
