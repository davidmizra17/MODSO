import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import chanelLogo from "../../assets/images/brands/chanel.webp";
import gucciLogo from "../../assets/images/brands/gucci.webp";
import hmLogo from "../../assets/images/brands/h&m.png";
import levisLogo from "../../assets/images/brands/levis.webp";
import zaraLogo from "../../assets/images/brands/zara.webp";
import { Link } from "react-router-dom";
// Se importan las librerias necesarias para el funcionamiento de la pagina

// Se crea la seccion de las marcas, que se muestran en el catalogo
// Una banda dinamica que va dando vueltas sobre todos los logos de las marcas utilizadas

export default function Brands() {
  const brands = [
    {
      name: "Chanel",
      imgSrc: chanelLogo,
    },
    {
      name: "Gucci",
      imgSrc: gucciLogo,
    },
    {
      name: "H&M",
      imgSrc: hmLogo,
    },
    {
      name: "Levis",
      imgSrc: levisLogo,
    },
    {
      name: "Zara",
      imgSrc: zaraLogo,
    },
  ].map((brand) => (
    <SwiperSlide key={brand.name} className="self-center  ">
      <img src={brand.imgSrc} alt={brand.name} />
    </SwiperSlide>
  ));
// Se crea el array de las marcas, con sus respectivos logos
// Y se relacionan en los componentes de las marcas con sus logos
// Se crea el slider de las marcas, que se muestran en el catalogo

  return (
    <section>
      <h1 className="text-center font-bold text-3xl mb-8">Marcas</h1>
      <Link to="/catalogo">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={true}
        slidesPerView={3}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        wrapperClass="px-16"
      >
      
        {brands}
      </Swiper>
      </Link>
      ;
    </section>
  );
}
