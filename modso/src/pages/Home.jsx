import Header from "../components/Header";
import Categories from "../components/landing/Categories";
import Contact from "../components/landing/Contact";
import Hero from "../components/landing/Hero";
import Brands from "../components/landing/Brands";

// Se importan las librerias necesarias para el funcionamiento de la pagina

// Se crea la pagina de inicio de la aplicacion
// Con el header, la parte comenrcial (Hero), las categorias, las marcas
// y el contacto

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Categories />
      <Contact />
    </>
  );
}
