
import React, { useState } from 'react'
import { View,TextInput, Button, StyleSheet, } from 'react-native'
import{auth, db} from './firebase'
import{addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { Ionicons } from '@expo/vector-icons';

const SendMessage = ({scroll}) => {

    const [input, setinput] = useState('')
    const sendMessage = async (e)=>{
        e.preventDefault();
        if(input === ''){
            alert("Veuiller écrire un texte")

             return
        } 
         
         
        



        const {uid, displayName}=  auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text:input,   
            name:displayName,
            uid,
            timestamp: serverTimestamp(),
          
        })
  
        setinput('')
        scroll.current.scrollIntoView ({behaviour:'smooth'})
      
    }
  return (
    

    <View  style={styles.msBox}>
      <TextInput style={styles.input} value={input} type="text" onChangeText={text => setinput(text)} placeholder="Message">
     
      </TextInput>
         <Ionicons name="send" size={24} color="#28e6b4" onPress={sendMessage} />
      
    </View>
  ) 
}

const styles = StyleSheet.create({

  input : {
    width : "85%",
    fontSize : 16  ,
   marginLeft:10,
    height : 40,
    borderRadius : 50,
    marginVertical : 10,
    color :"black" ,
    background : "#c2f7e8",
    backgroundColor : "white",
    padding : 10,
    borderColor: "#28e6b4",
    borderWidth: 1,
    opacity : 0.5,

  }, 
  msBox:{
    flexDirection: "row",
    
  }
})

export default SendMessage