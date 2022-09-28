import React, { useState } from "react";
import {  TextInput, StyleSheet, View,Image, Text, TouchableOpacity  } from 'react-native'
import { KeyboardAvoidingView } from "react-native-web";
import { LinearGradient } from 'expo-linear-gradient';
import {signUp,login, logout, useAuth, signInWithGoogle, signInwithFacebook} from "./firebase"
import App from "../App";
import { useNavigation } from "@react-navigation/native";


const UserProfil = () => {
    const navigation = useNavigation();
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

        <View>
           
            <Text style={styles.headerProfil}>
                Bienvenu sur votre Profile
                 
            </Text>
            <Text>connecter en tant que : {currentUser ?.email} </Text>
           
            <TouchableOpacity
      onPress={Logout}
      
      
      >

      <Text >Se déconnecter</Text>
  
      
      </TouchableOpacity>

      <TouchableOpacity
        onPress={messageView}
      
      
      >

      <Text >Messagerie</Text>
  
      
      </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  headerProfil:{
    
    textAlign: "center",
    fontSize : 15,
    fontWeight :50,
    marginTop: 50,

  }
})




export default UserProfil