import React, { useState } from "react";
import {  TextInput, StyleSheet, View, Text, TouchableOpacity  } from 'react-native'
import {signUp,login, logout, useAuth, auth, db, storage} from "./firebase"
import{ setDoc, doc} from 'firebase/firestore'
import App from "../App";
import { useNavigation } from "@react-navigation/native";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
const LoginScreen = () => {

const [email, setEmail] = useState ('')
const [motdepasse, setMotdepasse] = useState ('')
const [name, setName] = useState('')
const [loading, setLoading] = useState (false)
//const currentUser = useAuth();
const navigation = useNavigation();
/*
 async function Login (){
  setLoading (true)
  try {
    await signUp(email, motdepasse)
   
  } catch  {
    alert ("Email déja utilisé")
  }
  setLoading (false)
}
*/
async function Signin (){
  setLoading (true)
  
  try {
    
    await signUp(email, motdepasse)
    
    navigation.navigate("ChatRoom")
    

  } catch  {
    alert ("Email déja utilisé")
  }

  try {
    const {uid, email}=  auth.currentUser
    //await setDoc(doc(db, "userChats",uid),{})
    await setDoc(doc(db, "userChats", uid), {
      displayName: name,
      email: email,
      uid
    });
    console.log("Document written with ID: ");
    alert(name)
  } catch (e) {
    console.error("Error adding document: ", );
  } 
 
 
  
  setLoading (false)
  const storageRef = ref(storage, name);
  
  const uploadTask = uploadBytesResumable(storageRef);
  

  uploadTask.on(
    
    (error) => {
      // Handle unsuccessful uploads
    }, 
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
       await updateProfile({
        displayName: name,
        photoURL: downloadURL,
       })
      });
    }
    
  );
  
}



  return(
      
    
    <View>

      
        <View style={styles.container}>
    <Text style={styles.textTitle}>Créer un compte</Text>
    <TextInput type="file" placeholder="Photo"></TextInput>
    <TextInput placeholder="Nom d'utilisateur" style={styles.input} value = {name} onChangeText = {text => setName(text)}/>
     <TextInput placeholder="Email" style={styles.input} value = {email} onChangeText = {text => setEmail(text)}>

     </TextInput>
    
     <TextInput placeholder="Mot de passe" style={styles.input} secureTextEntry  value = {motdepasse} onChangeText = {text => setMotdepasse(text)}>

</TextInput>

    </View>

    <View style={styles.buttonContainer}>
    <TouchableOpacity
      onPress={Signin}
      style={styles.buttonContainer}
      >

      <Text style = {styles.buttonText}> créer</Text>

      
      </TouchableOpacity>


 
      

  

     


    </View>

    </View>
  

  )
}

const styles = StyleSheet.create({

  container : {
   
    alignItems : "center",
    marginTop : 100 ,
    

  },
  Screens:{
backgroundColor : "darkGray",
  },


  textTitle :{
    fontSize : 20,
    textAlign : "center",
    marginBottom : 50,
    
  },


  input : {
    width : "90%",
    fontSize : 16  ,
   
    height : 40,
    borderRadius :5 , 
    
    marginVertical : 10,
    color :"grey" ,
    background : "none",
    backgroundColor : "white",
    padding : 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,

    
 
  }, 

  buttonContainer :{
    alignItems :"center" ,
    
    
  },


  buttonOutlineText : {
    color : "#0782F9",
    
    fontSize : 16,


  },
buttonText : {
  color : "white",
  marginTop : 30,
  fontSize : 16,
  backgroundColor : "#4267B2",
  alignItems : "center",
 
   padding : 5,
   margin: 20,
   
   shadowColor: "#000",
   shadowOffset: { width: 2, height: 2 },
   shadowOpacity: 0.5,
   shadowRadius: 3.84,
},

choiceText : {
  color : "grey",
 
  marginBottom  : -250, 
 
  
}




})

export default LoginScreen;