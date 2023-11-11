import { useState, useEffect } from 'react';
import Logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
import { Button, Modal } from 'antd';
import LoginForm from "./Login/LoginForm";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);


  const showModal = () => {
    setOpen(true);
  };

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

  return (

    
    <header className="flex pb-20 mt-4 px-8 justify-between">
      <Link to="/"><img src={Logo} alt="Logo Modso" className="rounded-full max-md:w-32 max-md:h-32" /></Link>

      <nav>
        <ul
          className="flex max-md:flex-col justify-center items-center text-xl uppercase 
          gap-4 md:gap-16"
        >
          <Link to="/" >
            <li className="font-bold">Home</li>
          </Link>
          {/*<li>Productos</li>
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
  );
};

export default Header;