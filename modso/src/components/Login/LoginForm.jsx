import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/userContext';
import { db, auth } from '../../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore'
import Header from '../Header';

const LoginForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [values, setValues] = useState({
    email: "",
    password:""
  })
  
  
  
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
      // setLoading(false);
      //console.log("LOGIN_PASSWOROD");
      

    }catch(e){
      //console.log(e.code)
      console.log("Usuario o Contraseña invalido, por favor verifique e intente de nuevo.")
      // setLoading(false);
    }
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
              <input
                className="mt-5 border-2 w-full p-2 placeholder-gray-400 rounded-md"
                name="email"
                // id={styles.email}
                type="email"
                placeholder="Correo electrónico"
                value={values.email}
                onChange={handleOnChange}
              />

              <input
                className="mt-5 border-2 w-full p-2 placeholder-gray-400 rounded-md"
                name="password"
                // id={styles.password}
                type="password"
                placeholder="Contraseña"
                value={values.password}
                onChange={handleOnChange}
        />
        
         <button
                className="mt-5 border-2 w-full p-2 placeholder-gray-400 rounded-md"
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

export default LoginForm