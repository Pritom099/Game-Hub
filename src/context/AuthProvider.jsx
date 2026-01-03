import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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

    const sendEmailVerificationFunc = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser);
    };

    const signInWithEmailAndPasswordFunc = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const signInWithEmailFunc = () => {
        setLoading(true)
        return signInWithPopup(auth, googleprovider)
    };

    const signInWithGithubFunc = () => {
        setLoading(true)
        return signInWithPopup(auth, githubprovider)
    };

    const signoutUserFunc = () => {
        setLoading(true)
        return signOut(auth)
    };
    const sendPassResetEmailFunc = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

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
        sendEmailVerificationFunc,
        sendPassResetEmailFunc,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])


    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;