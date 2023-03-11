import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export default i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("language") || "tr-TR",
  });

export const changeLanguage = (language) => {
  localStorage.setItem("language", language);
  i18n.changeLanguage(language);
};

import TurkeyFlag from "../assets/flags/TR.png";
import USFlag from "../assets/flags/US.png";
import DeutschFlag from "../assets/flags/DE.png";

export const languages = [
  {
    name: "Türkçe",
    lng: "tr-TR",
    icon: TurkeyFlag,
  },
  {
    name: "English",
    lng: "en-US",
    icon: USFlag,
  },
  {
    name: "Deutsch",
    lng: "de-DE",
    icon: DeutschFlag,
  },
];
