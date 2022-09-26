import React, { useState } from "react";
import {  TextInput, StyleSheet, View,Image, Text, TouchableOpacity  } from 'react-native'
import { KeyboardAvoidingView } from "react-native-web";
import { LinearGradient } from 'expo-linear-gradient';
import {signUp,login, logout, useAuth, signInWithGoogle, signInwithFacebook} from "./firebase"
import App from "../App";
import { useNavigation } from "@react-navigation/native";





const LoginScreen = () => {
const navigation = useNavigation();
const currentUser = useAuth()
const [email, setEmail] = useState ('')
const [motdepasse, setMotdepasse] = useState ('')
const [name, setName] = useState('')


const [loading, setLoading] = useState (false)




async function Login (){
  setLoading (true)
  
  try {
    await login(email, motdepasse)
   
    navigation.navigate("Profile")
    alert("bouton appuyer")
  } catch  {
    alert ("Utilisateur ou mot de passe incorrecte")
  }
  setLoading (false)
}



async function Logout() {
  setLoading(true)
   try {

    await logout()
    localStorage.clear()
    
   } catch  {
      alert("Erreur ! ")
   } 
   setLoading(false)
}


  return(
      
    
    <KeyboardAvoidingView style={styles.bg}>

      
        <View style={styles.container}>
    <Text style={styles.textTitle}>Se connecter</Text>
   
     <TextInput placeholder="Email" style={styles.input} value = {email} onChangeText = {text => setEmail(text)}>

     </TextInput>
     <TextInput placeholder="Mot de passe" style={styles.input} secureTextEntry  value = {motdepasse} onChangeText = {text => setMotdepasse(text)}>

</TextInput>

    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity
      onPress={Login}
      style={styles.button}
      disabled = {loading ||currentUser }
      >

      <Text style = {styles.buttonText}>Se connecter</Text>
  
      
      </TouchableOpacity>
    <Text>connecter en tant que : {currentUser?.name}</Text>
    <Text>{localStorage.getItem("utilisateur")}</Text>
   
    <img src={localStorage.getItem("profilePhoto")} ></img>

    <TouchableOpacity
      onPress={Logout}
      disabled={loading || !currentUser}
      
      >

      <Text style = {styles.buttonText}>Se déconnecter</Text>
  
      
      </TouchableOpacity>
      
 
      <Text style={styles.choiceText}> Se connecter avec</Text>

  
<View style={styles.socials}>


   <TouchableOpacity
      onPress={signInWithGoogle}
      style={styles.buttonGoogle}
      >

      <Text style = {styles.buttonText}> Google</Text>

      
      </TouchableOpacity>

      <TouchableOpacity
      onPress={signInwithFacebook}
      style={styles.buttonFb}
      >

      <Text style = {styles.buttonText}><Image style={styles.logo} source={require('../assets/fb.png')} ></Image> Facebook</Text>

      
      </TouchableOpacity>

      
      
</View>

<TouchableOpacity 
     
      onPress={() => navigation.navigate("Register")}
      style={styles.buttonContainer}
      
       >
<Text style={styles.buttonCreate}> Créer un nouveau compte </Text>

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
  bg:{
    backgroundColor : "white",
    marginBottom : 40,
  }
  ,
  Screens:{
backgroundColor : "darkGray",
  },


  textTitle :{
    fontSize : 20,
    textAlign : "center",
    fontWeight : 700,
    color : "white",
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
    marginBottom : 50,
    
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
    marginTop : 25,
    color : "#ffba08",
    
  },

  button : {
    backgroundColor : '#ffba08',
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

    backgroundColor : '#ffba08',
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
    backgroundColor : '#ffba08',
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
  color : "dark",
  fontWeight : 700,
  fontSize : 16,
},

choiceText : {
  color : "grey",
  fontWeight : 700,
  marginBottom  : -250, 
  marginTop : 250,
  
},




})

export default LoginScreen;