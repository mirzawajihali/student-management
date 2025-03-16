import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';




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

   const authInfo = {
    user,
    setUser,
    loading,
    RegisterWithGoogle,
    createUser,
    loginUser

  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
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