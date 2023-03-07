import ScrollViewImage from "../../assets/scroll-view.jpeg";
import ServicesMobile from "../../assets/services-mobile.png";
import ServicesWeb from "../../assets/services-web.png";

export const HomeScrollData = {
  "tr-TR": [
    {
      id: 1,
      number: "01",
      title: "Dinliyoruz",
      description:
        "Sizleri dinliyor, fikrinizi analiz ediyor, istek ve ihtiyaçlarınızı araştırıyoruz. Size en uygun hizmeti sağlıyoruz.",
      image: ScrollViewImage,
    },
    {
      id: 2,
      number: "02",
      title: "Projelendiriyoruz",
      description:
        "Fikrinizi gerçek bir iş haline getirmek için gereksinimleri belirliyor, İsteğiniz doğrultusunda projeler oluşturuyoruz.",
      image: ServicesMobile,
    },
    {
      id: 3,
      number: "03",
      title: "Sonuçlandırıyoruz",
      description:
        "Agile(Çevik) yazılım geliştirme metodu ile fikrinizi, ihtiyacınızı ürüne dönüştürüyoruz.",
      image: ServicesWeb,
    },
  ],
  "en-US": [
    {
      id: 1,
      number: "01",
      title: "We're listening",
      description:
        "We listen to you, analyze your ideas, and investigate your wishes and needs. We provide you the most convenient service.",
      image: ScrollViewImage,
    },
    {
      id: 2,
      number: "02",
      title: "We're projecting",
      description:
        "In order to turn your idea into a real business, we determine the requirements and create projects according to your request.",
      image: ServicesMobile,
    },
    {
      id: 3,
      number: "03",
      title: "We conclude",
      description:
        "We turn your idea and need into a product with the Agile software development method.",
      image: ServicesWeb,
    },
  ],
};

export const animConfig = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.12,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.12,
    },
  },
};
