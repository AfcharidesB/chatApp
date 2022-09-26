import { Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState, useEffect, useLayoutEffect, useCallback, useRef } from "react";
import Message from './Message';
import { GiftedChat } from 'react-native-gifted-chat';
import {query, collection, orderBy, onSnapshot, where}from 'firebase/firestore'
import{db, auth, useAuth} from './firebase'
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import SendMessage from './SendMessage';
const Chat = ({}) =>{
const [messages, setmessages] = useState([])

const scroll = useRef();
const user= useAuth(auth)

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
<AntDesign name="logout" size={24} color="grey" />
      </TouchableOpacity>
    )
    
   
    
  })
  )
 

  return(
  
  <>
  <main>
    {messages && messages.map((message)=>
        <Message key={message.id} message={message} />
    
    )}

  </main>
 
  <SendMessage scroll={scroll}>

  </SendMessage>
    
  
  </>

  
  )
}

export default Chat
