import { createContext, useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail
} from 'firebase/auth';

import { auth } from '../firebase.config'

const UserContext = createContext();



const UserState = (props) => {
    const [user, setuser] = useState(null)
    const [loggedin, setloggedin] = useState(false)

    const signup = (email, password) => {
        const newUserCredentials = createUserWithEmailAndPassword(auth, email, password);
        newUserCredentials.then((cred) => {
            sendEmailVerification(cred.user).then(() => {
                console.log('email sent')
            }
            ).catch((err) => {
                console.log(err)
            }
            )
            console.log('User created successfully');
        }).catch(error => {
            console.log('Error creating user:', error);
        });
        return newUserCredentials;
    }

    const login = (email, password) => {
        setloggedin(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        setloggedin(false)
        await setuser(null)
        return (
            signOut(auth)
        )
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentstate) => {

            setuser(currentstate)
        })

        return () => {
            unsubscribe();
        }
    })





    return (
        <UserContext.Provider value={{ user, signup, login, logout }}> {props.children} </UserContext.Provider>
    )
}

function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email);
}

export { UserState, UserContext }