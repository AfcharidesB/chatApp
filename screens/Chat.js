import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
const Chat = () => {
    const [chats,setChats] = useState([])
    const {currentUser}= useContext(AuthContext)
    useEffect(() =>{
       const getChats = () =>{
        const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
            setChats(doc.data());
         });
 
         return () => {unsub()};
       } 
       currentUser.uid && getChats()
    },[currentUser.uid])

    console.log(Object.entries(chats))
  return (
    <View>
      <Text>Chat</Text>
    </View>
  )
}

export default Chat