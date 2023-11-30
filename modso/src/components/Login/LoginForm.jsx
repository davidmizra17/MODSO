import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/userContext';
import { db, auth } from '../../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore'
import Header from '../Header';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../Register/RegisterForm';
import { Button, Modal } from 'antd';
import TextField from '@mui/material/TextField';

const LoginForm = ({ closeModal }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [error, setError] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [values, setValues] = useState({
    email: "",
    password:""
  })

  const navigate = useNavigate();
  
  
  

  const showModal = () => {
    closeModal();
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
  function refreshPage() {
    window.location.reload(false);
  }
  
  function deleteIndexedDB() {
    const DB_NAME = 'firebaseLocalStorageDb'; // Reemplaza esto con el nombre de tu base de datos

    const request = window.indexedDB.deleteDatabase(DB_NAME);

    request.onerror = function(event) {
      console.log("Error al eliminar la base de datos.");
    };

    request.onsuccess = function(event) {
      console.log("Base de datos eliminada con éxito.");
    };
  }

  const handleOnChange = (e) => {
    const { value, name: inputName } = e.target;
    // //console.log({ inputName, value });
    setValues({ ...values, [inputName]: value });
    console.log(values.email)
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    // setLoading(true)
    try {
      
      await signInWithEmailAndPassword(auth, values.email, values.password);
      console.log("successfully logged in mf")
      const  loggedUser  = values;
      localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
      // setLoading(false);
      //console.log("LOGIN_PASSWOROD");
      deleteIndexedDB()
      refreshPage();
      navigate('/');
      setOpen(false)
      
      

    }catch(e){
      //console.log(e.code)
      console.log("Usuario o Contraseña invalido, por favor verifique e intente de nuevo.")
      setError(true);
      // setLoading(false);
    }
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center text-3xl font-bold tracking-wide">
        <p>Iniciar Sesion</p>
        </div>
         { error && <p className='text-red-500 text-center font-bold tracking-wide'><br/>Usuario o Contraseña invalido, por favor verifique e intente de nuevo.</p> }
          <br />
        <TextField
                className="mt-5 border-2 w-full p-2 placeholder-gray-400 rounded-md error"
                name="email"
                // id={styles.email}
                type="email"
          defaultValue="Correo electrónico"
          label="Correo electrónico"
                value={values.email}
                onChange={handleOnChange}
                error={error ? true : false}
              />
            <br/><br/>
              <TextField
                className="mt-5 border-2 w-full p-2 placeholder-gray-400 rounded-md"
                name="password"
                // id={styles.password}
          type="password"
          label="Contraseña"
                defaultValue="Contraseña"
                value={values.password}
                onChange={handleOnChange}
                error={error ? true : false}
        />
        <button
                className="mt-5 border-2 w-full bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full"
                type="submit"
                onClick={handleSubmit}
              >
                {" "}
                Continuar{" "}
        </button>
        <div >
         <a className='hover:text-black cursor-default'> ¿No te encuentras registrado? </a> <a className='hover:text-primary-500' onClick={showModal} >Regístrate aquí</a>
        </div>
      </ form>
     
      <Modal
          centered
        
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={[]}
        >
        <br /><RegisterForm
          closeModal2={() => showModal(false)}
          

        />
        </Modal>
    </ div>
  )
}

export default LoginForm