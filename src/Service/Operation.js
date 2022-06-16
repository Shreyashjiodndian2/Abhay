import {db} from '../firebase.config' 
import { getDoc , getDocs, updateDoc, deleteDoc,query, doc, collection, addDoc, where } from 'firebase/firestore'
import { setDoc } from "firebase/firestore"; 
import { useState,useContext } from 'react';
import {UserContext, UserState} from '../Context/UserContext'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const userdetailsref = collection(db, "UserDetails");
const hostelobjectref = collection(db, "HostelObject");
const rentobjectref = collection(db, "RentObject");
var dataofhostel =  [];
var completedsignal = false

async function  update(obj) {
    
    console.log("udpare running")

    await addDoc(hostelobjectref, obj);  
    
    return true;

}


async function  updateforrent(obj) {
    
    console.log("update is for rent running")

    await addDoc(rentobjectref, obj);  
    
    return true;

}




class UserOperations
{
    add = (data, id)=>{
        // return addDoc(userdetailsref,data)
        return setDoc(doc(db, 'UserDetails', id), data);
    }
}


export default new UserOperations()
export {update,updateforrent}