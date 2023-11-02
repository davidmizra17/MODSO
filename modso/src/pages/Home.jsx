import Header from "../components/Header";
import Categories from "../components/landing/Categories";
import Contact from "../components/landing/Contact";
import Hero from "../components/landing/Hero";
import Brands from "../components/landing/Brands";


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
