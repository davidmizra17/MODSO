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
import Post from '../components/posts/post';



    const Catalogo = () => {
        const [products, setProducts] = useState([]);
        const [isImageLoaded, setIsImageLoaded] = useState(false);
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


        useEffect(() => {
            const fetchProducts = async () => {
                const colRef = collection(db, 'Products');
                const snapshots = await getDocs(colRef);
                const docs = snapshots.docs.map((doc) => doc.data());
                setProducts(docs);
            };
            fetchProducts(); 
        }, []);

        return (
            <div>
                <Header />
                <div className="relative">
                    <div className="flex justify-center text-7xl tracking-wide">
                        <h1>Catálogo</h1>
                    </div><br />
                    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }} class="flex flex-wrap justify-center px-20">
                        <ImageList variant="masonry" cols={6} gap={8}>
                            {products.map((product) => (
                                <ImageListItem key={product.key} product={product} className="relative group">
                
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

                <Button type="primary" onClick={showModal}>
        
      </Button>
                <Modal
                    centered
        
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    footer={[]}
      >
        <Formulario closeModal={() => showModal(false)} />
      </Modal>

            </div> 
            );
};


export default Catalogo;
        

