import {React , useState} from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import {useHistory} from 'react-router-dom'
import UserOperations from "../Service/Operation";


const Register = () => {

    const [emailid, setemailid] = useState('')
    const [password, setpassword] = useState('')
    const [obj, setobj] = useState({First : "", Last: ''})
    const cont = useContext(UserContext);
    const history = useHistory();

    const userauth  = (e)=>
    {
        // console.log(e.target.name)
        e.target.name === 'email' ? setemailid(e.target.value) : setpassword(e.target.value)
    }

    const userextra = (e)=>
    {
        // console.log(e.target.value)
        setobj({...obj , [e.target.name]: e.target.value})
        // console.log(obj)
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        // console.log("submitting")
        try
        {
            var result = await cont.signup(emailid,password)
            // console.log("result = ",result.user.uid)
            // obj.userid = result.user.uid
            var current  = await UserOperations.add(obj,
                result.user.uid)
            // console.log("cont.user.uid",current.firestore._firestoreClient.user)
            await cont.logout();
            history.push('/Login')

        }
        catch(error)
        {
            console.log(error)
        }
        console.log(emailid , password , obj)
    }




    
    return( 
        <>
        <div className="authbox2">
          <h1 className="loginheading">Register </h1> 
    <div className="alignment">
        <div className="leftdiv">
        <img src="https://martechmasons.com/wp-content/uploads/2020/06/Group-9349-400x469.png"/>
        </div>
    <div>
                <div className="cont">
                    <div className="loginform registercss">
                  
                        <form className="formcss">
                        
                       
                        <br/><br/>
                        <input id="exception" type="text" name="email" onChange={userauth} placeholder="Email" required/>
                       <br/><br/>
                       <div className="names">
                           <div>
                        <input type="text" name="firstname" onChange={userextra} placeholder="Firstname" required/>
                        </div>
                        <div>                 
             <input type="text" name="firstname" onChange={userextra} placeholder="Lastname" required/>
                        </div>
                        </div>
                        <br/>
                        <input id="exception" type="text" name="phoneno" onChange={userextra} placeholder="phone-no" required/>
                        <br/><br/>
                        <input id="exception" type="text" name="alternatephoneno" onChange={userextra} placeholder="Alternate phone-no" required/>
                       
                        <br/><br/>
                         <input id="exception" type="password" name="password" onChange={userauth} placeholder="password" required/>
                        <br/>
                       
                       
                        <br/>
                        <div className="centeralgreg">
                        <button type="submit" onClick={onSubmit} className="servicebtn">Register</button>
                        </div>
                        <p id="smalltxt" className="centertxt">Already have an account?<Link to="/Login">Login</Link></p>
                        </form>

                </div>
            </div>
    </div>
    </div>
    </div>
    </>


       );

}
   export default Register;