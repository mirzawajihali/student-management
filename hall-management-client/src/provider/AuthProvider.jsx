import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';
import axios from 'axios';




export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const GoogleProvider =  new GoogleAuthProvider();

   const RegisterWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
   }

   const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
   }

   const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
   }

   const logout = () => {
    setLoading(true);
    return signOut(auth);
   }

   const authInfo = {
    user,
    setUser,
    loading,
    RegisterWithGoogle,
    createUser,
    loginUser,
    logout

  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
      if(currentUser?.email){
        const user ={
          email : currentUser.email
      }
      axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
      .then(res =>{console.log(res.data)
        setLoading(false);
      })
      }

      else{
        axios.post('http://localhost:5000/logout', {}, {withCredentials: true})
        .then(res =>{
          setLoading(false);
          console.log('logged out', res.data)
        })
      }
   
  
    });

    return () => {
      unsubscribed();
    };
  }, []);

    return (
      
             <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
      
    );
};

export default AuthProvider;