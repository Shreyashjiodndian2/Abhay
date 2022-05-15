import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useContext,useState} from 'react';
import { Link } from "react-router-dom";

import '../css/main3.css'
import '../css/RentProperty.css'




import { Navbar,Nav,NavDropdown,Container,Card,Button,InputGroup,FormControl,Form,Table } from 'react-bootstrap';

const RentProperty =(props) => {

 
  
    return (
       
            <div className='backgroundimg'>
              <form>
              <div className='maindiv'>
                
              

            
            




               
              <div className='HostelInfo'>
                <h5 className='red'>*   indicates a mandatory field</h5>
                <h4>Property Details</h4>
                <div className='PropertyInfo'>
    
            
           

                   
                   
                <select name="languages" id='lang'>
                    <option value="Property Type">Property Type</option>
                    <option value="Independent House">Independent House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Independent Floor">Independent Floor</option>
                    <option value="Villa">Villa</option>
                </select>
                
                <select name='BHK' id='bhk'>
                    <option value="BHK">BHK</option>
                    <option value="1RK">1RK</option>
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                    <option value="3+BHK">3+BHK</option>
                </select>
                

                <input className='inputcss fulllength' type='text ' placeholder="Built up Area *" required/>
                <br/>

                <div className='radiobuttongroup'>
                  <p>Bathroom</p>
                    <div class="wrapper">
                          <input type="radio" name="select" id="option-1" />
                          <input type="radio" name="select" id="option-2"/>
                          <input type="radio" name="select" id="option-3" />
                          <input type="radio" name="select" id="option-4"/>
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

                
                
                
                <div className='radiobuttongroup'>
                  <p>Balcony</p>
                    <div class="wrapper">
                          <input type="radio" name="select2" id="option-5" />
                          <input type="radio" name="select2" id="option-6"/>
                          <input type="radio" name="select2" id="option-7" />
                          <input type="radio" name="select2" id="option-8"/>
                            
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
                       
               
            
            
                
                
                    
                           <select name='Furnished Type' id='furnishedType'>
                               <option value="Furnished Type">Furnished Type</option>
                               <option value="Semi furnished">Semi furnished</option>
                               <option value="Fully furnished">Fully furnished</option>
                               <option value="Unfurnished">Unfurnished</option>
                            </select>

                            <div className='radiobuttongroup'>
                    <p>Parking</p>
                      <div class="wrapper">
                            <input type="radio" name="select3" id="option-9" checked/>
                            <input type="radio" name="select3" id="option-10"/>
                              <label for="option-9" class="option option-9">
                              
                                  <span>Yes</span>
                              </label>
                              <label for="option-10" class="option option-10">
                                
                                  <span>no</span>
                              </label>
                      </div>
                  </div>
                </div>  


            
            <h4>Other Details</h4>
            <div className='PropertyInfo'>
            
            <input className='inputcss fulllength' type='text' placeholder="Available from *" required/>
            <input className='inputcss fulllength' type='text' placeholder="Monthly Rent *" required/>
            <input className='inputcss fulllength' type='text' placeholder="Maintanence Charge"/>
            <input className='inputcss fulllength' type='text' placeholder="Security Deposit"/>
            
            
            
                <select name='Tenant Type' id='tt'>
                    <option value="Preffered Tenant Type">Preffered Tenant Type</option> 
                    <option value="Student">Student</option>
                    <option value="Working Professionals">Working Professionals</option>
                    <option value="family">Family</option>
                </select>
            

            <input className='description' placeholder='Description' type='textarea'/>
            </div>

            
            <h4>Address Details</h4>
            <div className='PropertyInfo'>

            <input className='inputcss fulllength' type='text' placeholder="City *" required/>
            <input className='inputcss fulllength' type='text' placeholder="Building/ Society *" required/>
            <input className='inputcss fulllength' type='text' placeholder="Locality *" required/>
             
            <div className='box1'>
            <input className='inputstyle2' placeholder='Flat No' type='text' name='email'/>
            <input className='inputstyle2' placeholder='Floor No' type='text' name='email'/>
            <input className='inputstyle2' placeholder='Total Floor' type='text' name='email'/>
            </div>

            </div>

        


            


          
            <div className='continuebtn'>
          <button type='submit' className='continue'>
				<Link to="/Addimages">Continue</Link></button>
            </div>
            </div>
            </div>
            </form>
          </div>
        );

}


export default RentProperty;