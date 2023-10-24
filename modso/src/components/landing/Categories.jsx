import React from "react";
import womanImg from "../../assets/images/categories/woman.png";
import manImg from "../../assets/images/categories/man.png";
import childrenImg from "../../assets/images/categories/children.png";
import { Link } from "react-router-dom";


export default function Categories() {
  const categories = [
    {
      name: "Mujer",
      imgSrc: womanImg,
    },
    {
      name: "Hombre",
      imgSrc: manImg,
    },
    {
      name: "Niños",
      imgSrc: childrenImg,
    },
  ].map((category) => (
    <article key={category.name}>
      <img
        src={category.imgSrc}
        alt={category.name}
        className="rounded-full h-64 w-64 object-cover"
      />
      <h2 className="text-center font-bold text-2xl uppercase">
        {category.name}
      </h2>
    </article>
  ));

  return (
    <section className="bg-secondary-100 p-8">
      <h1 className="text-center font-bold text-3xl pt-4 mb-8">Categorías</h1>
      <Link to="/catalogo">
      <main
        className="py-4 md:px-4 bg-primary-200 rounded-md
          flex max-md:flex-col gap-4 items-center justify-around"
      >
        {categories}
      </main></Link>
    </section>
  );
}
