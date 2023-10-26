import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Card from '../components/posts/card';

    const Catalogo = () => {
        const [products, setProducts] = useState([]);

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
                <h1>Catalogo</h1>
                <div class="flex flex-wrap justify-center">
                <div className="grid grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Card product={product} />
                    ))}
                    </div>
                    </div>
            </div>
        );
    };

        export default Catalogo;
