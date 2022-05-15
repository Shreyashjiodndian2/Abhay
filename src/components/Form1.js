import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useContext,useState} from 'react';
import {
	Link
	
 } from "react-router-dom";
 
import '../css/Form1.css'
 
 const Form1 =()=>{
  
  // Aarti works starts

  const [inputList, setinputList]= useState([{firstName:'', lastName:''}]);

  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
    console.log(list)
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, { firstName:'', lastName:''}]);
  }

  // const handleinputchange=(e, index)=>{
  //   const {name, value}= e.target;
  //   const list= [...inputList];
  //   list[index][name]= value;
  //   setinputList(list);
  // }

  // Aarti works end


  // Hostel details usestates
  const [hosteldetails, sethosteldetails] = useState({})
  const [commonarea, setcommonarea] = useState({"Living" : false, "Kitchen" : false, "Dining-Hall": false, "Library" : false})
  const [finalhosteldetails, setfinalhosteldetails] = useState({})
  
  const commonareainputs = (e)=>{

    console.log("commonareainputs")
    console.log(e.target.value  , e.target.checked)
    commonarea[e.target.value] = e.target.checked

    console.log(commonarea)

  }

  const hostelinput = (e)=>{

    hosteldetails[e.target.name] = e.target.value
    console.log(hosteldetails)

  }

  // Owner caretaker details
  const [finalownerdetails, setfinalownerdetails] = useState({})
  
  const ownerdetailsinput = (e)=>{

    console.log('owners details input')
    console.log(e.target.value , e.target.name);
    finalownerdetails[e.target.name] = e.target.value;
    console.log(finalownerdetails)

  }

  // Security amenities
  const [security, setsecurity] = useState({'CCTV' : false , 'Gated' : false, 'Security' : false, "Biometric" : false})
  
  const securityinput = (e)=>{

    console.log('security input')
    console.log(e.target.value , e.target.checked);
    security[e.target.value] = e.target.checked;
    console.log(security)

  }


  // Furnishing in property
  const [furnishing, setfurnishing] = useState({"Fridge" : false, 'Washing machine' : false , 'Microwave' : false, 'Water Purifier' : false , 'Table Tennis' : false , 'Coffee machine' : false , 'TV' : false ,"Snack machine" : false})
  
  const furnishinginput = (e)=>{

    console.log('furnishing input')
    console.log(e.target.value , e.target.checked);
    furnishing[e.target.value] = e.target.checked;
    console.log(furnishing)

  }

  // Services 
  const [services, setservices] = useState({'Laundry' :  false , "House keeping" : false, "wifi connectivity":false})
  
  const servicesinput = (e)=>{

    console.log('services input')
    console.log(e.target.value , e.target.checked);
    services[e.target.value] = e.target.checked;
    console.log(services)

  }

  // Top Amenities 
  const [topamenities, settopamenities] = useState({"Gym" : false, 'Water Supply': false, 'Reserved Parking' : false, 'Lift': false, 'Power backup' : false, 'Swimming pool' : false})
  
  const topamenitiesinput = (e)=>{

    console.log('topamenities input')
    console.log(e.target.value , e.target.checked);
    topamenities[e.target.value] = e.target.checked;
    console.log(topamenities)

  }

  // Other PG details
  const [otherpgdetails, setotherpgdetails] = useState({})
  
  const otherpgdetailsinput = (e)=>{

    console.log('other pg details input')
    console.log(e.target.value , e.target.name);
    otherpgdetails[e.target.name] = e.target.value;
    console.log(otherpgdetails)

  }

  // Address details
  const [addressdetails, setaddressdetails] = useState({})
  
  const addressdetailsinput = (e)=>{

    console.log('address details input')
    console.log(e.target.value , e.target.name);
    addressdetails[e.target.name] = e.target.value;
    console.log(addressdetails)

  }

  
  // submitting the form
  const submitted = ()=>{
    console.log("submitted");
    setfinalhosteldetails({...hosteldetails, commonarea : {...commonarea}})

    console.log()
    console.log(finalhosteldetails)
 
  }


  

        return(

            <div className='backgroundimg'>
              <form>
              <div className='maindiv'>

              <div>
                <h5 className='red'>*indicates a mandatory field</h5>
                <h4>PG/Hostel Details</h4>
              <div className='HostelInfo'>
                <input className='inputcss fulllength' name='hostelname' onChange={hostelinput} type='text ' placeholder="Hostel/PG Name" required/>
                <br/>
                <input className='inputcss fulllength' name='totalbeds' onChange={hostelinput} type='text ' placeholder="Total No. of Beds required"/>
                <br/>
                <div className='radiobuttongroup'>
                  <p>PG is for</p>
                    <div class="wrapper">
                          <input type="radio" onChange={hostelinput} name="pgfor" value='boys' id="option-1" />
                          <input type="radio" onChange={hostelinput} name="pgfor" value='girls' id="option-2"/>
                            <label for="option-1" class="option option-1">
                             
                                <span>Girls</span>
                                </label>
                            <label for="option-2" class="option option-2">
                              
                                <span>boys</span>
                            </label>
                    </div>
                </div>       
                  <select name="suitedfor" id="lang" onChange={hostelinput}>
                    <option value="javascript">Best suited for</option>
                    <option value="php">PHP</option>
                    <option value="java">Java</option>
                    <option value="golang">Golang</option>
                    <option value="python">Python</option>
                    <option value="c#">C#</option>
                    <option value="C++">C++</option>
                    <option value="erlang">Erlang</option>
                  </select>

                  <div className='radiobuttongroup'>
                    <p>Meals available</p>
                      <div class="wrapper">
                            <input type="radio" name="mealsavailable" value='yes' onChange={hostelinput} id="option-3" />
                            <input type="radio" name="mealsavailable" value='no' onChange={hostelinput} id="option-4"/>
                              <label for="option-3" class="option option-3">                            
                                  <span>Yes</span>
                                  </label>
                              <label for="option-4" class="option option-4">
                                  <span>no</span>
                              </label>
                      </div>
                  </div>  



                  <input className='inputcss' type='text' name='noticeperiod' onChange={hostelinput} placeholder="Notice period" required/>
                  <input className='inputcss' type='text' name='lockinperiod' onChange={hostelinput} placeholder="Lockin period" required/>   
                  <p className='commonarea'>Common area</p>  
                  <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox" onClick={commonareainputs} value="Living" id="checkboxOneInput1"/>
                        <label for="checkboxOneInput1">Living</label>
                        
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onClick={commonareainputs} value="Kitchen" id="checkboxOneInput2"/>
                        <label for="checkboxOneInput2">Kitchen</label>
                        
                      </div> 
                      <div class="checkbox-example">
                        <input type="checkbox" onClick={commonareainputs} value="Dining-Hall" id="checkboxOneInput3"/>
                        <label for="checkboxOneInput3">Dining-Hall</label>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onClick={commonareainputs} value="Library" id="checkboxOneInput4"/>
                        <label for="checkboxOneInput4">Library</label>
                      </div>
                  </div>    
              </div>



{/* ///////////////////////////////////////////// Owners details //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

              <h4>Owner/Caretaker Details</h4>
              <div className='HostelInfo'>
                  <select name="propertymanagedby" id="lang" onChange={ownerdetailsinput}>
                        <option value="javascript">Property Managed by</option>
                        <option value="php">PHP</option>
                        <option value="java">Java</option>
                        <option value="golang">Golang</option>
                        <option value="python">Python</option>
                        <option value="c#">C#</option>
                        <option value="C++">C++</option>
                        <option value="erlang">Erlang</option>
                      </select>
                      <br/>
                      <p className='propertymanager'>Property manager stays at premise?</p>
                      <div class="wrapper right">
                          <input type="radio" onChange={ownerdetailsinput} name="staysatpremise" value='yes' id="option-5" />
                          <input type="radio" onChange={ownerdetailsinput}  name="staysatpremise" value='no' id="option-6"/>
                            <label for="option-5" class="option option-5">
                             
                                <span>Yes</span>
                                </label>
                            <label for="option-6" class="option option-6">
                              
                                <span>no</span>
                            </label>
                    </div>
                  <input className='inputcss fulllength' onChange={ownerdetailsinput}  type='text ' name='ownername' placeholder="Caretaker name" required/>
                  <br/>
                  <input className='inputcss fulllength' onChange={ownerdetailsinput}  type='text ' name='ownerphone' placeholder="Caretaker phone no. " required/>
                  <br/>
                          
                </div>
 
                          

                

{/* ///////////////////////////////////////////// Room details //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}                     
                <h4>Room Details</h4>      
                { 
            inputList.map( (x,i)=>{
        return (
      <div className='HostelInfo'>
                 <div className='button-groups'>
                  <p className='commonarea'>Room Type {i+1}</p>
                  <img className='delet'  onClick={()=> handleremove(i)} src={'images/dustbin.png'} alt="group"/>
                  </div>
                 
                      <br/>
                <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox" value="singlesharing" id="checkboxOneInput5"/>
                        <label for="checkboxOneInput5">Single Sharing</label>
                        
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" value="doublesharing" id="checkboxOneInput6"/>
                        <label for="checkboxOneInput6">Double sharing</label>
                        
                      </div> 
                      <div class="checkbox-example">
                        <input type="checkbox" value="triplesharing" id="checkboxOneInput7"/>
                        <label for="checkboxOneInput7">Triple sharing</label>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" value="threeplussharing" id="checkboxOneInput8"/>
                        <label for="checkboxOneInput8">3+ sharing</label>
                      </div>
                      
                    </div>    
                        <input className='inputcss fulllength' type='text ' placeholder="Total no. of beds in this room" required/>
                        <br/>
                      
                        <input className='inputcss' type='text' name="awards" placeholder="Rent"/>
                        <input className='inputcss' type='text' name="year" placeholder="Security Deposit"/>  
                        <br/>    
                        <p className='commonarea'>Facilities Offered</p>
                    <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox" value="5" id="checkboxOneInput5"/>
                        <label for="checkboxOneInput5">Personal cupboard</label>
                        
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" value="6" id="checkboxOneInput6"/>
                        <label for="checkboxOneInput6">TV in room</label>
                        
                      </div> 
                      <div class="checkbox-example">
                        <input type="checkbox" value="7" id="checkboxOneInput7"/>
                        <label for="checkboxOneInput7">Table chair</label>
                      </div>                    
                    </div>    
                    <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox" value="5" id="checkboxOneInput5"/>
                        <label for="checkboxOneInput5">Attached balocony</label>
                        
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" value="6" id="checkboxOneInput6"/>
                        <label for="checkboxOneInput6">Attached bathroom</label>
                        
                      </div> 
                      <div class="checkbox-example">
                        <input type="checkbox" value="7" id="checkboxOneInput7"/>
                        <label for="checkboxOneInput7">AC</label>
                      </div>                    
                    </div>    

                     <div>
                </div>     
              </div>
              
  );
})}
              <div className='continuebtn'>
              <button className='addnew'  onClick={ handleaddclick}>+ Add new room type</button>
              </div>
              



{/* ///////////////////////////////////////////// Security Amenities //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}              
            <div className='icons'>
               
              
                <p className='iconheading'>Security Amenities</p>
                <div className='HostelInfo'>

                  <div className='inputgrp'>
                  <div class="checkbox-example">
                        <input type="checkbox" onChange={securityinput} value="CCTV" id="checkboxOneInput9"/>
                        <label className='label' for="checkboxOneInput9"><img src={'images/bx_bx-cctv.png'} alt="group"/></label>
                        <p>CCTV</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={securityinput}  value="Gated" id="checkboxOneInput10"/>
                        <label className='label' for="checkboxOneInput10"><img src={'images/Gate 1.png'}/></label>
                        <p>Gated</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={securityinput}  value="Security" id="checkboxOneInput11"/>
                        <label className='label' for="checkboxOneInput11"><img src={'images/Group.png'}/></label>
                        <p>Security</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={securityinput}  value="Biometric" id="checkboxOneInput12"/>
                        <label className='label' for="checkboxOneInput12"><img src={'images/healthicons_fingerprint.png'}/></label>
                        <p>Biometric</p>
                      </div>
                     
                    </div> 
                </div>


{/* ///////////////////////////////////////////// Furnishing properties //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}              
                <p className='iconheading'>Furnishing in property</p>
                <div className='HostelInfo'>

                <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="Fridge" id="checkboxOneInput13"/>
                        <label className='label' for="checkboxOneInput13"><img src={'images/cil_fridge.png'}/></label>
                        <p>Fridge</p>
                      </div>
                      
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="Washing machine" id="checkboxOneInput14"/>
                        <label className='label' for="checkboxOneInput14"><img src={'images/mdi_washing-machine.png'}/></label>
                        <p>Washing machine</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="Microwave" id="checkboxOneInput15"/>
                        <label className='label' for="checkboxOneInput15"><img src={'images/whh_microwave.png'}/></label>
                        <p>Microwave</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="Water Purifier" id="checkboxOneInput16"/>
                        <label className='label' for="checkboxOneInput16"><img src={'images/filtration 1.png'}/></label>
                        <p>Water Purifier</p>
                      </div>
                     
                    </div> 
                     <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="Table Tennis" id="checkboxOneInput17"/>
                        <label className='label' for="checkboxOneInput17"><img src={'images/vector (4).png'}/></label>
                        <p>Table Tennis</p>
                      </div>
                      
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="Coffee machine" id="checkboxOneInput18"/>
                        <label className='label' for="checkboxOneInput18"><img src={'images/Group 249.png'}/></label>
                        <p>Coffee machine</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox"  onChange={furnishinginput} value="TV" id="checkboxOneInput19"/>
                        <label className='label' for="checkboxOneInput19"><img src={'images/Vector (5).png'}/></label>
                        <p>TV</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="Snack machine" id="checkboxOneInput20"/>
                        <label className='label' for="checkboxOneInput20"><img src={'images/vending-machine 1.png'}/></label>
                        <p>Snack machine</p>
                      </div>
                     
                    </div>
                </div> 


{/* ///////////////////////////////////////////// Services //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/} 
                
                <p className='iconheading'>Services</p>
                <div className='HostelInfo'>

                <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={servicesinput} value="Laundry" id="checkboxOneInput21"/>
                        <label className='label' for="checkboxOneInput21"><img src={'images/laundryy.png'}/></label>
                        <p>Laundry</p>
                      </div>
                      
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={servicesinput} value="House keeping" id="checkboxOneInput22"/>
                        <label className='label' for="checkboxOneInput22"><img src={'images/Vector (11).png'}/></label>
                        <p>House keeping</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={servicesinput} value="wifi connectivity" id="checkboxOneInput23"/>
                        <label className='label' for="checkboxOneInput23"><img src={'images/clarity_wifi-solid.png'}/></label>
                        <p>wifi connectivity</p>
                      </div>
                     
                    </div> 
                </div>

{/* ///////////////////////////////////////////// Top Amenities //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/} 
                <p className='iconheading'>Top Amenities</p>
                <div className='HostelInfo'>

                <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="Gym" id="checkboxOneInput24"/>
                        <label className='label' for="checkboxOneInput24"><img src={'images/Group (1).png'}/></label>
                        <p>Gym</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="Water Supply" id="checkboxOneInput25"/>
                        <label className='label' for="checkboxOneInput25"><img src={'images/healthicons_running-water-outline.png'}/></label>
                        <p>Water Supply</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="Reserved Parking" id="checkboxOneInput26"/>
                        <label className='label' for="checkboxOneInput26"><img src={'images/vector (7).png'}/></label>
                        <p>Reserved Parking</p>
                      </div>
                     
                    </div> 
                    <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox"  onChange={topamenitiesinput} value="Lift" id="checkboxOneInput27"/>
                        <label className='label' for="checkboxOneInput27"><img src={'images/ic_baseline-elevator.png'}/></label>
                        <p>Lift</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="Power backup" id="checkboxOneInput28"/>
                        <label className='label' for="checkboxOneInput28"><img src={'images/electric-generator 1.png'}/></label>
                        <p>Power backup</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="Swimming pool" id="checkboxOneInput29"/>
                        <label className='label' for="checkboxOneInput29"><img src={'images/Vector (9).png'}/></label>
                        <p>Swimming pool</p>
                      </div>
                     
                    </div> 
                </div>

            </div>


{/* ///////////////////////////////////////////// Other PG detials //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/} 
            <div className='otherpgdetails'>
  
              <p className='iconheading'>Other PG Details</p>
              <div className='HostelInfo'>
                <input className='inputcss fulllength' name='one time move in charge' onChange={otherpgdetailsinput} type='text ' placeholder="One time move in charge" required/>
                <br/>
                <input className='inputcss fulllength' name='Meal charge per month' onChange={otherpgdetailsinput} type='text ' placeholder="Meal charge per month" required/>
                <br/>
                <input className='inputcss fulllength' name='electricity charge per month' onChange={otherpgdetailsinput} type='text ' placeholder="electricity charge per month" required/>
                <br/>
                <input className='inputcss fulllength' name='Add additional info' onChange={otherpgdetailsinput} type='text ' placeholder="Add additional info" required/>
                <br/>
                </div>

            </div>

{/* ///////////////////////////////////////////// Address Details //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/} 

            <h4>Address Details</h4>
            <div className='HostelInfo'>

            <input className='inputcss fulllength' onChange={addressdetailsinput} name='city' type='text' placeholder="City *" required/>
            <input className='inputcss fulllength' onChange={addressdetailsinput} name='building' type='text' placeholder="Building/ Society *" required/>
            <input className='inputcss fulllength' onChange={addressdetailsinput} name='Locality' type='text' placeholder="Locality *" required/>
             
            </div>
          
            </div>
            <div className='continuebtn'>
            <button type='submit' onClick={submitted} className='continue'>
				      {/* <Link to="/Addimages">Continue</Link>*/} submit</button> 
            </div>
            </div>
            </form>
          </div>
           
);



}

export default Form1