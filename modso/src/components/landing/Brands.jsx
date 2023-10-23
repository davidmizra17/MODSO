import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import chanelLogo from "../../assets/images/brands/chanel.webp";
import gucciLogo from "../../assets/images/brands/gucci.webp";
import hmLogo from "../../assets/images/brands/h&m.png";
import levisLogo from "../../assets/images/brands/levis.webp";
import zaraLogo from "../../assets/images/brands/zara.webp";

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

  return (
    <section>
      <h1 className="text-center font-bold text-3xl mb-8">Marcas</h1>
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
        className="hola"
      >
        {brands}
      </Swiper>
      ;
    </section>
  );
}
