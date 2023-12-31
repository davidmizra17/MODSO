import { useState, useEffect, createContext } from 'react';
import { auth, db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore'
 

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) { 
  const [user, setUser] = useState('');

  useEffect(() => {
    
    const storedUser = localStorage.getItem('loggedUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);
  
  console.log(user.email)
  console.log(user)
    // useEffect(() => {
    //     const fetchUser = async () => {
                
    //             const colRef = collection(db, 'users');
    //             const snapshots = await getDocs(colRef);
    //             const docs = snapshots.docs.map((doc) => doc.data());
    //             setUser(docs);
    //         console.log(docs)
            
    //         };
    //         fetchUser(); 
    //     }, []);

    
        
  
  
    // const getUserByEmail = async (email) => {
    //   const usersReference = db.collection('users');
    //   const snapshot = await usersReference.where('email', '==', email).get();
  
    //   if (!snapshot.size) return null;


    // //   const loggedUser = getFirstElementArrayCollection(snapshot);

    // //   return loggedUser;
    // };
    return (
        <UserContext.Provider
          value={{
            user,
            setUser,
          }}
        >
          {children}
        </UserContext.Provider>
    )
}