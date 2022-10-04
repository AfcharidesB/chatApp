import React, { useState } from "react";
import {  TextInput, StyleSheet, View,Image, Text, TouchableOpacity  } from 'react-native'

import {login, useAuth, signInWithGoogle, signInwithFacebook} from "./firebase"

import { useNavigation } from "@react-navigation/native";






const LoginScreen = () => {
const navigation = useNavigation();
//const currentUser = useAuth()
const [email, setEmail] = useState ('')
const [motdepasse, setMotdepasse] = useState ('')
const [name, setName] = useState('')


const [loading, setLoading] = useState (false)




async function Login (){
  setLoading (true)
  
  try {
    await login(email, motdepasse)
    
    navigation.navigate("UserList")
    
  } catch  {
    alert ("Utilisateur ou mot de passe incorrecte")
  }
  setLoading (false)
}



  return(
      
    
    <View style={styles.bg}>

      
        <View className="component bg-violet-500 hover:bg-violet-600 active:bg-violet-700">
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
     
      >

      <Text style = {styles.buttonText}>Se connecter</Text>
  
      
      </TouchableOpacity>
    
   

    
      
 
      <Text style={styles.choiceText}> Se connecter avec</Text>

  
<View style={styles.socials}>


   <TouchableOpacity
      onPress={{}}
      style={styles.buttonGoogle}
      >

      <Text style = {styles.buttonText}> Google</Text>

      
      </TouchableOpacity>

      <TouchableOpacity
      onPress={{}}
      style={styles.buttonFb}
      >

      <Text style = {styles.buttonText}> Facebook</Text>

      
      </TouchableOpacity>

      
      
</View>

<TouchableOpacity 
     
      onPress={() => navigation.navigate("Register")}
      style={styles.buttonContainer}
      
       >
<Text style={styles.buttonCreate}> Créer un nouveau compte </Text>

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
  bg:{
    backgroundColor : "#1b1f24",
    
  }
  ,
  Screens:{
backgroundColor : "darkGray",
  },


  textTitle :{
    fontSize : 20,
    textAlign : "center",
    color : "white",
    marginBottom : 50,
    marginTop : 50,
    
  },

  socials :{
    flexDirection : "row",
    alignSelf : "center",
    width : "90%",
    justifyContent : "center",
    marginTop : 250 ,

  },

  buttonCreate : {
    color : "purple",
    marginBottom : 150,
    
  },



  input : {
    width : "90%",
    fontSize : 16  ,
    opacity : 0.4,
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
    marginTop : 25,
    color : "#ffba08",
    
  },

  button : {
    backgroundColor : '#c2f7e8',
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

    backgroundColor : '#c2f7e8',
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
    backgroundColor : '#c2f7e8',
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
 
    fontSize : 16,


  },
  buttonOutlineText : {
    color : "#0782F9",
   
    fontSize : 16,


  },
buttonText : {
  color : "dark",
  fontSize : 16,
},

choiceText : {
  color : "grey",
  marginBottom  : -230, 
  marginTop : 150,
  
},




})

export default LoginScreen;