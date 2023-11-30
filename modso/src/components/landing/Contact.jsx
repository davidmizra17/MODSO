import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
// Importa

// Banda al final de la pagina de inicio
// Que muestra las redes sociales 
// Y un numero de telefono
// A traves de las cuales se le puede contactar a la empresa
// Y un link a la pagina de preguntas frecuentes

export default function Contact() {
  return (
    <section>
      <h1 className="text-center font-bold text-3xl pt-4 mb-4">Contact</h1>

      <main
        className="bg-primary-100 py-2 px-8
        flex justify-around gap-4 items-center relative"
      >
        
        
        <Link to="https://www.instagram.com/p/Cyeh0bgu22z/" ><AiOutlineInstagram size={86} /></Link>
        {/* TODO - Buscar mejor color */}
        <div className="rounded-md border-4 p-2 border-blue-950">
          <Link to="https://wa.me/584242421040" ><BsWhatsapp size={52} /></Link>
        </div>

        {/* <img
          src={logo}
          alt="Logo Modso"
          className="rounded-full w-16 h-16 ml-auto"
        /> */}
      </main>
    </section>
  );
}
