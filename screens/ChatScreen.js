import { Text, TouchableOpacity, View, Image,SafeAreaView, StyleSheet,ScrollView } from 'react-native'
import React, { useState, useEffect, useLayoutEffect, useCallback, useRef, } from "react";
import Message from './Message';


import {query, collection, orderBy, onSnapshot, where}from 'firebase/firestore'
import{db, auth, useAuth,logout} from './firebase'
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import SendMessage from './SendMessage';
const Chat = ({}) =>{
const [messages, setmessages] = useState([])
const [loading, setLoading] = useState (false)

const scroll = useRef();
const user= useAuth(auth)

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
useEffect(() =>{
  const q = query(collection(db, 'messages'), orderBy('timestamp'))
  const unsubscribe = onSnapshot(q,(querySnapshot)=>{
    let messages= []
    querySnapshot.forEach((doc)=>{
      messages.push({...doc.data(),id: doc.id})
    })
    setmessages(messages)
    console.log(db)
  })
  return() => unsubscribe()
},[]);



  
const navigation = useNavigation();
  useLayoutEffect(() =>navigation.setOptions({
    headerRight: () =>(
      <TouchableOpacity  style={{marginRight:10}}
      >
<AntDesign name="logout" size={24} color="grey"  onPress={Logout}/>
      </TouchableOpacity>
    )
    
  })
  )
 

  return(
  
  <>
  <SafeAreaView style={styles.bg}>
    <ScrollView>
         {messages && messages.map((message)=>
      <Message key={message.id} message={message} />
    
    )}
 <SendMessage scroll={scroll} >

  </SendMessage>
    </ScrollView>
 

  </SafeAreaView>
 
 
    
  
  </>

  
  )
}

const styles = StyleSheet.create({
  

 

})
export default Chat
