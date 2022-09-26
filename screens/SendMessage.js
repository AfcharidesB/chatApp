
import React, { useState } from 'react'
import { View,TextInput, Button, StyleSheet} from 'react-native-web'
import{auth, db} from './firebase'
import{addDoc, collection, serverTimestamp} from 'firebase/firestore'

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
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setinput('')
      
    }
  return (

    <View>
      <TextInput style={styles.input} value={input} type="text" onChange={(e)=>setinput(e.target.value)} placeholder="Message">
      
      </TextInput>
         <Button title="Envoyer" onPress={sendMessage}>

        </Button>
       
  
 
 

 
  
    </View>
  ) 
}

const styles = StyleSheet.create({

  input : {
    width : "100%",
    fontSize : 16  ,
    fontWeight : 500,
    height : 40,
   
    marginVertical : 10,
    color :"grey" ,
    background : "none",
    backgroundColor : "white",
    padding : 10,
   

    
 
  }, 
})

export default SendMessage