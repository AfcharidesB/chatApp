
import { StyleSheet, View , Text} from 'react-native'

import { useAuth} from "./firebase"
import { collection, query, where, onSnapshot, addDoc, Timestamp, orderBy, doc, getDoc} from "firebase/firestore";
import{db, auth} from './firebase'
import React,{useEffect, useState} from 'react'
const Message =({message, user1, user})=>{
  


 

    return(
      

       
      < View style={[styles.message, {backgroundColor : message.from ===user1 ? "#e76f51" : " ",
      width: "30%",
      marginRight :  message.from ===user1 ? 0 : 200,
      marginLeft : message.from ===user1 ? 270 : 0,
      marginTop :  message.from ===user1 ? 25 :0,
      borderRadius: 5,
      
      }]}>
        <Text ></Text>
        <Text style={[styles.text,{color :  message.from ===user1 ? "dark" : "dark",
        textAlign:"right",
        marginLeft :  message.from ===user1 ? 0 : 0,
        fontSize : 15  ,
        backgroundColor :  message.from ===user1 ? "#e76f51" : " #2f3e46"
      
      }, ]}>{message.text}  </Text>

      
      </ View>

    )
}


const styles = StyleSheet.create({
  message: {    
    width: '100%', 
    paddingVertical: 3, 
    paddingHorizontal: 10, 
    flexDirection : 'row', 
    alignItems : 'center', 
    proudContent : 'flex-start' ,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
},
mail:{
  color:"grey",
  fontSize: 12  ,
}



} )
    



export default Message