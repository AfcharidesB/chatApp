import React, { useState } from "react";
import {  TextInput, StyleSheet, View,Image, Text, TouchableOpacity  } from 'react-native'
import { KeyboardAvoidingView } from "react-native-web";
import { LinearGradient } from 'expo-linear-gradient';
import {signUp,login, logout, useAuth} from "./firebase"
import App from "../App";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {

const [email, setEmail] = useState ('')
const [motdepasse, setMotdepasse] = useState ('')
const [name, setName] = useState('')
const [loading, setLoading] = useState (false)
const currentUser = useAuth();
const navigation = useNavigation();
 async function Login (){
  setLoading (true)
  try {
    await signUp(email, motdepasse)
   
  } catch  {
    alert ("Email déja utilisé")
  }
  setLoading (false)
}

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
      
    
    <KeyboardAvoidingView>

      
        <View style={styles.container}>
    <Text style={styles.textTitle}>Créer un compte</Text>
    
     <TextInput placeholder="Email" style={styles.input} value = {email} onChangeText = {text => setEmail(text)}>

     </TextInput>
     <TextInput placeholder="Nom d'utilisateur" style={styles.input} value = {name} onChangeText = {text => setName(text)}>

     </TextInput>
     <TextInput placeholder="Mot de passe" style={styles.input} secureTextEntry  value = {motdepasse} onChangeText = {text => setMotdepasse(text)}>

</TextInput>

    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity
     onPress={Signin}
      style={styles.button}
      disabled={loading || currentUser}
      >

      <Text style = {styles.buttonText}>Créer </Text>
  
      
      </TouchableOpacity>


 
      

  

     


    </View>

    </KeyboardAvoidingView>
  

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
    fontWeight : 700,
    marginBottom : 50,
    
  },

  socials :{
   flex : 1 ,
   alignSelf : "center",
   flexDirection  : "row  ",
  width : "90%",
  justifyContent : "center",
  marginTop : 250 ,

  },

  buttonCreate : {
    color : "purple",
    fontWeight : 600,
    
    
  },



  input : {
    width : "50%",
    fontSize : 16  ,
    fontWeight : 500,
    height : 40,
    borderRadius :50 , 
    
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
    marginTop : 40,
    
  },

  button : {
    backgroundColor : '#4267B2',
    alignItems : "center",
   borderRadius : 50,
    padding : 10,
    margin: 20,
    width : "50%",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  }, 

  buttonGoogle  : {

    backgroundColor : '#DB4437',
    alignItems : "center",
    borderRadius : 50,
     padding : 5,
     margin: 20,
     width : "30%",
     shadowColor: "#000",
     shadowOffset: { width: 2, height: 2 },
     shadowOpacity: 0.5,
     shadowRadius: 3.84,
  },

 
  buttonFb : {
    
    flexDirection  : "row  ",
    backgroundColor : '#4895ef',
    alignItems : "center",
    justifyContent : "center",
    borderRadius : 50,
     padding :5 ,
     margin: 20,
     width : "30%",
     shadowColor: "#000",
     shadowOffset: { width: 2, height: 2 },
     shadowOpacity: 0.5,
     shadowRadius: 3.84,
  },
  
  buttonOutline :{
    marginTop : 5,
    backgroundColor : "white",
    borderColor : "#0782F9",
    borderWidth : 2,
    color : "#0782F9",
    fontWeight : 700,
    fontSize : 16,


  },
  buttonOutlineText : {
    color : "#0782F9",
    fontWeight : 700,
    fontSize : 16,


  },
buttonText : {
  color : "white",
  fontWeight : 700,
  fontSize : 16,
},

choiceText : {
  color : "grey",
  fontWeight : 700,
  marginBottom  : -250, 
  marginTop : 250,
  
}




})

export default LoginScreen;