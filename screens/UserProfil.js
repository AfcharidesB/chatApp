import React, { useState, useLayoutEffect } from "react";
import {  TextInput, StyleSheet, View,Image, Text, TouchableOpacity  } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {signUp,login, logout, useAuth, signInWithGoogle, signInwithFacebook} from "./firebase"
import App from "../App";
import { useNavigation } from "@react-navigation/native";


const UserProfil = () => {
    const navigation = useNavigation();
    useLayoutEffect(() =>navigation.setOptions({
      headerLeft: () =>(
        <TouchableOpacity onPress={Logout} style={{marginLeft:10}}>
          <AntDesign name="logout" size={24} color="#28e6b4" />
        </TouchableOpacity>
      ),
      headerRight: () =>(
        <TouchableOpacity onPress={messageView} style={{marginRight:10}}>
          <AntDesign name="message1" size={24} color="#28e6b4" />
        </TouchableOpacity>
      )

      
     
      
    })
    )
   const [loading, setLoading] = useState (false)
   // const [name, setName] = useState('')
    const currentUser = useAuth()
   async function Logout() {
        setLoading(true)
         try {
      
          await logout()
          navigation.navigate("Accueil")
         } catch  {
            alert("Erreur ! ")
         } 
         setLoading(false)
      }

      async function messageView() {
        navigation.navigate("Chat")
      }
      
    return(

        <View style={styles.bg}>
          
             <Image source={require('../assets/man.png')} style={styles.avatar} >
              
            </Image>
            <Text style={styles.name}>Afcharides Botsy</Text>
            <AntDesign name="calendar" size={40} color="#28e6b4" style={styles.calendar} />
       
            <AntDesign name="mail" size={40} color="#28e6b4" style={styles.mail}/>
            <Text>{currentUser ?.email}</Text>

            <TouchableOpacity style={styles.button}>

              <Text style = {styles.buttonText}>Modifier</Text>
            </TouchableOpacity>
         
           
            
        </View>
    )
}

const styles = StyleSheet.create({
 
  bg:{
    backgroundColor : "#1b1f24", 
   
  },
 
  avatar :{
    width: 100,
    height: 100,
    marginLeft: 150,
    marginTop: 150,
    marginBottom: 40
  }, 
  name:{
    marginLeft: 140,
    fontSize : 16  ,
    marginBottom: 50,
    color : "white",
   
  },
  calendar:{
    marginLeft: 50,
  },
  mail:{
    marginLeft: 50,
    marginTop:20,
  },

  buttonText : {
    color : "dark",
    fontSize : 16,
  },
  button : {
    backgroundColor : '#28e6b4',
    alignItems : "center",
   borderRadius : 50,
    padding : 10,
    margin: 20,
    width : "50%",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    marginLeft: 100,
    marginBottom: 300,
    marginTop: 200,
  }, 
 
  
})




export default UserProfil