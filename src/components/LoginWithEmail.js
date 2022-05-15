import React from "react";
import { useContext,useEffect, useState, } from "react";
import {useHistory} from 'react-router-dom'
import {UserContext} from '../Context/UserContext'


import { Link } from 'react-router-dom';
import { auth } from "../firebase.config";
import { AuthContext } from "../Context/AuthContext";

const LoginWithEmail = () => {

    const [emailid, setemailid] = useState('')
    const [password, setpassword] = useState('')
    const cont = useContext(UserContext)
    const auth = useContext(AuthContext)
    const history  = useHistory();

    const auths = (e)=>{
        console.log(e.target.value)
        e.target.name === 'email' ? setemailid(e.target.value) : setpassword(e.target.value)
    }

    const onSubmit = async (e)=>{

        e.preventDefault();
        const result = await cont.login(emailid,password)
        console.log("result login = ",result.user.uid)
        if(result.user.uid !== null)
        {
            history.push('/')
        }

    }
    
    
    return( 
        <>
    <h1 className="loginheading">Login Form</h1> 
    <div className="alignment">
        <div className="leftdiv">
        <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"/>
        </div>
    <div>
                <div className="cont">
                    <div className="loginform logincss">
         
                        <form>
                        <p>Email-id</p>
                        <input type="text" onChange={auths} name="email" placeholder="email" required/>
                        <p>Password</p>
                        <input type="password" onChange={auths}  placeholder="password" required/>
                        <p>Forgot Password?</p>
                        <button type="submit" onClick={onSubmit} className="submitbtn">Login</button>
                        <p className="centertxt">Don't have Registered yet?<Link to="/Register">register</Link></p>
                        </form>

                </div>
            </div>
    </div>
    </div>
    </>

    );

   }
   export default LoginWithEmail;