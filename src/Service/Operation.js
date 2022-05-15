import {db} from '../firebase.config' 
import { getDoc , getDocs, updateDoc, deleteDoc, doc, collection, addDoc } from 'firebase/firestore'

const userdetailsref = collection(db, "UserDetails");


class UserOperations
{
    add = (data)=>{
        return addDoc(userdetailsref,data)
    }
}

export default new UserOperations()