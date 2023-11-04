import React, { useState, useContext } from 'react'
import { auth, db } from '../../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../../context/userContext';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword,] = useState('');


  const { user, setUser } = useContext(UserContext);
  const { createUser } = useContext(UserContext);


  const handleSubmit = async(e) => {
    // if (password == confirmPassword) {
    e.preventDefault();
      const response = await createUserWithEmailAndPassword(
              auth,
              email, 
              password,
          );
    console.log(response.user.uid);


      
      await createUser(
        {
          name: name,
          email: email,
        }
      );

    // }
    
  }

    
  return (
    <div>
      <form onSubmit={handleSubmit}>
         
        <input
                className="mt-5 border-2 w-full p-2 placeholder-gray-400 rounded-md"
                name="name"
                // id={styles.email}
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={e => setName(e.target.value)}
              />
        
      <input
                className="mt-5 border-2 w-full p-2 placeholder-gray-400 rounded-md"
                name="email"
                // id={styles.email}
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <input
                className="mt-5 border-2 w-full p-2 placeholder-gray-400 rounded-md"
                name="password"
                // id={styles.password}
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
        />
              <input
                className="mt-5 border-2 w-full p-2 placeholder-gray-400 rounded-md"
                name="confirmPassword"
                // id={styles.password}
                type="password"
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
        />
        
         <button
                className="mt-5 border-2 w-full p-2 placeholder-gray-400 rounded-md"
                type="submit"
                onClick={handleSubmit}
              >
                {" "}
                Continuar{" "}
        </button>
        <div className='cen'>
         <p> ¿Ya te encuentras registrado? Inicia Sesión  <Link to="/login">aquí</Link></p>
        </div>
      </ form>
    </ div>
    
  )
}

export default RegisterForm