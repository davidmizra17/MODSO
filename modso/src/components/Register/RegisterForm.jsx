import React, { useState, useContext } from 'react'
import { auth, db } from '../../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../../context/userContext';
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';

const RegisterForm = () => {
  
  
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword,] = useState('');
  const [newUser, setNewUser] = useState({

    name: '',
    email: '',
    // phoneNumber: '',
    password: '',
    confirmPassword: ''

  });
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const { createUser } = useContext(UserContext);

function refreshPage() {
        window.location.reload(false);
      }
  const handleSubmit = async(e) => {
    // if (password == confirmPassword) {
    e.preventDefault();
    try {
      
      // const { name, email, phoneNumber, password, consetNewUser({ name: name, email: email, password: password, confirmPassword: confirmPassword });firmPassword } = newUser;
      setNewUser({
        name,
        email,
        // phoneNumber,
        password,
        confirmPassword,
      });
    
      


      const colRef = collection(db, 'users')
    
      const createUser = async () => {
        await addDoc(colRef, {
          name: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword
        })
      }
      createUser();
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(response.user.uid);
   
      const loggedUser = {
     
        name: name,
        email: email,
        password: password
      }


      localStorage.setItem('loggedUser', JSON.stringify(loggedUser));

      navigate('/');
      refreshPage();

      // await createUser(
      //   {
      //     name: name,
      //     email: email,
      //   }
      // );

      // }
    } catch (error) {
      console.log(error);
    }
  }

    
  return (
    <div>
      <form onSubmit={handleSubmit}>
         <div className="flex justify-center text-3xl font-bold tracking-wide">
        <p>Registrate</p>
        </div>
        <br/><TextField
                className="mt-5 border-2 w-full p-2 placeholder-gray-400 rounded-md"
                name="name"
                // id={styles.email}
                type="text"
          
          label="Nombre"
                value={name}
                onChange={e => setName(e.target.value)}
              /><br/><br/>
        
      <TextField
                className="mt-5 border-2 w-full p-2 placeholder-gray-400 rounded-md"
                name="email"
                // id={styles.email}
                type="text"
          
          label="Correo electrónico"
                value={email}
                onChange={e => setEmail(e.target.value)}
              /><br/><br/>

              <TextField
                className="mt-5 border-2 w-full p-2 placeholder-gray-400 rounded-md"
                name="password"
                // id={styles.password}
                type="password"
          
          label="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
        /><br/><br/>
              <TextField
                className="mt-5 border-2 w-full p-2 placeholder-gray-400 rounded-md"
                name="confirmPassword"
                // id={styles.password}
                type="password"
          
          label="Confirmar contraseña"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
        />
        
         <button
                className="mt-5 border-2 w-full bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full"
                type="submit"
                onClick={handleSubmit}
              >
                {" "}
                Continuar{" "}
        </button>
      </ form>
    </ div>
    
  )
}

export default RegisterForm