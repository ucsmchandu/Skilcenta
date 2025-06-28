import React, { Children, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { firestore,auth } from '../server/Firebase'
import { getDoc,doc } from 'firebase/firestore'
import { createContext } from 'react'


export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {
    const [currentUser,setCurrentUser]=useState(null);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,async(user)=>{
            if(user){
                const docRef=await getDoc(doc(firestore,"users",user.uid));
                if(docRef.exists()){
                    setCurrentUser(user);
                }
            }
            else{
                setCurrentUser(null);
            }
            setLoading(false);
        });
        return ()=>unsubscribe();
    },[]);

  return (
    <div>
        <AuthContext.Provider value={{currentUser,loading}}>
            {!loading && children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
export const useAuth=()=>useContext(AuthContext);