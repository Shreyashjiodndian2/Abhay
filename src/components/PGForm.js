import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useContext,useState} from 'react';
import {
	Link
	
 } from "react-router-dom";
 
import '../css/Form1.css'
import { GiCctvCamera } from "react-icons/gi"
import { SiAdguard } from "react-icons/si";
import { FaFingerprint } from "react-icons/fa"
import { RiFridgeLine } from "react-icons/ri";
import { GiWashingMachine } from "react-icons/gi";
import { MdMicrowave } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { MdCoffeeMaker } from "react-icons/md";
import { GiGasStove } from "react-icons/gi";
import { GiVendingMachine } from "react-icons/gi";
import { RiShirtFill } from "react-icons/ri";
import { GiBroom } from "react-icons/gi";
import { AiOutlineWifi } from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import { GiWaterDrop } from "react-icons/gi";
import { MdLocalParking } from "react-icons/md";
import { GiElevator } from "react-icons/gi";
import { GiCarBattery } from "react-icons/gi";
import { FaSwimmer  } from "react-icons/fa";
import { IoLibrarySharp } from "react-icons/io5";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaTableTennis } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
 
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
  const [pgdetails, sethosteldetails] = useState({})
  const [commonarea, setcommonarea] = useState({"Living" : false, "Kitchen" : false, "Dining-Hall": false, "Library" : false})
  const [finalpgdetails, setfinalpgdetails] = useState({})
  
  const commonareainputs = (e)=>{

    console.log("commonareainputs")
    console.log(e.target.value  , e.target.checked)
    commonarea[e.target.value] = e.target.checked

    console.log(commonarea)

  }

  const pginput = (e)=>{

    pgdetails[e.target.name] = e.target.value
    console.log(pgdetails)

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
  const [security, setsecurity] = useState({'cctv' : false ,  'security' : false, "biometric" : false})
  
  const securityinput = (e)=>{

    console.log('security input')
    console.log(e.target.value , e.target.checked);
    security[e.target.value] = e.target.checked;
    console.log(security)

  }


  // Furnishing in property
  const [furnishing, setfurnishing] = useState({"fridge" : false, 'washingmachine' : false , 'microwave' : false, 'waterpurifier' : false , 'gasstove' : false , 'coffeemachine' : false , 'tv' : false ,"snackmachine" : false})
  
  const furnishinginput = (e)=>{

    console.log('furnishing input')
    console.log(e.target.value , e.target.checked);
    furnishing[e.target.value] = e.target.checked;
    console.log(furnishing)

  }

  // Services 
  const [services, setservices] = useState({"Laundry" :  false , "House keeping" : false, "wifi connectivity":false})
  
  const servicesinput = (e)=>{

    console.log('services input')
    console.log(e.target.value , e.target.checked);
    services[e.target.value] = e.target.checked;
    console.log(services)

  }

  // Top Amenities 
  const [topamenities, settopamenities] = useState({"library" : false, "gym" : false, "watersupply": false, "reservedparking" : false, "lift": false, "powerbackup" : false, "swimmingpool" : false, "tabletennis" : false, "dailynewspaper" : false})
  
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

    console.log("submitted for pgform");
    setfinalpgdetails({...pgdetails, commonarea : {...commonarea}})
    console.log(finalpgdetails)
 
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
                <input className='inputcss fulllength' id='inputid' name='hostelname' onChange={pginput} type='text ' placeholder="PG Name" required/>
                <br/>
                <input className='inputcss fulllength'id='inputid' name='totalbeds' onChange={pginput} type='text ' placeholder="Total No. of Beds required"/>
                <br/><br/>
                </div>
                
              <div className='space-around'>
                <div className='radiobuttongroup'>
                  <p id='pid'>PG is for</p>
                    <div class="wrapper">
                          <input type="radio" onChange={pginput} name="pgfor" value='girls' id="option-1" />
                          <input type="radio" onChange={pginput} name="pgfor" value='boys' id="option-2"/>
                          <input type="radio" onChange={pginput} name="pgfor" value='both' id="option-3"/>
                            <label for="option-1" class="option option-1">
                             
                                <span>Girls</span>
                                </label>
                            <label for="option-2" class="option option-2">
                              
                                <span>Boys</span>
                            </label>
                            <label for="option-3" class="option option-3">
                              
                                <span>Both</span>
                            </label>

                    </div>
                </div>


                </div>  

                <div  style={{width: "800px"}}>
  <select>
    <option value="0">Best Suited For</option>
    <option value="1">Student</option>
    <option value="2">Working Professionals</option>
    <option value="3">Any</option>
  </select>
</div>



                  
              <div className='space-around'>
                  <div className='radiobuttongroup'>
                    <p id='pid'>Meals available</p>
                      <div class="wrapper">
                            <input type="radio" name="mealsavailable" value='yes' onChange={pginput} id="option-4" />
                            <input type="radio" name="mealsavailable" value='no' onChange={pginput} id="option-5"/>
                              <label for="option-4" class="option option-4">                            
                                  <span>Yes</span>
                                  </label>
                              <label for="option-5" class="option option-5">
                                  <span>no</span>
                              </label>
                      </div>
                  </div>   
                   <input id='inputid' className='inputcss fulllength' name='mealchargepermonth' onChange={otherpgdetailsinput} type='text ' placeholder="Meal charge per month" required/>
                  
                   </div>



                  <input className='inputcss' id='inputid' type='text' name='noticeperiod' onChange={pginput} placeholder="Notice period" required/>
                  <input className='inputcss' id='inputid' type='text' name='lockinperiod' onChange={pginput} placeholder="Lockin period" required/>
                  <input className='inputcss' id='inputid' type='text' name='noticeperiod' onChange={pginput} placeholder="Rent" required/>
                  <input className='inputcss' id='inputid' type='text' name='lockinperiod' onChange={pginput} placeholder="Security Deposite" required/>
                
                
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
                          <input type="radio" onChange={ownerdetailsinput} name="staysatpremise" value='yes' id="option-6" />
                          <input type="radio" onChange={ownerdetailsinput}  name="staysatpremise" value='no' id="option-7"/>
                            <label for="option-6" class="option option-6">
                             
                                <span>Yes</span>
                                </label>
                            <label for="option-7" class="option option-7">
                              
                                <span>no</span>
                            </label>
                    </div>
</div>
                   
                   

                    <div  style={{width: "800px"}}>
  <select>
    <option value="0">Property Manged By</option>
    <option value="1">Owner itself</option>
    <option value="2">Warden</option>
    <option value="3">Others</option>
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
                        <input type="checkbox" onChange={securityinput} value="cctv" id="checkboxOneInput9"/>
                        <label className='label' for="checkboxOneInput9"><GiCctvCamera  size='50rem'/></label>
                        <p>CCTV</p>
                      </div>
                      
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={securityinput}  value="security" id="checkboxOneInput10"/>
                        <label className='label' for="checkboxOneInput10"><SiAdguard size='50rem'/></label>
                        <p>Security</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={securityinput}  value="biometric" id="checkboxOneInput11"/>
                        <label className='label' for="checkboxOneInput11"><FaFingerprint size='50rem'/></label>
                        <p>Biometric</p>
                      </div>
                    </div> 
                </div>


{/* ///////////////////////////////////////////// Furnishing properties //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}              
                <h4>Furnishing in property</h4>
                <div className='HostelInfo'>

                <div className='inputgrp'>
                <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="fridge" id="checkboxOneInput12"/>
                        <label className='label' for="checkboxOneInput12"><RiFridgeLine size='50rem'/></label>
                        <p>Fridge</p>
                      </div>
                      
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="washingmachine" id="checkboxOneInput13"/>
                        <label className='label' for="checkboxOneInput13"><GiWashingMachine size='50rem'/></label>
                        <p>Washing machine</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="microwave" id="checkboxOneInput14"/>
                        <label className='label' for="checkboxOneInput14">< MdMicrowave size='50rem'/></label>
                        <p>Microwave</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="waterpurifier" id="checkboxOneInput15"/>
                        <label className='label' for="checkboxOneInput15"><FaHandHoldingWater size='50rem'/></label>
                        <p>Water Purifier</p>
                      </div>
                     
                    </div> 
                     <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="gasstove" id="checkboxOneInput16"/>
                        <label className='label' for="checkboxOneInput16"><GiGasStove size='50rem'/></label>
                        <p>Gas Stove</p>
                      </div>
                      
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="coffeemachine" id="checkboxOneInput17"/>
                        <label className='label' for="checkboxOneInput17"><MdCoffeeMaker size='50rem'/></label>
                        <p>Coffee machine</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox"  onChange={furnishinginput} value="tv" id="checkboxOneInput18"/>
                        <label className='label' for="checkboxOneInput18"><FiMonitor size='50rem'/></label>
                        <p>TV</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="snackmachine" id="checkboxOneInput19"/>
                        <label className='label' for="checkboxOneInput19"><GiVendingMachine size='50rem'/></label>
                        <p>Snack machine</p>
                      </div>
                     
                    </div>
                </div> 


{/* ///////////////////////////////////////////// Services //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/} 
                
                <h4>Services</h4>
                <div className='HostelInfo'>

                <div className='inputgrp'>
                <div class="checkbox-example">
                        <input type="checkbox" onChange={servicesinput} value="laundry" id="checkboxOneInput20"/>
                        <label className='label' for="checkboxOneInput20"><RiShirtFill size='50rem'/></label>
                        <p>Laundry</p>
                      </div>
                      
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={servicesinput} value="housekeeping" id="checkboxOneInput21"/>
                        <label className='label' for="checkboxOneInput21"><GiBroom size='50rem'/></label>
                        <p>House keeping</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={servicesinput} value="wificonnectivity" id="checkboxOneInput22"/>
                        <label className='label' for="checkboxOneInput22"><AiOutlineWifi size='50rem'/></label>
                        <p>wifi connectivity</p>
                      </div>
                     
                    </div> 
                </div>

{/* ///////////////////////////////////////////// Top Amenities //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/} 
                <h4 className='iconheading'>Top Amenities</h4>
                <div className='HostelInfo'>

                  <div className='inputgrp'>
                    <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="library" id="checkboxOneInput23"/>
                        <label className='label' for="checkboxOneInput23"><IoLibrarySharp size='50rem'/></label>
                        <p>Library</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="gym" id="checkboxOneInput24"/>
                        <label className='label' for="checkboxOneInput24"><CgGym size='50rem'/></label>
                        <p>Gym</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="watersupply" id="checkboxOneInput25"/>
                        <label className='label' for="checkboxOneInput25"><GiWaterDrop size='50rem'/></label>
                        <p>Water Supply</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="reservedparking" id="checkboxOneInput26"/>
                        <label className='label' for="checkboxOneInput26"><MdLocalParking size='50rem'/></label>
                        <p>Reserved Parking</p>
                      </div>
                     
                  </div> 
                  <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox"  onChange={topamenitiesinput} value="lift" id="checkboxOneInput27"/>
                        <label className='label' for="checkboxOneInput27"><GiElevator size='50rem'/></label>
                        <p>Lift</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="powerbackup" id="checkboxOneInput28"/>
                        <label className='label' for="checkboxOneInput28"><GiCarBattery size='50rem'/></label>
                        <p>Power backup</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="swimmingpool" id="checkboxOneInput29"/>
                        <label className='label' for="checkboxOneInput29"><FaSwimmer size='50rem'/></label>
                        <p>Swimming pool</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="tabletennis" id="checkboxOneInput30"/>
                        <label className='label' for="checkboxOneInput30"><FaTableTennis size='50rem'/></label>
                        <p>Table Tennis</p>
                      </div>
                  </div>
                  <div className='inputgrp'>
                    
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="dailynewspaper" id="checkboxOneInput31"/>
                        <label className='label' for="checkboxOneInput31"><ImNewspaper size='50rem'/></label>
                        <p>Daily Newspaper</p>
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
				       <Link to="/Addimages">submit</Link> </button> 
            </div>
           
           
            </div>
            </div>
            </form>
          </div>
           
);



}

export default PGForm