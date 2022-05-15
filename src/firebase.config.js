import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCiBJzGhDn1Cwuwl9IyW4_g13c2UybXVWs",
  authDomain: "rent-easy-22cc5.firebaseapp.com",
  projectId: "rent-easy-22cc5",
  storageBucket: "rent-easy-22cc5.appspot.com",
  messagingSenderId: "509039685885",
  appId: "1:509039685885:web:99c93b28d7ba7021048e94"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);

