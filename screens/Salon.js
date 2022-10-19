import { View,  StyleSheet } from 'react-native'
import { collection, query, where, onSnapshot, addDoc, Timestamp, orderBy, doc, getDoc} from "firebase/firestore";
import { TextInput, TouchableOpacity } from 'react-native-web'
import{db, auth} from './firebase'
import { FontAwesome } from '@expo/vector-icons';
import React,{useEffect, useState} from 'react'
import Message from './Message';
import { message } from 'antd';
import UserList from './UserList';
const Salon = () => {
  const[text, setText] = useState("")
  const [messages, setmessages] = useState([])
  const [users, setUsers] = useState([])
  const user = auth.currentUser.email
  useEffect(() =>{
    const msgRef = collection(db, 'room')
    const q = query(msgRef, orderBy('createdAt','asc'))
    onSnapshot(q,querySnapshot=>{
      let messages = []
      querySnapshot.forEach((doc)=>{
        messages.push(doc.data())
      })
      setmessages(messages)
    
    })
   
   
  },[]);
 

  const joinChatroom = async(e) =>{
    await addDoc(collection(db, 'room'), {
      text,
      from : user1,
      createdAt : Timestamp.fromDate(new Date())
    })
    setText("");
  }
  useEffect(()=>{
    const userRef = collection(db, "userChats")
    const q = query(userRef)
  
    const unsub = onSnapshot(q,(querySnapshot)=>{
        let users = []
        querySnapshot.forEach((doc)=>{
            users.push(doc.data())
        })
        setUsers(users)
    })
    
    return() =>unsub()
   
   
},[])
console.log(users)

  return (

  <View>
    <View >
{messages && messages.map((message,id)=><Message key={id} message={message} user={user}></Message>)}

    </View>
  
    <View style={styles.msBox}>
      <TextInput  style={styles.input}  type="text" placeholder="Message" value={text} onChange={e=>setText(e.target.value)} >
     </TextInput>
      <TouchableOpacity onPress={joinChatroom} style={styles.btnSend}  >
     
      <FontAwesome style={styles.send}name="send" size={24} color="#ced4da" />
      </TouchableOpacity>

    </View>
    </View>
  )
}

const styles = StyleSheet.create({

    input : {
      width : 900,
      fontSize : 16  ,
     marginLeft:10,
      height : 40,
      marginTop:830,
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
      position: "absolute",
    },
     btnSend:{
     textAlign: "center",
      justifyContent : "center",
      alignItems : "center",
      marginTop: 11,
     padding: 10,
      marginTop:820,
      
    },
    send:{
      backgroundColor: "#588157",
      color : "white", 
      width: 50,
      height: 39,
      textAlign: "center",
     
      
    },
   
  
    
  })

export default Salon