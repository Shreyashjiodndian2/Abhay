import React from 'react'
import {db} from '../firebase.config'
import { useContext, useEffect, useState } from 'react'
import { getDoc , getDocs, updateDoc, deleteDoc,query, doc, collection, addDoc, where } from 'firebase/firestore'
import {pagesofhostel} from '../Service/Operation'
import {UserContext} from '../Context/UserContext'
import {AuthContext} from '../Context/AuthContext'

export default function Pagesofuser() {

    const cont = useContext(UserContext)
    console.log('user',cont.user)
    const [hosteldetailsofuser, sethosteldetailsofuser] = useState([])


    useEffect(async () => {

        
        console.log("inside if")

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
                sethosteldetailsofuser((prev)=> [...prev , doc.data()])

            });


        })
    }

    // sethosteldetailsofuser(details)


  return (
    <div>

        <h1>Hostel/PG FORMS OF USER</h1>
        <br/>
        <br/>
        <br/>
        <br/>

        {

            hosteldetailsofuser.length !== 0 ? hosteldetailsofuser.map((obj,index)=>{

            const value = obj.addressdetails.locality;
            const value2 = obj.hosteldetails.inputs.hostelname;
            const image1 = obj.images[0];
            const image2 = obj.images[1];

                return (

                    <>
                        <div key={index}>
                            <img style={{'width' : "200px", height:"auto"}} src={image1} alt=""/>
                            <img style={{'width' : "200px", height:"auto"}} src={image2} alt=""/>
                            <h1>{value}</h1>
                            <h1>{value2}</h1>
                        </div>

                        <hr/>
                    </>

                )


            }) : 'it is empty'

        }

    </div>
  )
}
