import React from 'react';
import { useState } from 'react';
import { Image, Modal, Card, Button } from 'antd';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

function ChildModal() {
    const [open, setOpen] = useState(false);

  return (
        <>
      
    </>
  );
}

const Post = ({ product }) => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    
      const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

        return (
        
            <><img
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
                    <p className='text-3xl font-extralight tracking-wide'>U$S {product.price}</p>
                                    
                                    <br /><div className='flex justify-center'>
                                        <button className='bg-primary-500 w-full p-3 rounded-full text-white font-bold hover:bg-primary-700 cursor-pointer transition-all' onClick={() => setOpen2(true)}>
                        Comprar
                
                    </button>
      <Modal title="Informacion del Vendedor" centered open={open2}
                        onOk={() => setOpen2(false)}
              onCancel={() => setOpen2(false)}
          footer={[<button key='none' className='bg-primary-500 p-3 rounded-full text-white font-bold hover:bg-primary-700 cursor-pointer transition-all' onClick={() => setOpen2(false)}>
                        Cerrar
                
                                            </button>]}>
                                            <br />
                                            <div className=''>
                                            <a className='font-bold'> Vendedor: </a><a>{product.contactName}</a><br />
                                            <a className='font-bold'> Telefono: </a><a>{product.contactNumber}</a><br /><br />
                                                <a className='font-bold'> Costo U$S: </a><a>{product.price}</a><br />
                                                </div>
      </Modal>
                                
                                        </div>
                                    </Card>
        </Grid>
                            </Grid>
                        </Box>
                    
                    
                </Modal></>
        );
    }

            export default Post;