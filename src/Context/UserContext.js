import {createContext, useState,useEffect} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';

import {auth} from '../firebase.config'

const UserContext = createContext();

const UserState = (props)=>{
    const [user, setuser] = useState(null)
    const [loggedin,  setloggedin] = useState(false)

    const signup = (email,password)=>{
       return  createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email, password)=>{
        setloggedin(true)
        return signInWithEmailAndPassword(auth , email, password)
    }

    const logout = async ()=>{
        setloggedin(false)
        await setuser(null)
        return (
            signOut(auth)
        )
    }
    
    
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentstate)=>{

            setuser(currentstate)
        })
    
      return () => {
        unsubscribe();
      }
    })
    
      
    


    return (
        <UserContext.Provider value={{user , signup, login, logout}}> {props.children} </UserContext.Provider>
    )
}

export {UserState, UserContext}