import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserWithEmailAndPasswordFunc = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateProfileFunc = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL,
        });
    };

    const signInWithEmailAndPasswordFunc = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const signInWithEmailFunc = () => {
        return signInWithPopup(auth, googleprovider)
    };

    const signInWithGithubFunc = () => {
        return signInWithPopup(auth, githubprovider)
    };

     const signoutUserFunc = () => {
        setLoading(true)
        return signOut(auth)
    };

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUserWithEmailAndPasswordFunc,
        signInWithEmailAndPasswordFunc,
        signInWithEmailFunc,
        signInWithGithubFunc,
        signoutUserFunc,
        updateProfileFunc, 
    }


    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;