import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signIn = (email , password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth , email, password)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    },[])

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth , email)
    }

   

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        signIn,
        logOut,
        user,
        resetPassword,
        loading
    }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;