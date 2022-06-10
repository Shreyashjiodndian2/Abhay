import React, { useContext, useEffect,useState } from 'react';
import {db} from '../firebase.config' 
import { getDoc , getDocs, updateDoc, deleteDoc,query, doc, collection, addDoc, where } from 'firebase/firestore'
import { setDoc } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import { BrowserRouter as Router,Routes, Route, Link ,useHistory,useParams} from 'react-router-dom';
import { Button,Carousel,Card } from 'react-bootstrap';
import '../css/Form1.css'
import '../css/showproperty.css'


export default function ShowProperty() {

    const history = useHistory();
    const params = useParams();

    const [docsy, setdocsy] = useState(null)
    console.log("params.id",params.id)
    const [form, setform] = useState(null)

    const docRef = doc(db, 'HostelObject',params.id)

    

    // setTimeout(() => {
    //     if(cont.user == null)
    //     {
    //         history.push('/login')
    //     }
   
    // }, 3000);
    

    useEffect(async () => {
        
        getDoc(docRef).then((doc)=>{

            console.log("document = ",doc.data())
            setdocsy(doc.data())
        })
    
    }, [])
    


    return (
        <div>

          { docsy !== null ? 
              <>
              <Menu/>
            <Carousel style={{"width" : "1000px"}} >
            <Carousel.Item className='carouselclass'>
              <img
                className="d-block w-auto"
                src={docsy.images[0]}
                alt="First slide"
              />
              
            </Carousel.Item>
            <Carousel.Item className='carouselclass'>
              <img
                className="d-block w-auto"
                src={docsy.images[1]}
                alt="Second slide"
              />
          
              
            </Carousel.Item>
            <Carousel.Item className='carouselclass'>
              <img
                className="d-block w-auto"
                src={docsy.images[2]}
                alt="Third slide"
              />
          
             
            </Carousel.Item>
          </Carousel>
             

             
                        
                  <div className='contentlayout '>
                  <h4>Properties in {docsy.hosteldetails.inputs.hostelname}</h4>
                  <p><i class="fa fa-globe"></i>By Samnani Group<br/>
                    Dwarka-Nashik, Nashik
                  </p>
                  <h4 >Amenities</h4>
                    <div className='contentboxx'>
                        <div className='space-around'>
                             <div>
                               {docsy.topamenities.gym == true ? <img src={'images/ic_baseline-elevator.png'} alt="this is image" sizes="100" srcset=""/> : 'GYM= false'}
                             </div>
                             <div>{docsy.topamenities.lift == true ? <img src={'images/ic_baseline-elevator.png'}/> : 'lift= false'}
                             </div>
                             <div>{docsy.topamenities.powerbackup == true ? <img src={'images/electric-generator 1.png'}/> : 'powerbackup= false'}
                             </div>
                             <div>{docsy.topamenities.reservedparking == true ? <label className='label' for="checkboxOneInput26"><img src={'images/vector (7).png'}/></label> : 'reservedparking = false'}
                             </div>
                             <div>{docsy.topamenities.watersupply == true ? <img src={'images/healthicons_running-water-outline.png'}/>: 'watersupply = false'}
                             </div>
                          </div>                          
                    </div>


                    

                  <h4>Specifications of {docsy.hosteldetails.inputs.hostelname}</h4>
                  <div className='space-around'>
                      <div>
                       
                        <p className='specifications'>PG for girls</p>
                      </div> 
                      <div>
                       
                        <p className='specifications'>Available meals</p>
                      </div> 
                      <div>
                       
                        <p className='specifications'>Triple sharing rooms</p>
                      </div> 
                      <div>
                       
                        <p className='specifications'>under construction</p>
                      </div> 
                    </div>

                    <h4>About Ishwar Pratik Grand</h4>
                        <p>"Amidst the confluence of serenity and calmness, next to the dream city at Nashik
                           road near Inox cinemas is your idyllic abode. These select spacious and plush 2, 3 & 4 bedroom apartments 
                           are designed to ensure you have the luxury of space and utmost comfort. Two real estate giants Samnani Group </p>
                    <div className='space-around'>
                      <div>
                        <h5>Rent</h5>
                        <p>{docsy.roomdetails[0].rent}</p>
                      </div> 
                      <div>
                        <h5>Security Deposit</h5>
                        <p>{docsy.roomdetails[0].securitydeposit}</p>
                      </div> 
                      <div>
                        <h5>Meal Charge per month</h5>
                        <p>{docsy.otherpgdetails.mealchargepermonth}</p>
                      </div> 
                      <div>
                        <h5>status</h5>
                        <p>{docsy.roomdetails[0].rent}</p>
                      </div> 
                    </div>

                    {/* <div className='space-around'>
                      <div>
                        <h5>status</h5>
                        <p>under construction</p>
                      </div> 
                      <div>
                        <h5>status</h5>
                        <p>under construction</p>
                      </div> 
                      <div>
                        <h5>status</h5>
                        <p>under construction</p>
                      </div> 
                      <div>
                        <h5>status</h5>
                        <p>under construction</p>
                      </div> 
                    </div> */}


                    <h4>Photos of Ishwar Pratik Grand</h4>
                        <div className='contentboxx'>

                        {docsy.images.map((image,index)=>{

                            return(
                                <img className='propertyimg' src={image}/>
                            )

                        })} 
                        
                        
                        </div>

                    </div>

                    
                    </> : "not found"
}



        </div>
                    
);

}

