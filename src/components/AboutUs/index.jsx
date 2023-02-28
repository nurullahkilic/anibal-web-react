import { Link } from "react-router-dom";
import Button from "../../shared/Button";
import { Container, TextContent, BgTitle, SideText } from "./styles";

const AboutUs = () => {
  return (
    <Container>
      <TextContent>
        <BgTitle>Hakkımızda</BgTitle>
        <SideText>
          <p>
            Bilgi çağından dijital çağa geçerken firmalar için dijitalleşmek
            artık bir zorunluluk haline gelmiştir. Bu dönüşüm doğru yönetilmez
            ve çağın gerekliliklerine uygun olarak dijital dönüşüm sağlanmazsa
            bu faydadan ziyade zarara yol açabilir.
          </p>
          <p>
            Dijital dönüşümü doğru yöneterek firmanızı bu yeni çağa taşımak için
            Anibal Bilişim yanınızda. Kadim bir birikimin üzerine yenilikçi
            fikirler inşa ederek teknolojinin insanlığa faydalı kullanılması
            amacıyla kurulan Anibal Bilişim, dijital çağın oyun kurucu
            unsurlarından biri olma yolunda ilerlemektedir.
          </p>
          <p>
            Sektör bazlı analizler, doğru teşhisler ve reçeteler, dijital
            dünyada firmanızı ileri taşıyacak çözümler üreterek ulusal ve
            uluslararası arenada firmanızı dijital dünyaya taşıyoruz. İnsana ve
            topluma faydalı içerikler üreterek dijital dönüşüm sürecinde insan
            merkezli bir anlayış ile hizmet veriyoruz.
          </p>
        </SideText>
      </TextContent>
      <Button to={"/services"} isBackWhite={true} as={Link}>
        TÜM HİZMETLERİ GÖRÜNTÜLE
      </Button>
    </Container>
  );
};

export default AboutUs;
