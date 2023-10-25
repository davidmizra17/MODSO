import { db, app, addDoc } from "./firebase/config";


const createDoc = async (product) => {
    console.log("hablale andamos en crud")
    const dbRef = collection(db, "Products")
    addDoc(dbRef, product)
}
  

    // const newProduct = {
    //     id: ref.id,
    //     ...product,
    // };
    
    // return newProduct;




export { createDoc };