import Logo from "../assets/images/logo.webp";

export default function Header() {
  return (
    <header className="flex pb-20 mt-4 px-8 justify-between">
      <img src={Logo} alt="Logo Modso" className="rounded-full max-md:w-32 max-md:h-32" />

      <nav>
        <ul
          className="flex max-md:flex-col justify-center items-center text-xl uppercase 
          gap-4 md:gap-16"
        >
          <li className="font-bold">Home</li>
          <li>Productos</li>
          <li>Login</li>

          <button
            className="bg-primary-500 px-6 py-4 rounded-full
            text-2xl text-white uppercase transition
             hover:bg-primary-400 hover:scale-95
             active:bg-primary-700"
          >
            Regístrate
          </button>
        </ul>
      </nav>
    </header>
  );
}
