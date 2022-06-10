import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useContext,useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import {UserContext} from '../Context/UserContext'
import {Link} from "react-router-dom";
import '../css/Form1.css'
import RoomdetailsForm from './RoomdetailsForm';
import {formaction} from '../actions/action'
import { formreducer } from '../reducers/form1';

export default function Form1()
{

  const history = useHistory();

  const cont = useContext(UserContext)
  console.log("cont.user in hostelform = ",cont.user)
  
  useEffect(() => {
    
    

    
  
    
  }, [])

  setTimeout(() => {
    {/** 
    if(cont.user == null)
    {
      history.push('/login')
    }
    */}
  }, 4000);
  

  // use dispatch
  const dispatch = useDispatch(); 
  const mystate = useSelector((state) => state.formreducer)
  // console.log("mystate",mystate)

  // Hostel details usestates
  const [hosteldetails, sethosteldetails] = useState({})
  const [commonarea, setcommonarea] = useState({"living" : false, "kitchen" : false, "dininghall": false, "library" : false})

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
  const [security, setsecurity] = useState({'cctv' : false , 'gated' : false, 'security' : false, "biometric" : false})
  
  const securityinput = (e)=>{

    console.log('security input')
    console.log(e.target.value , e.target.checked);
    security[e.target.value] = e.target.checked;
    console.log(security)

  }


  // Furnishing in property
  const [furnishing, setfurnishing] = useState({"fridge" : false, 'washingmachine' : false , 'microwave' : false, 'waterpurifier' : false , 'tabletennis' : false , 'coffeemachine' : false , 'tv' : false ,"snackmachine" : false})
  
  const furnishinginput = (e)=>{

    console.log('furnishing input')
    console.log(e.target.value , e.target.checked);
    furnishing[e.target.value] = e.target.checked;
    console.log(furnishing)

  }

  // Services 
  const [services, setservices] = useState({'laundry' :  false , "housekeeping" : false, "wificonnectivity":false})
  
  const servicesinput = (e)=>{

    console.log('services input')
    console.log(e.target.value , e.target.checked);
    services[e.target.value] = e.target.checked;
    console.log(services)

  }

  // Top Amenities 
  const [topamenities, settopamenities] = useState({"gym" : false, 'watersupply': false, 'reservedparking' : false, 'lift': false, 'powerbackup' : false, 'swimmingpool' : false})
  
  const topamenitiesinput = (e)=>{

    console.log('topamenities input')
    console.log(e.target.value , e.target.checked);
    topamenities[e.target.value] = e.target.checked;
    console.log(topamenities)

  }

  // Other Hostel details
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

  // Room details 
  var idris = 10;
  
  const [inputList, setInputList] = useState([{rent : '', securitydeposit: "", securitydeposit2: "" ,singlesharing: false,doublesharing: false,triplesharing: false,threeplusharing: false, personalcupboard : false, tvinroom: false, tablechair: false, attachedbalocony:false, attachedbathroom:false, ac:false}]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    console.log("updated inputList = ",inputList)
  };

  const handleInputChange2 = (e, index) => {
    const { name, checked } = e.target;
    const list = [...inputList];
    list[index][name] = checked;
    setInputList(list);
    console.log("updated inputList = ",inputList)
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    console.log("after removal inputList = ",inputList)
  };

  const handleAddClick = async() => {
    await setInputList([...inputList, {rent : '', securitydeposit: "", securitydeposit2: "" ,singlesharing: false,doublesharing: false,triplesharing: false,threeplusharing: false, personalcupboard : false, tvinroom: false, tablechair: false, attachedbalocony:false, attachedbathroom:false, ac:false}]);
    console.log("after add = ", inputList)
  };

  
  // submitting the form

  const [finalform, setfinalform] = useState({})

  const submitted = async(e)=>{

    e.preventDefault();
    console.log("submitted" , finalform);

    
    const result = {"roomdetails" : inputList , "hosteldetails" : {"commonarea" : commonarea, "inputs" : hosteldetails}, "finalownerdetails" : finalownerdetails, "security" : security, "firnishing": furnishing, "services" : services, "topamenities": topamenities, "otherpgdetails": otherpgdetails, "addressdetails":addressdetails}

    console.log("result = ",result)

    dispatch(formaction(result))


    history.push('/Addimages')


 
  }


  

        return(

            <div className='backgroundimg'>
              <form>
              <div className='maindiv'>
                
            <div className='innerdivision'>

              <div>
                <h5 className='red'>*indicates a mandatory field</h5>
                <h4>Hostel Details</h4>
              <div className='HostelInfo'>
              <div className='space-around'>
                <input className='inputcss fulllength' id='inputid' name='hostelname' onChange={hostelinput} type='text ' placeholder="Hostel Name" required/>
                <br/>
                <input className='inputcss fulllength'id='inputid' name='totalbeds' onChange={hostelinput} type='text ' placeholder="Total No. of Beds required"/>
                <br/><br/>
                </div>
                
              <div className='space-around'>
                <div className='radiobuttongroup'>
                  <p id='pid'>Hostel is for</p>
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



                <div className='radiobuttongroup'>
                  <p id='pid'>Unmarried Couples Allowed?</p>
                    <div class="wrapper">
                          <input type="radio" onChange={hostelinput} name="pgfor" value='girls' id="option-8" />
                          <input type="radio" onChange={hostelinput} name="pgfor" value='boys' id="option-9"/>
                            <label for="option-8" class="option option-8">
                             
                                <span>Yes</span>
                                </label>
                            <label for="option-9" class="option option-9">
                              
                                <span>No</span>
                            </label>
                    </div>
                </div>

                 </div>     
                <br/> 
                <div className='dropdown'  style={{paddingLeft:"-3000px",width: "800px"}}>
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
 
                          

                



 
                          

                

{/* ///////////////////////////////////////////// Room details //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}                     
                <h4>Room Details</h4>   
                    
                { 
            inputList.map( (x,i)=>{
               idris = idris * 10;
        return (

          // <RoomdetailsForm i={i} idris = {idris} />
      <div className='HostelInfo'>
        
        <div className='space-around'>
                 <div className='button-groups'>
                  <p id='pid' className='commonarea'>Room Type{i+1}</p>
                  {i > 0 ? <img className='delet'  onClick={() => handleRemoveClick(i)} src={'images/dustbin.png'} alt="group"/> : ''}
                  </div>


                  {/* <div className='inputgrp'>
               
                      <div class="checkbox-example">
                        <input type="radio" name='sharing' value={x.singlesharing}
              onChange={e => handleInputChange(e, i)} id={i+10}/>
                        <label for={i+10}>Single Sharing</label>
                        <p>
                         
                        </p>
                        </div> 
                      <div class="checkbox-example">
                        <input type="radio" name='sharing' value={x.doublesharing}
              onChange={e => handleInputChange(e, i)} id={i+20}/>
                        <label for={i+20}>Double sharing</label>
                        
                        </div> 
                      <div class="checkbox-example">
                        <input type="radio" name='sharing' value={x.triplesharing}
              onChange={e => handleInputChange(e, i)} id={i+30}/>
                        <label for={i+30}>Triple sharing</label>
                
                        </div> 
                      <div class="checkbox-example">
                        <input type="radio" name='sharing' value={x.threeplusharing}
              onChange={e => handleInputChange(e, i)} id={i+40}/>
                        <label for={i+40}>3+ sharing</label>
                      
                    
                    </div>  
                </div> */}


                
{/* <div className='inputgrp'>
               
               <div class="checkbox-example">
                 <input type="radio"  value={x.singlesharing}
       onChange={e => handleInputChange(e, i)} id={i+20}/>
                 <label for={i+20}>Single Sharing</label>
                 <p>
                  <p className='hiddentext'> 
                 {i=i+10}
                 </p>
                 </p>
                 </div> 
               <div class="checkbox-example">
                 <input type="radio"  value={x.doublesharing}
       onChange={e => handleInputChange(e, i)} id={i+21}/>
                 <label for={i+21}>Double sharing</label>
                 <p className='hiddentext'>
                 {i=i+10}
                 </p>
                 </div> 
               <div class="checkbox-example">
                 <input type="radio"  value={x.triplesharing}
       onChange={e => handleInputChange(e, i)} id={i+22}/>
                 <label for={i+22}>Triple sharing</label>
                  <p className='hiddentext'> 
                 {i=i+10}
                 </p>
                 </div> 
               <div class="checkbox-example">
                 <input type="radio"  value={x.threeplusharing}
       onChange={e => handleInputChange(e, i)} id={i+23}/>
                 <label for={i+23}>3+ sharing</label>
                  <p className='hiddentext'> 
                 {i=i+10}  
                 </p>
             
             </div>  
         </div>  */}



                




                 
                      <br/>
                <div className='inputgrp inputgrproom'>
                      <div class="checkbox-example">
                        <input type="checkbox" name="singlesharing" value={x.singlesharing}
              onChange={e => handleInputChange2(e, i)} checked={x.singlesharing} id={idris+10}/>
                        <label for={idris+10}>Single Sharing</label>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" name="doublesharing" value={x.doublesharing}
              onChange={e => handleInputChange2(e, i)} checked={x.doublesharing} id={idris + 20}/>
                        <label for={idris + 20}>Double sharing</label>
                        
                      </div> 
                      <div class="checkbox-example">
                        <input type="checkbox" name="triplesharing" value={x.triplesharing}
              onChange={e => handleInputChange2(e, i)} checked={x.triplesharing} id={idris + 30}/>
                        <label for={idris + 30}>Triple sharing</label>
                        
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" name="threeplusharing" value={x.threeplusharing}
              onChange={e => handleInputChange2(e, i)} checked={x.threeplusharing} id={idris + 40}/>
                        <label for={idris + 40}>3+ sharing</label>
                      </div>
                      
                    </div> 
                       
                       </div>


              <div className='space-around'>
                       <input 
              onChange={e => handleInputChange(e, i)} id='inputid' value={x.rent} className='inputcss' type='text' name="rent"  placeholder="Rent"/>
                        <input  
              onChange={e => handleInputChange(e, i)} id='inputid' className='inputcss' value={x.securitydeposit}  type='text' name="securitydeposit"    placeholder="Security Deposit"/>  
                  </div>
                          <input className='inputcss shiftrgt' id='inputid' onChange={e => handleInputChange(e, i)} type='text' name='securitydeposit2' value={x.securitydeposit2}  placeholder="Total no. of rooms of this type"/>  
                        <br/>   
                    
                        <p id='pid' className='commonarea'>Facilities Offered</p>
                    <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={e => handleInputChange2(e, i)} checked={x.personalcupboard}  name="personalcupboard" id={idris + 50}/>
                        <label for={idris + 50}>Personal cupboard</label>
                        
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={e => handleInputChange2(e, i)} checked={x.tvinroom} name="tvinroom" id={idris + 60}/>
                        <label for={idris + 60}>TV in room</label>
                        
                      </div> 
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={e => handleInputChange2(e, i)} checked={x.tablechair} name="tablechair" id={idris + 70}/>
                        <label for={idris + 70}>Table chair</label>
                        
                      </div>                    
                    </div>    
                    <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={e => handleInputChange2(e, i)} checked={x.attachedbalocony} name="attachedbalocony" id={idris + 80}/>
                        <label for={idris + 80}>Attached balocony</label>
                        
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={e => handleInputChange2(e, i)} checked={x.attachedbathroom} name="attachedbathroom" id={idris + 90}/>
                        <label for={idris + 90}>Attached bathroom</label>
                        
                      </div> 
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={e => handleInputChange2(e, i)} checked={x.ac} name="ac" id={idris + 100}/>
                        <label for={idris + 100}>AC</label>
                        
                      </div>                    
                    </div>
                     <div>
                </div>     
              </div>
              
  );
})}
              <div className='continuebtn'>
              <button className='addnew'  onClick={handleAddClick}>+ Add new room type</button>
              </div>
              



{/* ///////////////////////////////////////////// Security Amenities //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}              
            <div className='icons'>
               
              
                <p className='iconheading'>Security Amenities</p>
                <div className='HostelInfo'>

                  <div className='inputgrp'>
                  <div class="checkbox-example">
                        <input type="checkbox" onChange={securityinput} value="cctv" id="checkboxOneInput9"/>
                        <label className='label' for="checkboxOneInput9"><img src={'images/bx_bx-cctv.png'} alt="group"/></label>
                        <p>CCTV</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={securityinput}  value="gated" id="checkboxOneInput10"/>
                        <label className='label' for="checkboxOneInput10"><img src={'images/Gate 1.png'}/></label>
                        <p>Gated</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={securityinput}  value="security" id="checkboxOneInput11"/>
                        <label className='label' for="checkboxOneInput11"><img src={'images/Group.png'}/></label>
                        <p>Security</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={securityinput}  value="biometric" id="checkboxOneInput12"/>
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
                        <input type="checkbox" onChange={furnishinginput} value="fridge" id="checkboxOneInput13"/>
                        <label className='label' for="checkboxOneInput13"><img src={'images/cil_fridge.png'}/></label>
                        <p>Fridge</p>
                      </div>
                      
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="washingmachine" id="checkboxOneInput14"/>
                        <label className='label' for="checkboxOneInput14"><img src={'images/mdi_washing-machine.png'}/></label>
                        <p>Washing machine</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="microwave" id="checkboxOneInput15"/>
                        <label className='label' for="checkboxOneInput15"><img src={'images/whh_microwave.png'}/></label>
                        <p>Microwave</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="waterpurifier" id="checkboxOneInput16"/>
                        <label className='label' for="checkboxOneInput16"><img src={'images/filtration 1.png'}/></label>
                        <p>Water Purifier</p>
                      </div>
                     
                    </div> 
                     <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="tabletennis" id="checkboxOneInput17"/>
                        <label className='label' for="checkboxOneInput17"><img src={'images/vector (4).png'}/></label>
                        <p>Table Tennis</p>
                      </div>
                      
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="coffeemachine" id="checkboxOneInput18"/>
                        <label className='label' for="checkboxOneInput18"><img src={'images/Group 249.png'}/></label>
                        <p>Coffee machine</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox"  onChange={furnishinginput} value="tv" id="checkboxOneInput19"/>
                        <label className='label' for="checkboxOneInput19"><img src={'images/Vector (5).png'}/></label>
                        <p>TV</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={furnishinginput} value="snackmachine" id="checkboxOneInput20"/>
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
                        <input type="checkbox" onChange={servicesinput} value="laundry" id="checkboxOneInput21"/>
                        <label className='label' for="checkboxOneInput21"><img src={'images/laundryy.png'}/></label>
                        <p>Laundry</p>
                      </div>
                      
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={servicesinput} value="housekeeping" id="checkboxOneInput22"/>
                        <label className='label' for="checkboxOneInput22"><img src={'images/Vector (11).png'}/></label>
                        <p>House keeping</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={servicesinput} value="wificonnectivity" id="checkboxOneInput23"/>
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
                        <input type="checkbox" onChange={topamenitiesinput} value="gym" id="checkboxOneInput24"/>
                        <label className='label' for="checkboxOneInput24"><img src={'images/Group (1).png'}/></label>
                        <p>Gym</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="watersupply" id="checkboxOneInput25"/>
                        <label className='label' for="checkboxOneInput25"><img src={'images/healthicons_running-water-outline.png'}/></label>
                        <p>Water Supply</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="reservedparking" id="checkboxOneInput26"/>
                        <label className='label' for="checkboxOneInput26"><img src={'images/vector (7).png'}/></label>
                        <p>Reserved Parking</p>
                      </div>
                     
                    </div> 
                    <div className='inputgrp'>
                      <div class="checkbox-example">
                        <input type="checkbox"  onChange={topamenitiesinput} value="lift" id="checkboxOneInput27"/>
                        <label className='label' for="checkboxOneInput27"><img src={'images/ic_baseline-elevator.png'}/></label>
                        <p>Lift</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="powerbackup" id="checkboxOneInput28"/>
                        <label className='label' for="checkboxOneInput28"><img src={'images/electric-generator 1.png'}/></label>
                        <p>Power backup</p>
                      </div>
                      <div class="checkbox-example">
                        <input type="checkbox" onChange={topamenitiesinput} value="swimmingpool" id="checkboxOneInput29"/>
                        <label className='label' for="checkboxOneInput29"><img src={'images/Vector (9).png'}/></label>
                        <p>Swimming pool</p>
                      </div>
                     
                    </div> 
                </div>

            </div>


{/* ///////////////////////////////////////////// Other Hostel detials //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/} 
          
{/* ///////////////////////////////////////////// Address Details //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/} 

            <h4>Address Details</h4>
            <div className='HostelInfo'>

            <input id='inputid' className='inputcss fulllength' onChange={addressdetailsinput} name='city' type='text' placeholder="City *" required/>
            <input id='inputid' className='inputcss fulllength' onChange={addressdetailsinput} name='building' type='text' placeholder="Building/ Society *" required/>
            <input id='inputid' className='inputcss fulllength' onChange={addressdetailsinput} name='locality' type='text' placeholder="Locality *" required/>
            <input id='inputid' className='inputcss fulllength' onChange={addressdetailsinput} name='state' type='text' placeholder="State *" required/>
             
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


