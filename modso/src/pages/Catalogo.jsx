import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button, Modal } from 'antd';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Skeleton } from '@mui/material';
import Header from '../components/Header';
import Formulario from './Formulario'
import Contact from '../components/landing/Contact';
import Post from '../components/posts/post';

// Se importan las librerias necesarias para el funcionamiento de la pagina
// y se importan los componentes necesarios para el funcionamiento de la pagina
// como el header, el formulario, el post y el modal

    const Catalogo = () => {
        const [products, setProducts] = useState([]);
        const [isImageLoaded, setIsImageLoaded] = useState(false);
        const [open, setOpen] = useState(false);
        const [confirmLoading, setConfirmLoading] = useState(false);

        const loggedUser = localStorage.getItem('loggedUser');

// Se crea el estado de la ventana modal, para que se abra y cierre
// manejando el catalogo 
// hace un proceso de carga, para que el usuario no se desespere

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

// handler de la ventana modal, para que se abra y cierre
// cuando el usuario lo desee

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

        useEffect(() => {
            const fetchProducts = async () => {
                const colRef = collection(db, 'Products');
                const snapshots = await getDocs(colRef);
                const docs = snapshots.docs.map((doc) => doc.data());
                setProducts(docs);
            };
            fetchProducts(); 
        }, []);
//Aca se hace el llamado a la base de datos para traer los productos
//y se les muestra en el catalogo

        return (
            loggedUser != null ? (
            <div>
                <Header />
                <div className="relative">
                    <div className="flex justify-center text-7xl tracking-wide">
                        <h1>Catálogo</h1>
                    </div><br />
                    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }} class="flex flex-wrap justify-center px-20" >
                        <ImageList variant="masonry" cols={6} gap={8}>
                            {products.map((product) => (
                                <ImageListItem key={product.key} product={product} className="relative group">
                
                                    <Post key={product.key}  product={product} onLoad={() => setIsImageLoaded(true)} hidden={!isImageLoaded} />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        < button
                            className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full absolute bottom-2 right-4"
                            style={{ position: 'fixed' }} onClick={showModal}
                        >
                            Vender ahora
                        </ button>
                    </Box>
                </div>

                <Modal
                    centered
        // Arriba no deja comentar, pero
        // Es para centrar el modal de cada producto, una vez creada la lista
        // y que el usuario lo seleccione
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    footer={[]}
      >
        <Formulario closeModal={() => showModal(false)} />
      </Modal>
                <Contact />
            </div> 

// Se crea el modal para que el usuario pueda vender un producto
// y se le muestra el catalogo de productos

            ) : (
                <div>
                <Header />
                <div className="relative">
                    <div className="flex justify-center text-7xl tracking-wide font-serif">
                        <h1>Catálogo</h1>
                    </div><br />
                    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }} class="flex flex-wrap justify-center px-20">
                        <ImageList variant="masonry" cols={6} gap={8}>
                            {products.map((product) => (
                                <ImageListItem key={product.key} product={product} className="relative group" >
                
                                    <Post key={product.key} product={product} onLoad={() => setIsImageLoaded(true)} hidden={!isImageLoaded} />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        < button
                            className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full absolute bottom-2 right-4"
                            style={{ position: 'fixed' }} onClick={showModal}
                        >
                            Vender ahora
                        </ button>
                    </Box>
                </div>
                <Modal
                    centered

// Maneja el modal de cada producto, una vez creado el catalogo
// para que el usuario pueda vender un producto
// llenando el formulario

        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    footer={[]}
      >
        <Formulario closeModal={() => showModal(false)} />
      </Modal>

                </div>
                )
            
        );
};

      <Contact />

// Se exporta el catalogo para que se pueda usar en otras paginas

export default Catalogo;
        

