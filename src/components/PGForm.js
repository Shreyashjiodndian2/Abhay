import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useContext,useState} from 'react';
import {
	Link
	
 } from "react-router-dom";
 
import '../css/Form1.css'
 
 const PGForm =()=>{
   
  // Aarti works starts
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" ,singlesharing: false,doublesharing: false,triplesharing: false,threeplusharing: false}]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
var j=0;
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "",singlesharing: false,doublesharing: false,triplesharing: false,threeplusharing: false }]);
  };

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
            <div className='innerdivision'>
              <div>
                <h5 className='red'>*indicates a mandatory field</h5>
                <h4>PG Details</h4>
                <div className='HostelInfo'>
              <div className='space-around'>
                <input className='inputcss fulllength' id='inputid' name='hostelname' onChange={hostelinput} type='text ' placeholder="PG Name" required/>
                <br/>
                <input className='inputcss fulllength'id='inputid' name='totalbeds' onChange={hostelinput} type='text ' placeholder="Total No. of Beds required"/>
                <br/><br/>
                </div>
                
              <div className='space-around'>
                <div className='radiobuttongroup'>
                  <p id='pid'>PG is for</p>
                    <div class="wrapper">
                          <input type="radio" onChange={hostelinput} name="pgfor" value='girls' id="option-1" />
                          <input type="radio" onChange={hostelinput} name="pgfor" value='boys' id="option-2"/>
                            <label for="option-1" class="option option-1">
                             
                                <span>Girls</span>
                                </label>
                            <label for="option-2" class="option option-2">
                              
                                <span>boys</span>
                            </label>
                    </div>
                </div>


                </div>  

                <div  style={{width: "800px"}}>
  <select>
    <option value="0">Best Suited For</option>
    <option value="1">Audi</option>
    <option value="2">BMW</option>
    <option value="3">Citroen</option>
    <option value="4">Ford</option>
  </select>
</div>



                  
              <div className='space-around'>
                  <div className='radiobuttongroup'>
                    <p id='pid'>Meals available</p>
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
                   <input id='inputid' className='inputcss fulllength' name='mealchargepermonth' onChange={otherpgdetailsinput} type='text ' placeholder="Meal charge per month" required/>
                  
                   </div>



                  <input className='inputcss' id='inputid' type='text' name='noticeperiod' onChange={hostelinput} placeholder="Notice period" required/>
                  <input className='inputcss' id='inputid' type='text' name='lockinperiod' onChange={hostelinput} placeholder="Lockin period" required/>
                  <input className='inputcss' id='inputid' type='text' name='noticeperiod' onChange={hostelinput} placeholder="Rent" required/>
                  <input className='inputcss' id='inputid' type='text' name='lockinperiod' onChange={hostelinput} placeholder="Security Deposite" required/>
                
                
              <div className='space-around'>
                  <p id='pid' className='commonarea'>Common area</p>  
                  <div className='inputgrp inputgrpcls'>
                      <div class="checkbox-example">
                        <input type="checkbox" onClick={commonareainputs} value="living" id="checkboxOneInput1"/>
                        <label for="checkboxOneInput1">Living</label>
                        
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onClick={commonareainputs} value="kitchen" id="checkboxOneInput2"/>
                        <label for="checkboxOneInput2">Kitchen</label>
                        
                      </div> 
                      <div class="checkbox-example">
                        <input type="checkbox" onClick={commonareainputs} value="dininghall" id="checkboxOneInput3"/>
                        <label for="checkboxOneInput3">DiningHall</label>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onClick={commonareainputs} value="library" id="checkboxOneInput4"/>
                        <label for="checkboxOneInput4">Library</label>
                      </div>
                  </div>    
              </div>
              </div>


{/* ///////////////////////////////////////////// Owners details //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

<h4>Owner/Caretaker Details</h4>
              <div className='HostelInfo'>


              <div className='space-around'>
              
                      <br/>
                      <p id='pid' className='propertymanager'>Property manager stays at premise?</p>
                      <br/> 
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
</div>
                   
                   

                    <div  style={{width: "800px"}}>
  <select>
    <option value="0">Property Manged By</option>
    <option value="1">Audi</option>
    <option value="2">BMW</option>
    <option value="3">Citroen</option>
    <option value="4">Ford</option>
  </select>
</div>
                    
              <div className='space-around'>
                  <input className='inputcss fulllength' id='inputid' onChange={ownerdetailsinput}  type='text ' name='ownername' placeholder="Caretaker name" required/>
                  <br/>
                  <input className='inputcss fulllength' id='inputid' onChange={ownerdetailsinput}  type='text ' name='ownerphone' placeholder="Caretaker phone no. " required/>
                  <br/>
                  </div>
                  <input id='inputid' className='inputcss fulllength' name='addadditionalinfo' onChange={otherpgdetailsinput} type='text ' placeholder="Add additional info" required/>
              
                </div>
 
                          

 
                          

                



{/* ///////////////////////////////////////////// Security Amenities //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}              
            <div className='icons'>
               
              
                <h4>Security Amenities</h4>
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
                <h4>Furnishing in property</h4>
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
                
                <h4>Services</h4>
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
                <h4 className='iconheading'>Top Amenities</h4>
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



{/* ///////////////////////////////////////////// Address Details //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/} 

            <h4>Address Details</h4>
            <div className='HostelInfo'>

            <input id='inputid' className='inputcss fulllength' onChange={addressdetailsinput} name='city' type='text' placeholder="City *" required/>
            <input id='inputid' className='inputcss fulllength' onChange={addressdetailsinput} name='building' type='text' placeholder="Building/ Society *" required/>
            <input id='inputid' className='inputcss fulllength' onChange={addressdetailsinput} name='Locality' type='text' placeholder="Locality *" required/>
            <input id='inputid' className='inputcss fulllength' onChange={addressdetailsinput} name='Locality' type='text' placeholder="State*" required/>
             
            </div>
          
            </div>
            <div className='continuebtn'>
            <button type='submit' onClick={submitted} className='continue'>
				      {/* <Link to="/Addimages">Continue</Link>*/} submit</button> 
            </div>
           
           
            </div>
            </div>
            </form>
          </div>
           
);



}

export default PGForm