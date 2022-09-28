// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useState,useEffect}  from "react";
import {collection, getFirestore, getDocs} from "firebase/firestore"
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: "AIzaSyDUGp6zPeBRJDcVgzpKJ07SBE34BfH7Lyw",
  authDomain: "chatapp-6d7be.firebaseapp.com",
  projectId: "chatapp-6d7be",
  storageBucket: "chatapp-6d7be.appspot.com",
  messagingSenderId: "629177308164",
  appId: "1:629177308164:web:49b99abcc4509781e95151"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const  db = getFirestore(app);




export function signUp (email, password){
  return(
    createUserWithEmailAndPassword(auth,email, password)
  )

}


export function login (email, password){
  return(
    signInWithEmailAndPassword(auth,email, password)
    
  )

}

export function logout() {
  signOut(auth)
}

// Custom Hook
export function useAuth(){
  const [currentUser, setCurrentUser] = useState();
  

  useEffect(() =>{
   const unsub =onAuthStateChanged(auth, user => setCurrentUser(user))
   return unsub; 
  },[])
return currentUser;

}

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then ((result) =>{
    const name = result.user.displayName
    const email = result.user.email
    const profilePic = result.user.photoURL
    navigation.navigate("Profile")
    AsyncStorage.setItem("utilisateur",name)
    AsyncStorage.setItem("email",email)
   AsyncStorage.setItem("profilePhoto",profilePic)


  }).catch((error)=>{
    console.log(error)
  })
}

const facebookProvider = new FacebookAuthProvider()
export const signInwithFacebook =()=>{
  signInWithPopup(auth, facebookProvider).then((result) =>{
    const name = result.user.displayName
    const email = result.user.email
    const profilPic = result.user.photoURL
    localStorage.setItem("utilisateur",name)
    localStorage.setItem("email",email)
    localStorage.setItem("profilePhoto",profilPic)
  })
}



  

