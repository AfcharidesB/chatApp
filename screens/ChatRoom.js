import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { TextInput, Button} from 'react-native-web'
import { useState } from 'react'
import { collection, query, where, getDocs, setDoc, updateDoc, doc, serverTimestamp, getDoc, } from "firebase/firestore";
import{db} from './firebase'
import { TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
const ChatRoom = () => {
    const [username, setUsername] = useState("")
    const [user, setUser] = useState([null])
    const {currentUser}= useContext(AuthContext)
   const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", '==',  username))

    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        setUser(doc.data())
        console.log(doc.id, " => ", doc.data());
});
    } catch (error) {
        
    }
   
   }

   const handleSelect = async () => {
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid 
    try {
         const res = await getDoc(doc(db,"chats", combinedId))
         if(!res.exists()){
         
            await updateDoc(doc(db,"userChats", currentUser.uid)),{
            [combinedId+".userInfo"]: {
                uid:user.uid,
                displayName:user.displayName},
            [combinedId+".date"]: serverTimestamp()
         
           },
           await updateDoc(doc(db,"userChats", user.uid)),{
            [combinedId+".userInfo"]: {
                uid:currentUser.uid,
                displayName:currentUser.displayName},
            [combinedId+".date"]: serverTimestamp()
           }
        await setDoc(doc(db,"chats", combinedId), {messages : []});
           
         }
         console.log(res)
    } catch (error) {
        
    }
   setUser(null)
   setUsername("")
   }
   

  return (
    <View>
      <Text>ChatRoom</Text>
      <TextInput placeholder="Recherche"  type="text" onChangeText={text => setUsername(text)}></TextInput>
      <Button title="Recherche" onPress={handleSearch} />
       
        <View>
            <TouchableOpacity onPress={handleSelect}>
        {user&& <Text style ={styles.result}>{user.displayName}</Text>}
            </TouchableOpacity>
        </View>

     
    </View>
  )
}

const styles = StyleSheet.create({
    result:{
      
       
       
    }
})



export default ChatRoom