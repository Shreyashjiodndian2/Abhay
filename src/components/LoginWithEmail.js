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
            history.push('/Home');
        }

    }
    
    
    return( 
        <>
        <div className="authbox1">
    <h1 className="loginheading">Login </h1> 
    <div className="alignment">
        <div className="leftdiv">
        <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"/>
        </div>
    <div>
                <div className="cont">
                    <div className="loginform logincss">
         
                        <form className="formcss">
                      
                        <br/><br/>
                        <input type="text" onChange={auths} name="email" placeholder="Email" required/>
                  <br/><br/><br/>
                        <input type="password" onChange={auths}  placeholder="Password" required/>
                        <p  id="smalltxt">Forgot Password?</p>
                        
                        <div className="centeralglogin">
                        <button type="submit" onClick={onSubmit} className=" logbtn">Login</button>
                        </div>
                        <p id="smalltxt">Don't have Registered yet?<Link to="/Register">Register</Link></p>
                        </form>

                </div>
            </div>
            </div>
    </div>
    </div>
    </>

    );

   }
   export default LoginWithEmail;