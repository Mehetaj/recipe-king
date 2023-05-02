import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signIn = (email , password) => {
        return signInWithEmailAndPassword(auth , email, password)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
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
        resetPassword
    }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;