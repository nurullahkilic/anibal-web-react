import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const resources = {
  "tr-TR": {
    translation: {
      startProject: "PROJENİ BAŞLAT",
      seeAll: "HEPSİNİ GÖR",
      heroTitle: "Geleceğe yol açar",
      heroDefaultDesc:
        "Ulaşmak istediğiniz teknolojik hedefe, en doğru teknolojiler ve mühendislik teknikleri ile gitmenize yardımcı olurken, özverili ve samimi ekibimiz ile <0>her zaman sizlerin yanında olacağız.</0>",
      aboutUs: {
        title: "Hakkımızda",
        desc: {
          p1: "Bilgi çağından dijital çağa geçerken firmalar için dijitalleşmek artık bir zorunluluk haline gelmiştir. Bu dönüşüm doğru yönetilmez ve çağın gerekliliklerine uygun olarak dijital dönüşüm sağlanmazsa bu faydadan ziyade zarara yol açabilir.",
          p2: "Dijital dönüşümü doğru yöneterek firmanızı bu yeni çağa taşımak için Anibal Bilişim yanınızda. Kadim bir birikimin üzerine yenilikçi fikirler inşa ederek teknolojinin insanlığa faydalı kullanılması amacıyla kurulan Anibal Bilişim, dijital çağın oyun kurucu unsurlarından biri olma yolunda ilerlemektedir.",
          p3: "Sektör bazlı analizler, doğru teşhisler ve reçeteler, dijital dünyada firmanızı ileri taşıyacak çözümler üreterek ulusal ve uluslararası arenada firmanızı dijital dünyaya taşıyoruz. İnsana ve topluma faydalı içerikler üreterek dijital dönüşüm sürecinde insan merkezli bir anlayış ile hizmet veriyoruz.",
        },
        button: "TÜM HİZMETLERİ GÖRÜNTÜLE",
      },
      teamsSection: {
        title: "TA KIM",
        desc: "Tasarımın gücünden beslenen ekip",
      },
      worksSection: {
        title: "İŞ LER",
        desc: "Dijital dünyadaki yolculuğunuzda yanınızdayız",
      },
      servicesSection: {
        title: "SERVİSLERİMİZ",
        button: "TÜM HİZMETLERİ GÖRÜNTÜLE",
      },
      referancesSection: {
        title: "Referanslarımız",
      },
      footer: {
        office: "OFİS",
        adress1:
          "Muallimköy Mahallaesi Deniz Caddesi TGB 1.Etap 1.2.B-Blok Kat:1 41400 Gebze/Kocaeli",
        adress2: "Barış Mahallesi Koşuyolu Caddesi No:30 41470 Gebze/Kocaeli",
      },
      getInTouch: {
        desc: "Paylaşmak istediğin harika şeyler varsa, şu anda aktif bir ilan olmasa bile görmek isteriz.",
        button: "İLETİŞİME GEÇ",
        interested: "İlgileniyoruz",
      },
      opportunities: {
        title: "Mevcut Pozisyonlar",
        button: "Şimdi Başvur",
        detail: {
          less: "AZ DETAY",
          more: "FAZLA DETAY",
        },
      },
      agency: {
        title: "KU RUM SAL",
      },
      careers: {
        title: "KA TIL",
        heroText: "Mükemmel takımımızın bir parçası olmaya hazır mısın?",
        desc: "Anibal ekibi kreatif ve başarılı yeteneklerden oluşur.",
      },
      services: {
        title: "HİZ MET LER",
        heroText: "Çalışma Alanlarımız",
      },
      work: {
        title: "İŞ LER",
        heroText: "Dijital dünyadaki yolculuğunuzda yanınızdayız.",
        desc: "Profesyonel ekibimiz ve çözüm ortakları ile 360° hizmet sunarak müşterilerine sürdürülebilir ve hızlı hizmet vermek için çalışıyoruz.",
        filter: {
          title: "Filtrele",
          all: "Hepsi",
          webDesign: "Web Tasarımı",
          webDevelopment: "Web Yazılımı",
          corporate: "Kurumsal Kimlik",
        },
      },
      singleWork: {
        brief: "Tanım",
        detail: {
          industry: "ENDUSTRİ",
          location: "KONUM",
          involvement: "HİZMETLER",
          visit: "ZİYARET",
        },
        related: "İlişkili Projeler",
      },
      notFound: {
        desc: "Not Found!",
        button: "BACK TO HOME PAGE",
      },
      applyModal: {
        title: "{{role}} pozisyonu için şimdi başvur!",
        contact: "Bizimle iletişime geç!",
      },
      startProjectModal: {
        title: "Haydi! Projene başlamanda sana yardımcı olalım!",
        contact: "Let's contact us!",
      },
      contactLayout: {
        name: "Ad",
        surname: "Soyad",
        mail: "Email",
        subject: "Konu",
        message: "Mesaj",
        submit: "GÖNDER",
      },
    },
  },
  "en-US": {
    translation: {
      startProject: "START YOUR PROJECT",
      seeAll: "SEE ALL",
      heroTitle: "Leads to the future",
      heroDefaultDesc:
        "While helping you to reach the technological goal you want to reach with the most accurate technologies and engineering techniques, <0>we will always be by your side with our devoted and sincere team.</0>",
      aboutUs: {
        title: "About Us",
        desc: {
          p1: "Going from the information age to the digital age, it has become a necessity for companies to go digital. If this transformation is not managed correctly and digital transformation is not provided in accordance with the requirements of the age, this may cause harm rather than benefit.",
          p2: "Anibal Bilişim is with you to move your company into this new era by managing digital transformation correctly. Anibal Bilişim, which was established with the aim of using technology beneficial to humanity by building innovative ideas on an ancient accumulation, is on its way to become one of the playmaker elements of the digital age.",
          p3: "We carry your company to the digital world in the national and international arena by producing sector-based analyzes, accurate diagnoses and prescriptions, and solutions that will move your company forward in the digital world. We serve with a human-centered understanding in the digital transformation process by producing content that is beneficial to people and society.",
        },
        button: "SEE ALL SERVICES",
      },
      teamsSection: {
        title: "TE AM",
        desc: "The team fed by the power of design",
      },
      worksSection: {
        title: "WO RK",
        desc: "We are with you on your journey in the digital world",
      },
      servicesSection: {
        title: "SERVICES",
        button: "SEE ALL SERVICES",
      },
      referancesSection: {
        title: "Referances",
      },
      footer: {
        office: "OFFICE",
        adress1:
          "Muallimköy Mahallesi Deniz Caddesi TGB 1.Etap 1.2.B-Blok Kat:1 41400 Gebze/Kocaeli",
        adress2: "Barış Mahallesi Koşuyolu Caddesi No:30 41470 Gebze/Kocaeli",
      },
      getInTouch: {
        desc: "If you’ve got some cool stuff you’d like to share we’d love to see it even if there isn’t a fit right right now.",
        button: "GET IN TOUCH",
        interested: "We're interested in",
      },
      opportunities: {
        title: "Current Opportunities",
        button: "Apply Now",
        detail: {
          less: "LESS DETAIL",
          more: "MORE DETAIL",
        },
      },
      agency: {
        title: "AGE NCY",
      },
      careers: {
        title: "JO IN",
        heroText: "Are you ready to be a part of our excellent team?",
        desc: "Anibal team consists of creative and successful talents.",
      },
      services: {
        title: "SERV ICES",
        heroText: "",
      },
      work: {
        title: "WO RK",
        heroText: "We are with you on your journey in the digital world.",
        desc: "We are working to provide sustainable and fast service to our customers by providing 360° service with our professional team and solution partners.",
        filter: {
          title: "Filter",
          all: "All",
          webDesign: "Web Design",
          webDevelopment: "Web Development",
          corporate: "Corporate Identity",
        },
      },
      singleWork: {
        brief: "The Brief",
        detail: {
          industry: "INDUSTRY",
          location: "LOCATION",
          involvement: "INVOLVEMENT",
          visit: "VISIT",
        },
        related: "Related Projects",
      },
      notFound: {
        desc: "Not Found!",
        button: "BACK TO HOME PAGE",
      },
      applyModal: {
        title: "Apply now for {{role}}!",
        contact: "Let's contact us!",
      },
      startProjectModal: {
        title: "Let us help you get started with your new project!",
        contact: "Let's contact us!",
      },
      contactLayout: {
        name: "Name",
        surname: "Surname",
        mail: "Email",
        subject: "Subject",
        message: "Message",
        submit: "SUBMIT",
      },
    },
  },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  // resources,
  fallbackLng: "tr-TR",
});

export default i18n;
