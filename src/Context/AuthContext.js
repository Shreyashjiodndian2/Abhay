import {createContext, useState,useEffect} from 'react';

const AuthContext = createContext();

const AuthState = (props)=>{


    const [loggedin, setloggedin] = useState(false)

    function loggedinfun()
    {
        setloggedin(true)
    }

    function loggedoutfun()
    {
        setloggedin(false)
    }

    return (
        <AuthContext.Provider value={{loggedin, loggedinfun, loggedoutfun}}> {props.children} </AuthContext.Provider>
    )
}

export {AuthState, AuthContext}