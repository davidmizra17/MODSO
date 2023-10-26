import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore'
import { useEffect } from 'react';
import Header from '../components/Header';

const Catalogo = () => {
    //data fetch
    useEffect(() => {
        
        (async () => {
            
            
            const colRef = collection(db, 'Products')
            
            const snapshots = await getDocs(colRef)

            const docs = snapshots.docs.map( doc => doc.data())

            console.log(docs)
        })()
        
    },[])
    return (
        <div>
            <Header />
            <h1>Catalogo</h1>
            <p>Aqui se deberia de mostrar el catalogo</p>
        </div>
    );
};

export default Catalogo;
