import Fonangels from "../../assets/referances/fonangels.png";
import Alternatif from "../../assets/referances/alternatif.png";
import GizSoft from "../../assets/referances/giz-soft.png";
import Infinitive from "../../assets/referances/infinitive.png";
import Macellan from "../../assets/referances/macellan.png";
import Polytime from "../../assets/referances/polytime.png";
import Startup from "../../assets/referances/startup.png";
import SugarTech from "../../assets/referances/sugar-tech.png";

export const ReferancesData = [
  {
    title: "Fonangels",
    href: "https://example.com/",
    image: Fonangels,
  },
  {
    title: "Alternatif",
    href: "https://example.com/",
    image: Alternatif,
  },
  {
    title: "GizSoft",
    href: "https://example.com/",
    image: GizSoft,
  },
  {
    title: "Infinitive",
    href: "https://example.com/",
    image: Infinitive,
  },
  {
    title: "Macellan",
    href: "https://example.com/",
    image: Macellan,
  },
  {
    title: "Polytime",
    href: "https://example.com/",
    image: Polytime,
  },
  {
    title: "Startup",
    href: "https://example.com/",
    image: Startup,
  },
  {
    title: "SugarTech",
    href: "https://example.com/",
    image: SugarTech,
  },
];

export const RefAnimation = {
  hidden: {
    opacity: 1,
    height: 0,
    transition: {
      duration: 0.7,
      delay: 0.4,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    height: "100%",
    transition: {
      duration: 0.3,
      delayChildren: 0.34,
      staggerChildren: 0.13,
    },
  },
};

export const ChildAnimation = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

  
