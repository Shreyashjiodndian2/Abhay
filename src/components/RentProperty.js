import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useContext,useState} from 'react';
import { useHistory } from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import {UserContext} from '../Context/UserContext'
import {Link} from "react-router-dom";
import '../css/Form1.css'
import RoomdetailsForm from './RoomdetailsForm';
import {rentaction} from '../actions/action'
import { formreducer } from '../reducers/form1';
import '../css/main3.css'
import '../css/RentProperty.css'
import { Navbar,Nav,NavDropdown,Container,Card,Button,InputGroup,FormControl,Form,Table } from 'react-bootstrap';

const RentProperty =(props) => {

    const history = useHistory();

    const cont = useContext(UserContext)
    console.log("cont.user = ",cont.user)

    // use dispatch
    const dispatch = useDispatch(); 
    const mystate = useSelector((state) => state.rentreducer)
    console.log("mystate",mystate)

    const [otherdetails, setotherdetails] = useState({})
    const [addressdetail, setaddressdetail] = useState({})
    const [propertydetail, setpropertydetail] = useState({})

    const propertydetails = (e)=>{

        propertydetail[e.target.name] = e.target.value;
        console.log(propertydetail)

    }

    

    const otherdetail = (e)=>{

        otherdetails[e.target.name]  = e.target.value
        console.log(otherdetails)


    }

    const addressdetails = (e)=>{

        addressdetail[e.target.name] = e.target.value
        console.log(addressdetail)

    }


    const submitted = async ()=>{

        console.log("submitted")

        let obj = {propertydetail,addressdetail, otherdetails}
        console.log(obj)

        dispatch(rentaction(obj))

        if(cont.user == null)
        {
            history.push('/login')
        }
        else
        {
            history.push('/AddImagesforRent')
        }
        
    }

 
  
    return (
       
            <div className='backgroundimg'>
              <form>
              <div className='maindiv'>

               
              <div className='HostelInfo'>
                <h5 className='red'>*   indicates a mandatory field</h5>
                <h4>Property Details</h4>
                <div className='PropertyInfo'>
                
                <select name="Property Type" onChange={propertydetails} id='lang'>
                    <option value="">Property Type</option>
                    <option value="Independent House">Independent House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Independent Floor">Independent Floor</option>
                    <option value="Villa">Villa</option>
                    <option value="Villa">Flat</option>
                </select>
                
                <select name='BHK' onChange={propertydetails} id='bhk'>
                    <option value="BHK">BHK</option>
                    <option value="1RK">1RK</option>
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                    <option value="3+BHK">3+BHK</option>
                </select>
                
                <select name='Furnished Type' onChange={propertydetails} id='furnishedType'>
                               <option value="">---Select Furnished Type---</option>
                               <option value="Semi furnished">Semi furnished</option>
                               <option value="Fully furnished">Fully furnished</option>
                               <option value="Unfurnished">Unfurnished</option>
                            </select>

                <input className='inputcss fulllength' id='inputid' name='BuiltupArea' onChange={propertydetails} type='text ' placeholder="Built up Area *" required/>
                <br/><br/>
            <div style={{padding:"0 200px"}}>
                <div className='radiobuttongroup'>
                  <p>Bathroom</p>
                    <div class="wrapper">
                          <input type="radio" onClick={propertydetails} name="bathroom" value='0' id="option-1" />
                          <input type="radio" onClick={propertydetails} name="bathroom" value='1' id="option-2"/>
                          <input type="radio" onClick={propertydetails} name="bathroom" value='3' id="option-3" />
                          <input type="radio" onClick={propertydetails} name="bathroom" value='4' id="option-4"/>

                            <label for="option-1" class="option option-1">
                                <span>0</span>
                            </label>
                            <label for="option-2" class="option option-2">
                              
                                <span>1</span>
                            </label>
                            <label for="option-3" class="option option-3">
                            
                                <span>3</span>
                            </label>
                            <label for="option-4" class="option option-4">
                              
                                <span>4</span>
                            </label>
                    </div>
                </div>

                <br/><br/><br/>
                
                
                <div className='radiobuttongroup'>
                  <p>Balcony</p>
                    <div class="wrapper">
                          <input type="radio" onClick={propertydetails} name="balcony" value='0' id="option-5" />
                          <input type="radio" onClick={propertydetails} name="balcony" value='1' id="option-6"/>
                          <input type="radio" onClick={propertydetails} name="balcony" value='3' id="option-7" />
                          <input type="radio" onClick={propertydetails} name="balcony" value='4' id="option-8"/>
                            
                            <label for="option-5" class="option option-5">
                             
                                <span>0</span>
                            </label>
                            <label for="option-6" class="option option-6">
                              
                                <span>1</span>
                            </label>
                            <label for="option-7" class="option option-7">
                            
                                <span>3</span>
                            </label>
                            <label for="option-8" class="option option-8">
                              
                                <span>4</span>
                            </label>
                    </div>
                </div>
                       
                <br/><br/><br/>
            
            
                
                
                    

                            <div className='radiobuttongroup'>
                    <p>Parking</p>
                      <div class="wrapper">
                            <input type="radio" onClick={propertydetails} name="parking" value='Yes'  id="option-9" />
                            <input type="radio" onClick={propertydetails}  name="parking" value='No' id="option-10"/>
                              <label for="option-9" class="option option-9">
                              
                                  <span>Yes</span>
                              </label>
                              <label for="option-10" class="option option-10">
                                
                                  <span>no</span>
                              </label>
                      </div>
                  </div>
                </div>  
                </div>

                <br/>
{/*---------------------------------------------otherdetails---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

            
            <h4>Other Details</h4>
            <div className='PropertyInfo'>
            
            <input className='inputcss fulllength' id='inputid' onChange={otherdetail} name='Available from' type='text' placeholder="Available from *" required/>
            <input className='inputcss fulllength' id='inputid' onChange={otherdetail} name='Monthly Rent' type='text' placeholder="Monthly Rent *" required/>
            <input className='inputcss fulllength' id='inputid' onChange={otherdetail} name='Maintanence Charge' type='text' placeholder="Maintanence Charge"/>
            <input className='inputcss fulllength' id='inputid' onChange={otherdetail} name='Security Deposit' type='text' placeholder="Security Deposit"/>
            
            
            
                <select name='Tenant Type' onChange={otherdetail} id='tt'>
                    <option value="">--Preffered Tenant Type--</option> 
                    <option value="Student">Student</option>
                    <option value="Working Professionals">Working Professionals</option>
                    <option value="family">Family</option>
                </select>
            

            <input className='description' onChange={otherdetail} name= 'Description' placeholder='Description' type='textarea'/>
            </div>


{/* ----------------------------------------addressdetails ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

            
            <h4>Address Details</h4>
            <div className='PropertyInfo'>

            <input className='inputcss fulllength' id='inputid' onChange={addressdetails} name='City' type='text' placeholder="City *" required/>
            <input className='inputcss fulllength' id='inputid' name='Building/Society' onChange={addressdetails} type='text' placeholder="Building/ Society *" required/>
            <input className='inputcss fulllength' id='inputid' type='text' name='Locality' onChange={addressdetails} placeholder="Locality *" required/>
             
            <div className='box1'>
            <input className='inputstyle2'  placeholder='Flat No' type='text' onChange={addressdetails} name='Flat No'/>
            <input className='inputstyle2' placeholder='Floor No' type='text' onChange={addressdetails} name='Floor No'/>
            <input className='inputstyle2' placeholder='Total Floor' type='text' onChange={addressdetails} name='Total Floor'/>
            </div>

            </div>

        


            


          
            <div className='continuebtn'>
          <button type='submit'onClick={submitted} className='continue'>
				continue</button>
            </div>
            </div>
            </div>
            </form>
          </div>
        );

}


export default RentProperty;