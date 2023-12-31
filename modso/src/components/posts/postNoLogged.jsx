import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Image, Modal, Card, Button } from 'antd';
import { addDoc, setDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { UserContext } from '../../context/userContext';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';



const PostNoLogeado = ({ product }) => {
    
    
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [compras, setCompras] = useState([]);
    const [test, setTest] = useState('');

    const { user, setUser } = useContext(UserContext);

      const handleOpen = () => {
    
          setOpen(true);
  };
  
    const handleClose = () => {
    
        setOpen(false);
  };

  

    const handleOnClick = async () => {
    // Update the compra object
    
    const updatedCompra = {
    
        vendedor: product.contactName,
        telefono: product.contactNumber,
        costo: product.price,
    };
        
        // console.log(updatedCompra);
        setTest('hello');
        const prueba = "hola";
        setCompras([...compras, updatedCompra]);
        
        const userEmail = user.email;

        const encodedEmail = encodeURIComponent(userEmail);

        // const ref = collection(db, 'users', "D22nFLwVIETYRiYGIt6j");
        const userId = "D22nFLwVIETYRiYGIt6j";
        const ref = doc(db, 'users', userId);

        const addSale = async () => {
            // setDoc(cityRef, { capital: true }, { merge: true });
            await setDoc(ref, { compras: [...compras, updatedCompra] }, { merge: true });
        }
        addSale();
         
    //     const createUser = async () => {
      
    //         await addDoc(colRef, {
        
    //             name: name,
    //             email: email,
    //             password: password,
    //             confirmPassword: confirmPassword
    //     })
    // }

        console.log(compras);
//               setCompras((prevCompras) => {
    
//                   const newCompras = [...prevCompras, updatedCompra];
//                   console.log(newCompras);
//                   return newCompras;
//   });
        // setCompras([...compras, updatedCompra]);
        // console.log(compras[0]);
    // setCompras((prevCompras) => [...prevCompras, updatedCompra]);



  setOpen2(false);
};

        return (
            <>
                <img
                srcSet={`${product.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${product.img}?w=248&fit=crop&auto=format`}
                alt={product.item}
                loading="lazy"
                className="static rounded-2xl shadow-lg" />
                <a className='invisible transition cursor-pointer group-hover:visible bg-opacity-60 rounded-2xl bg-black absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white'
                    onClick={handleOpen}>Abrir</a>
                <Modal
                        className=""
                        centered
                    open={open}
                        onOk={() => setOpen(false)}
                        onCancel={() => setOpen(false)}
                    width={1000}
                    footer={[]}
                >
                        <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            
                            <Grid xs={6} md={8}>
                                <Card>
                                <div className="flex items-center justify-center">
                                    {/* Cambiar el height para responsive*/}
                                        <Image
                            srcSet={product.img}
                            src={product.img}
                            alt={product.item}
                           
                                            height={500}
                                            objectFit="contain"

                        loading="lazy"
                                /></div></Card>
                                </Grid>
                                
                            <Grid xs={6} md={4}>
                                <br />
                                <br />
                                <Card>
                                    <p className='text-lg font-semibold tracking-normal'>{product.item}</p>
                                    <button className='italic absolute right-4 text-md font-light cursor-default bg-primary-200 rounded-full p-2 '>{product.categoria}</button>
                                    <br/><br/>
                    <p className='text-3xl font-extralight tracking-wide'>US $ {product.price}</p>
                                    
                                    <br /><div className='flex justify-center'>
                                        <button className='bg-primary-500 w-full p-3 rounded-full text-white font-bold hover:bg-primary-700 cursor-pointer transition-all' onClick={() => setOpen2(true)}>
                        Para ver la informacion del vendedor debe iniciar sesion
                
                    </button>
                                
                                        </div>
                                    </Card>
        </Grid>
                            </Grid>
                        </Box>
                    
                    
                </Modal></>
        );
    }

            export default PostNoLogeado;