import { View, Text, StyleSheet } from 'react-native'
import { collection, query, where, onSnapshot, addDoc, Timestamp, orderBy, doc, getDoc} from "firebase/firestore";
import{db, auth} from './firebase'
import React,{useEffect, useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';
import UserList from './UserList';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import ChatRoom from './ChatRoom';
import MessageForm from './MessageForm';
import MessagesText from './MessagesText';
import Users from './Users';
import { message } from 'antd';
import { async } from '@firebase/util';
import Salon from './Salon';
import { useNavigation } from "@react-navigation/native";
const Home = () => {
    const [users, setUsers] = useState([])
    const [chat, setChat] = useState("") 
    const[text, setText] = useState("")
    const[msgs, setMsgs] = useState([])
    const {currentUser}= useContext(AuthContext)
    const user1 = auth.currentUser.uid
    useEffect(()=>{
        const userRef = collection(db, "userChats")
        const q = query(userRef, where("uid", 'not-in', [user1]))
      
        const unsub = onSnapshot(q,(querySnapshot)=>{
            let users = []
            querySnapshot.forEach((doc)=>{
                users.push(doc.data())
            })
            setUsers(users)
        })
        
        return() =>unsub()
       
       
    },[])
    
    const selectUser =(user)=>{
        setChat(user)
       
        console.log(user)

       
        const user2 = user.uid
        const id =  user1 > user2 ?  user1 + user2 : user2 + user1
        const msgRef = collection(db, 'messages', id, 'chat')
        const q = query(msgRef, orderBy('createdAt','asc'))

        onSnapshot(q,querySnapshot=>{
          let msgs = []
          querySnapshot.forEach((doc)=>{
            msgs.push(doc.data())
          })
          setMsgs(msgs)
        
        })

         
      };
const navigation = useNavigation();
      const emptyChatroom = async ()=>{
        
       
       /* setChat(user)
       
        const user2 = chat.uid
        await addDoc(collection(db, 'chatRoom'), {
          text,
          createdAt : Timestamp.fromDate(new Date())
        })*/
        
        
      }

      const joinChatroom = async(e) =>{
        await addDoc(collection(db, 'messages'), {
          text,
          
          createdAt : Timestamp.fromDate(new Date())
        })
        setText("");
      }
      
      console.log(msgs) 
      const handleSubmit = async (e) =>{
        
        e.preventDefault()
        const user2 = chat.uid
        const id = user1 > user2 ?  user1 + user2 : user2 + user1                                               
        // user1 + user2 : user2 + user1
       // `${user1 + user2} ` : `${user2 + user1} `
        await addDoc(collection(db, 'messages', id, 'chat'), {
          text,
          from : user1,
          to: user2,
          createdAt : Timestamp.fromDate(new Date())
        })
        setText("");
      }

      
  return (
    <View style={styles.sideBar}>
       <View style={styles.navMenu}>
            
                <AntDesign name="user" color="#6c757d" size={24} style={styles.user}  onPress={{}}/>
          
           
                 <AntDesign name="message1" size={24} color="#6c757d" style={styles.message}  onPress={{}}/>
            
        </View>
      <View style={styles.sideBar1}> 
       
        
        <View style={styles.navView}>
            <Text style={styles.navTitle}>Utilisateurs</Text>
            <View>
                <ChatRoom></ChatRoom>
                {users.map((user)=>
                  <Users  onPress={selectUser} selectUser={selectUser}  key={user.uid} user={user}>  </Users> 
                  
                    )}
                    <TouchableOpacity onPress={{}}>
                      <Ionicons name="add" size={22} color="white" />
                    </TouchableOpacity>
                     
            </View>

            <TouchableOpacity onPress={emptyChatroom }>
        <Text>Salon </Text>
      </TouchableOpacity>
        </View>

      </View>
      <View style={styles.sideBar2}>
      {chat?(
        <>
        <View>

        
          <Text style={styles.userInner}>{chat.displayName}</Text>
          {msgs.length? msgs.map((msg,id)=><MessagesText key={id} msg={msg} user1={user1}/>):null}
        </View>
            <MessageForm handleSubmit={handleSubmit} text={text} setText={setText}></MessageForm>
        </>
          )

          :( <Text> Choississer un utilisateur</Text>)
        }
<>
 <Salon joinChatroom={joinChatroom} text={text} setText={setText}></Salon>
</>
       
     
      </View>



    
   
      
    </View>
  )
}

const styles = StyleSheet.create({
    sideBar: {
        flexDirection: "row",
    },
    sideBar1:{
        backgroundColor:"#343a40",
        width: "20%",
        color: "dark",
        height  : 890,
        flexDirection: "row",
        borderColor : "#343a40",
        borderWidth: "1px",
    },
    sideBar2:{
        backgroundColor:"#FFFFFF",
        width: "70%",
    },
    item:{
        color: "white",
    },
    navMenu:{
        flexDirection: "column",
        padding: 5,
        width : "3%",
        backgroundColor : "#495057",
      
    },
    user:{
        margin: 10,
        marginTop : 330,
    },
    
    message: {
        margin: 10,
    },
    navView:{
        padding: 10,
        width : "80%",
    },
    navTitle:{
        fontSize: 25 ,
        color: "dark",
    },
  
      userInner:{
        color:"white",
        
      }

})

export default Home