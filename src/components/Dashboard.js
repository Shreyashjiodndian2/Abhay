import react from 'react';

import { useContext, useState, } from "react";
import {UserContext} from '../Context/UserContext'

import { Link } from 'react-router-dom';


import { Navbar,Nav,NavDropdown,Container,Card,Button,InputGroup,FormControl,Form,Table } from 'react-bootstrap';

const Dashboard =() => {

    const cont = useContext(UserContext);



	return (
		<div className='dashboard'>
            
				<h1>DASHBOARD</h1>


                {cont.user ? 
				<div className='container'>
					<div className='box'>
                        <h1>3</h1>
                        <h2>Hostels</h2>
                    </div>

                    <div className='box'>
                        <p><h1>3</h1>
                        <h2>Property</h2></p>
                    </div>

                    <div className='box'>
                        <h1>3</h1>
                        <h2>Rooms in Hostel</h2>
                    </div>

				</div>

                : 

               
                <div className='containerpopup'>
                <div>
                <img src='https://martechmasons.com/wp-content/uploads/2020/06/Group-9349-400x469.png'/>
                </div>
                <div className='rightalign'>
                    
                <h2>To see dashboard log in into your account first .</h2>
                
                <br/>
              
                <button  className='dashbtn '>
                <Link to="/Login" ><a>Log In</a>
                </Link>
                </button>
                
                <br/> 
                <button  className='dashbtn '>
                <Link to="/Register" ><a>Sign Up</a>
                </Link>
                </button>
                </div>
                </div>




                }

                </div>

	);
}

export default Dashboard;