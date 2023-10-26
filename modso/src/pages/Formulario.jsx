import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { createDoc } from '../../crud';
import { app, firebaseConfig, db } from '../.././firebase/config.js';
import { doc, setDoc, collection, Timestamp, addDoc } from "firebase/firestore"; 

    

const Formulario = () => {
    const [categoria, setCategoria] = useState('');
    const [contactId, setContactId] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [img, setImg] = useState('');
    const [item, setItem] = useState('');
    const [price, setPrice] = useState('');
    const [postData, setPostData] = useState([]);

    const [error, setError] = useState(false);


    
    const handleSubmit =  async(e) => {
        e.preventDefault();
        
        

        // FORM VALIDATION
        
        
        // setPostData([...postData, objetoPaciente]);
         if ([categoria, contactId, contactName, contactNumber, img, item, price].includes('')) {
            console.log("Hay al menos un campo vacío")
            setError(true);
            return;
         }
        
        const objetoUser = { 
            categoria: categoria,
            contactId: contactId,
            contactName: contactName,
            contactNumber: contactNumber,
            img: img,
            item: item,
            price: price
            
        };
        const colRef = collection(db, 'Products')
        await addDoc(colRef, objetoUser)
        // () => createDoc(objetoUser);
        setError(false);

        //OBJETO USER
        
        // console.log(postData);
        
        

        //REINICIAMOS EL FORM
        setCategoria('')
        setContactId('')
        setContactName('')
        setContactNumber('')
        setImg('')
        setItem('')
        setPrice('')

        
        console.log("enviando form");
    };

    return (
        <div>
            <Header />
            <div className="md:w-1/2 lg:w-2/5 mx-5">
                <h2 className='font-black text-3xl text-center'>
                    Inserte un producto
                </h2>
                <p className='text-xl mt-5 text-center mb-10'>
                    Añade pacientes y {''}
                    <span className='text-brown-600 font-bold'>adminístralos</span>
                </p>
                <form onSubmit={handleSubmit}
                
                    className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' >
                    {/* {error && <Error mensaje='Todos los campos son obligatorios' />} */}
                    
                    <div className='mb-5'>
                        <label htmlFor="name" className='block text-gray-700 uppercase'>
                            Nombre
                        </label>

                        <input
                            id='name'
                            type="text"
                            placeholder='Nombre'
                            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                        />
                    </div>

                    <div className='mt-5'>
                        <label htmlFor="categoria" className='block text-gray-700 uppercase'>
                            Nombre Categoria</label>

                        <input
                            id='categoria'
                            type="text"
                            placeholder='Inserte la categoria del producto'
                            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="item" className='block text-gray-700 uppercase'>
                            Ingrese Producto</label>

                        <input
                            id='item'
                            type="text"
                            placeholder='Descripcion del producto'
                            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                        />
                    </div>

      

                    <div className='mt-5'>
                        <label htmlFor="contactNumber" className='block text-gray-700 uppercase'>
                            Numero telefónico</label>

                        <input
                            name="contactNumber"
                            id="contactNumber"
                            type="text"
                            placeholder='ingerese número telefónico'
                            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                        />
                        
                    </div>
                
                    <div className='mt-5'>
                        <label htmlFor="price" className='block text-gray-700 uppercase'>
                            Precio del Producto</label>

                        <input
                            id='price'
                            type="text"
                            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                
                    <div className='mt-5'>
                        <label htmlFor="img" className='block text-gray-700 uppercase'>
                            Adjunte Foto(s)</label>

                        <input
                            id='img'
                            type="text"
                            className='border-2 w-full p-2 mt-2 mb-5 placeholder-gray-400 rounded-md'
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                        />
                    </div>

                    <div className='mt-5'>
                        <label htmlFor="contactId" className='block text-gray-700 uppercase'>
                            Cedula</label>

                        <input
                            id='contactId'
                            type="text"
                            className='border-2 w-full p-2 mt-2 mb-5 placeholder-gray-400 rounded-md'
                            value={contactId}
                            onChange={(e) => setContactId(e.target.value)}
                        />
                    </div>

                    <input
                        type="submit"
                        className='bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
                        value={'Agregar Producto'}
                    />
                </form>
            </div>
        </div>

    )
            }
  

export default Formulario