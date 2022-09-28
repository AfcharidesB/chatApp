import React, { useState } from "react";
import {  TextInput, StyleSheet, View, Text, TouchableOpacity  } from 'react-native'

import {signUp,login, logout, useAuth} from "./firebase"
import App from "../App";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {

const [email, setEmail] = useState ('')
const [motdepasse, setMotdepasse] = useState ('')
//const [name, setName] = useState('')
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
    navigation.navigate("Profile")
  } catch  {
    alert ("Email déja utilisé")
  }
  setLoading (false)
}




  return(
      
    
    <View>

      
        <View style={styles.container}>
    <Text style={styles.textTitle}>Créer un compte</Text>
    
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