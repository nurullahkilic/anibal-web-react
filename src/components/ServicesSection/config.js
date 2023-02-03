import ServicesMobile from "../../assets/services-mobile.png";
import ServicesWeb from "../../assets/services-web.png";

export const Services = [
  {
    title: "Mobil Teknolojiler",
    desc: "Profesyonel ekibimiz ve çözüm ortakları ile 360 hizmet sunarak, müşterilere sürdürülebilir ve hızlı hizmet vermek için çalışıyoruz.",
    image: ServicesMobile,
  },
  {
    title: "Web Teknolojileri",
    desc: "Profesyonel ekibimiz ve çözüm ortakları ile 360 hizmet sunarak, müşterilere sürdürülebilir ve hızlı hizmet vermek için çalışıyoruz.",
    image: ServicesWeb,
  },
];


export const ImagesAnimationConfig = {
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.25,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.22,
        delay: 0.1,
      },
    },
  };