import React from 'react'
import { useContext,useState} from 'react';
import {
	Link
	
 } from "react-router-dom";
 
import '../css/Form1.css'
export default function RoomdetailsForm(props) {

    const idris = props.idris
  return (
    <div>
        <div className='HostelInfo'>
                 <div className='button-groups'>
                  <p className='commonarea'>Room Type {props.i+1}</p>
                  {props.i > 0 ? <img className='delet'   src={'images/dustbin.png'} alt="group"/> : ''}

                  </div>
                 
                      <br/>
                <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox" name="singlesharing" value='singlesharing'
                         id={idris+10}/>
                        <label for={idris+10}>Single Sharing</label>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" name="doublesharing" value='doublesharing'
                         id={idris + 20}/>
                        <label for={idris + 20}>Double sharing</label>
                        
                      </div> 
                      <div class="checkbox-example">
                        <input type="checkbox" name="triplesharing" value='triplesharing'
                         id={idris + 30}/>
                        <label for={idris + 30}>Triple sharing</label>
                        
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" name="threeplusharing" value='threeplusharing'
                         id={idris + 40}/>
                        <label for={idris + 40}>3+ sharing</label>
                        <p className='hiddentext'>
                        {/* {i=i+10} */}
                        </p>
                      </div>
                      
                    </div> 
                       
                       <input 
                          className='inputcss' type='text' name="firstName"  placeholder="Rent"/>
                        <input                           className='inputcss'  type='text' name="lastName"  placeholder="Security Deposit"/>  
                  
                          <input className='inputcss' type='text'  placeholder="Security Deposit"/>  
                        <br/>   
                      
                        <p className='commonarea'>Facilities Offered</p>
                    <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox" value="5" id={idris + 50}/>
                        <label for={idris + 50}>Personal cupboard</label>
                        <p className='hiddentext'>
                        {/* {i=i+10} */}
                        </p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" value="6" id={idris + 60}/>
                        <label for={idris + 60}>TV in room</label>
                        <p className='hiddentext'>
                        {/* {count = count + 10} */}
                        </p>
                      </div> 
                      <div class="checkbox-example">
                        <input type="checkbox" value="7" id={idris + 70}/>
                        <label for={idris + 70}>Table chair</label>
                        <p className='hiddentext'>
                        {/* {count = count + 10} */}
                        </p>
                      </div>                    
                    </div>    
                    <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox" value="5" id={idris + 80}/>
                        <label for={idris + 80}>Attached balocony</label>
                        <p className='hiddentext'>
                        {/* {count = count + 10} */}
                        </p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" value="6" id={idris + 90}/>
                        <label for={idris + 90}>Attached bathroom</label>
                        <p className='hiddentext'>
                        {/* {count = count + 10} */}
                        </p>
                      </div> 
                      <div class="checkbox-example">
                        <input type="checkbox" value="7" id={idris + 100}/>
                        <label for={idris + 100}>AC</label>
                        <p className='hiddentext'>
                        {/* {count = count + 10} */}
                        </p>
                      </div>                    
                    </div>    

                     <div>
                </div>     
              </div>
        
    </div>
  )
}
