import React , { useContext } from  'react';
import Slider from "react-slick";
import {
	Link
	
 } from "react-router-dom";
import '../css/FeaturedProject.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar,Nav,NavDropdown,Container,Card,Button,InputGroup,FormControl,Form,Table } from 'react-bootstrap';
import {db} from '../firebase.config'
import {  useEffect, useState } from 'react'
import { getDoc , getDocs, updateDoc, deleteDoc,query, doc, collection, addDoc, where } from 'firebase/firestore'
import {pagesofhostel} from '../Service/Operation'
import {UserContext} from '../Context/UserContext'
import {AuthContext} from '../Context/AuthContext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';




export default function FeaturedProject(props) {



  const cont = useContext(UserContext)
  console.log('user',cont.user)
  const [hosteldetailsofuser, sethosteldetailsofuser] = useState([])
  
  const history = useHistory()

  useEffect(async () => {

      
      console.log("inside if")
      console.log("constuid = ",cont.user.uid)
      fun();

  },[cont.user !== null])


  function fun()
  {
      new Promise(async (resolve , reject)=>{

          const hostelobjectref = collection(db, "HostelObject");
          const q = await query(hostelobjectref, where("userid", "==", `${cont.user.uid}`));

          const querySnapshot = await getDocs(q);

          querySnapshot.forEach(async (doc) => {
              

              console.log(doc.id, " => ", doc.data());
              let obj = {...doc.data(), objid : doc.id}
              console.log("OBJECT = ",obj)
              sethosteldetailsofuser((prev)=> [...prev , obj])

          });


      })
  }




    var settings = {
      dots: true,
      infinite: true,
      centerMode:false,
      speed: 500,
      slidesToShow:1 ,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      variableWidth:true,
      arrows:true
      };


      return (
     
     
     
       <>
     
     
     
     <Slider className='slider' {...settings}>
       {
     
         hosteldetailsofuser.length !== 0 ? 
         
         
         hosteldetailsofuser.map((obj,index)=>{
         
         const locality = obj.addressdetails.locality;
         const hostelname = obj.hosteldetails.inputs.hostelname;
         const ownername = obj.finalownerdetails.ownername;
         const image1 = obj.images[0];
         const image2 = obj.images[1];
         
             return (
         
                 <>
          
          <div className='outerbox'>
            <div  className='inbox'> 
            <img src={image1}/>
            <div className='featurealg'>
            <p>Dream Land</p>
            <button onClick={()=> history.push(`/showproperty/${obj.objid}`)} className='servicebtn'>view</button>
            </div>
            <h3> By {ownername}</h3>
                  <h3>{locality}</h3>
                  <h3>{hostelname}</h3>
            
            </div>
          </div>
          </>
    
        )

        
        
      }) : ''
    
    }
    </Slider>


        







          </>








      );
  }