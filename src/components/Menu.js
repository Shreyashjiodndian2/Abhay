import react from 'react';
import {useHistory} from 'react-router-dom'
import {UserContext} from '../Context/UserContext'
import {AuthContext} from '../Context/AuthContext'
import { useContext, useState, } from "react";
import {  Link } from 'react-router-dom';
import { auth } from '../firebase.config';

const Menu =() => {

    const cont = useContext(UserContext);
    const auth = useContext(AuthContext);
    console.log("menu", cont.user)

    
    const logginout = async ()=>{

        console.log("loggin out")
        if(window.confirm("do you want to logout??"))
        {
            // auth.logginoutfun();
            await cont.logout();            
        }
    }

	return (
         <nav>
            <div class="logo"><img src="https://lh5.googleusercontent.com/proxy/KRYV0kwz7aohXFtGxkX-gxE46AQB8mvtDINJyCb1WLpRYoJJH3Kntni61R2BwI08rgp1RpGqMzFfLnDDBX8K_DF50jX69WFQIN3VkLWrvLiLd_a4wQ1qOsC40ADmgcK64EA6_DZ4=w1200-h630-p-k-no-nu"/>
            <h2 className='logotext'>RENTAL</h2>
            </div>
            <label for="btn" class="icon">
                <span class="fa fa-bars"></span>
            </label>
            <input className='hide' type="checkbox" id="btn"/>
    
            <ul className='ulclass'>
               <li><Link to="/AddProperty">Post-property</Link></li>
                <li >{cont.user ? <a className='login'  onClick={logginout}>Logout</a> : <a className='login' ><Link to="/Login">Login</Link></a> }</li>
            {/* <img className='usericon' src='https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg'/>
   */} 
            </ul>
        </nav>
		);
}

export default Menu;