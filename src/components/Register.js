import {React , useState} from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import {useHistory} from 'react-router-dom'
import UserOperations from "../Service/Operation";


const Register = () => {

    const [emailid, setemailid] = useState('')
    const [password, setpassword] = useState('')
    const [obj, setobj] = useState({First : "", Last: '', userid : ''})
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
            obj.userid = result.user.uid
            var current  = await UserOperations.add(obj)
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
          <h1 className="loginheading">Register Here</h1> 
    <div className="alignment">
        <div className="leftdiv">
        <img src="https://martechmasons.com/wp-content/uploads/2020/06/Group-9349-400x469.png"/>
        </div>
    <div>
                <div className="cont">
                    <div className="loginform registercss">
                  
                        <form>
                        <p>Email</p>
                        <input type="text" name="email" onChange={userauth} placeholder="Email" required/>
                        <p>First name</p>
                        <input type="text" name="First" onChange={userextra} placeholder="Firstname" required/>
                        <p>Last name</p>
                        <input type="text" name="Last" onChange={userextra} placeholder="Lastname" required/>
                        <p>Password</p>
                        <input type="password" name="password" onChange={userauth} placeholder="password" required/>
                        <br/>
                        <br/>
                        <button type="submit" onClick={onSubmit} className="submitbtn">Register</button>
                        <p className="centertxt">Already have an account?<Link to="/Login">Login</Link></p>
                        </form>

                </div>
            </div>
    </div>
    </div>
    </>

       );

}
   export default Register;