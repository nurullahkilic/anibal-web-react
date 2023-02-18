import ScrollViewImage from "../../assets/scroll-view.jpeg";
import ServicesMobile from "../../assets/services-mobile.png";
import ServicesWeb from "../../assets/services-web.png";

export const HomeScrollData = [
  {
    id: 1,
    number: "01",
    title: "Dinliyoruz",
    description:
      "Mobil cihazların yaşantımızdaki etkisi her geçen gün artıyor. Mobil uygulamalarda geçirilen zaman günde 3 saati bulmuş durumda.",
    image: ScrollViewImage,
  },
  {
    id: 2,
    number: "02",
    title: "Projelendiriyoruz",
    description:
      "Mobil cihazların yaşantımızdaki etkisi her geçen gün artıyor. Mobil uygulamalarda geçirilen zaman günde 3 saati bulmuş durumda. ",
    image: ServicesMobile,
  },
  {
    id: 3,
    number: "03",
    title: "Sonuçlandırıyoruz",
    description:
      "Mobil cihazların yaşantımızdaki etkisi her geçen gün artıyor. Mobil uygulamalarda geçirilen zaman günde 3 saati bulmuş durumda.",
    image: ServicesWeb,
  },
];

export const ImagesAnimationConfig = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.22,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.22,
    },
  },
};
  
