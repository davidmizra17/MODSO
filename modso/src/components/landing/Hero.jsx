import womanImage from "../../assets/images/woman.webp";
import wardrobeImage from "../../assets/images/wardrobe.jpg";
import stackImage from "../../assets/images/stack.jpg";

export default function Hero() {
  return (
    <section className="flex max-md:flex-col gap-4 justify-center bg-secondary-100 px-6 pb-16">
      <aside className="sm:pl-16 max-md:mb-4">
        <h1
          className="text-5xl font-bold 
        md:text-6xl  -translate-y-[45%]"
        >
          Moda Sostenible
        </h1>
        <p className="text-lg max-w-prose mb-4 ">
          En Modso, creemos en el poder de la reutilización y el reciclaje, por
          eso te ofrecemos un espacio donde puedes vender y comprar prendas de
          calidad, contribuyendo así a reducir el impacto ambiental de la
          industria de la moda.{" "}
        </p>

        <button
          className="border rounded-lg px-2 py-4 border-primary-700 
          uppercase active:text-white 
          hover:scale-95 active:bg-primary-400 transition"
        >
          Shop Now
        </button>
      </aside>

      <aside
        className="grid gap-2 md:-translate-y-[14%] md:max-w-[40rem] 
          max-md:justify-center max-md:justify-items-center
          grid-cols-[repeat(1,_25rem)] md:grid-cols-[repeat(2,_22rem)] 
          grid-rows-[repeat(1,_30rem)] md:grid-rows-[repeat(2,_15em)]"
      >
        <div
          className="row-span-2 self-center relative 
            star imgStarWoman brownStar"
        >
          <img
            src={womanImage}
            alt="Woman"
            className="h-[30rem] w-full md:w-auto object-cover
              rounded-sm shadow-lg shadow-gray-300"
          />
        </div>
        <img
          src={wardrobeImage}
          alt="wardrobe"
          className="rounded-sm shadow-lg  h-56 w-56 object-cover"
        />

        <div
          className="relative w-44 
            star imgStarStack whiteStar"
        >
          <img
            className="rounded-sm shadow-lg h-44 w-44 object-cover "
            src={stackImage}
            alt="stack"
          />
        </div>
      </aside>
    </section>
  );
}
