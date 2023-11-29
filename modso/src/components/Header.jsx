import { useState, useEffect } from 'react';
import Logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
import { Button, Modal } from 'antd';
import LoginForm from "./Login/LoginForm";
import createKey from "../../node_modules/.vite/deps/react-router-dom.js";

// Se importan las librerias necesarias para el funcionamiento de la pagina
// y se importan los componentes necesarios para el funcionamiento de la pagina

// El header se utiliza en todas las paginas
// de la app, lo que permite un manejo facil de
// la navegacion entre paginas

const Header = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const loggedUser = localStorage.getItem('loggedUser');
  function refreshPage() {
    window.location.reload(false);
  }
// Define el usuario ingresado en la pagina
// y permite que se cierre sesion

  const showModal = () => {
    setOpen(true);
  };
  const handleOnClick = () => {
    localStorage.clear();
    localStorage.setItem(react-router-DOME.createKey()))
    refreshPage();

  }
// En caso de que no este iniciado sesion
// Crea un modal para que el usuario pueda
// iniciar sesion

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

// handler de la ventana modal, para que se abra y cierre

  return (
    loggedUser != null ?
      (

    // Boton logo, que tambine lleva a la pagina de inicio 
    // de la aplicacion

    // Ademas, se tiene el boton de home, para 
    //simplificar lo antes hecho por el logo
    // y se tiene el boton de ver catalogo, que
    // lleva a la pagina de catalogo
    // Finalmente, se lleva al boton de formulario de inicio de sesion
    // o de cerrar sesion, dependiendo de si el usuario esta o no
    // loggeado

    <header className="flex pb-20 mt-4 px-8 justify-between">
      <Link to="/"><img src={Logo} alt="Logo Modso" className="rounded-full max-md:w-32 max-md:h-32" /></Link>

      <nav>
        <ul
          className="flex max-md:flex-col justify-center items-center text-xl uppercase 
          gap-4 md:gap-16"
        >
          
          <button onClick={handleOnClick}>Log out</button>
          
          <Link to="/catalogo">
            <button
              className="bg-primary-500 px-6 py-4 rounded-full
            text-2xl text-white uppercase transition
             hover:bg-primary-400 hover:scale-95
             active:bg-primary-700"
            >
              Ver catalogo
            </button></Link>
          
           
        </ul>
        
        <Modal
          centered
        
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={[]}
        >
          {/* <br/><LoginForm closeModal={() => showModal(false)} /> */}
        </Modal>
      </nav>
    </header>
      // En caso de que el usuario este loggeado
      // se muestra el logo, el boton de home, el boton de ver catalogo y cerrar sesion
      // de lo contrario, se muestra el logo, el boton de home, el boton de catalogo y el boton del modal de formulario de inicio de sesion
  
      ) : (
      // A partir de ahora, esta el estilizador de los botones
      // Anteriormente definidos
      // y explicados
    <header className="flex pb-20 mt-4 px-8 justify-between">
      <Link to="/"><img src={Logo} alt="Logo Modso" className="rounded-full max-md:w-32 max-md:h-32" /></Link>

      <nav>
        <ul
          className="flex max-md:flex-col justify-center items-center text-xl uppercase 
          gap-4 md:gap-16"
        >
          {/*<Link to="/" >
            <li className="font-bold">Home</li>
          </Link>
          <li>Productos</li>
          <li>Login</li>*/}

          <Link to="/catalogo">
            <button
              className="bg-primary-500 px-6 py-4 rounded-full
            text-2xl text-white uppercase transition
             hover:bg-primary-400 hover:scale-95
             active:bg-primary-700"
            >
              Ver catalogo
            </button></Link>
          
            <button onClick={showModal}
              className="bg-primary-500 px-6 py-4 rounded-full
            text-2xl text-white uppercase transition
             hover:bg-primary-400 hover:scale-95
             active:bg-primary-700"
            >
              Iniciar Sesion
            </button>
        </ul>
        <Modal
          centered
        
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={[]}
        >
          <br/><LoginForm closeModal={() => showModal(false)} />
        </Modal>
      </nav>
    </header>
      )
  );
}; 

// Se exporta el header para que se pueda usar en todas las paginas

export default Header;