import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Formulario from './Formulario'
import Card from '../components/posts/card';

    const Catalogo = () => {
        const [products, setProducts] = useState([]);
        const [showModalSeller, setShowModalSeller] = useState(false);

        const openModalSeller = () => {
            setShowModalSeller(true);
        };

        const closeModalSeller = () => {
            setShowModalSeller(false);
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
            <><div>
                <Header />
                <div class="relative">
                <div className="flex justify-center text-7xl tracking-wide underline decoration-yellow-500">
                    <h1>Catálogo</h1>
                </div><br/>
                <div class="flex flex-wrap justify-center">
                <div className="grid grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Card key={product.key} product={product} />
                    ))}
                    </div>
                    </div>
                    < button 
                        className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full absolute bottom-2 right-4" 
                        style={{ position: 'fixed' }} onClick={openModalSeller}
                    >
                        Vender ahora 
                    </ button>
                </div>
                </div>
                {showModalSeller && (
                    <div className="fixed z-10 inset-0">
                        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div
                                className="absolute inset-0 transition-opacity "
                                
                            >
                             <div className="fixed inset-0 overflow-y-scroll" aria-hidden="true" >   
                                <div className="absolute inset-0 bg-gray-500 opacity-75">
                                </div>
                                <div
                                className="inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                role="dialog"
                                aria-modal="true"
                                    aria-labelledby="modal-headline"
                            >
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <Formulario closeModal={closeModalSeller} />
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-500 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={closeModalSeller}
                                    >
                                        Salir
                                        </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )}
                </>
        );
    };

        export default Catalogo;
