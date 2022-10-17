import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { TextInput, Button, TouchableHighlight, Animated} from 'react-native-web'
import { useState } from 'react'
import { collection, query, where, getDocs, setDoc, updateDoc, doc, serverTimestamp, getDoc, } from "firebase/firestore";
import{db, auth} from './firebase'
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Entypo } from '@expo/vector-icons';
const ChatRoom = () => {
    const [username, setUsername] = useState("")
    const [user, setUser] = useState([null])
    const {currentUser}= useContext(AuthContext)
   const handleSearch = async () => {
    const q = query(collection(db, "userChats"), where("displayName", '==', username))

    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        setUser(doc.data())
        console.log(doc.id, " => ", doc.data());
       
       
});
    } catch (error) {
        
    }

   }


  return (
    <View>


    <View >
        <TouchableHighlight
        activeOpacity={1}
        underlayColor={'#ccd0d5'}
        onPress={handleSearch}
        style={styles.search_icon_box}
        >
            <AntDesign name="search1" size={24} color="black"  />
            
        </TouchableHighlight>

      

    
      <TextInput style={styles.input} placeholder="Trouver un utilisateur"   type="text" onChangeText={text => setUsername(text)} >
     
      </TextInput>
       
      <Button title="Rechercher"  />
     </View>
        <View>
            <TouchableOpacity onPress={{}}>
        {user&& <Text style ={styles.result}>{user.displayName}</Text>}
            </TouchableOpacity>
        </View>

     
    </View>
  )
}

const styles = StyleSheet.create({
   input : {
       
        fontSize : 16  ,
        opacity : 0.4,
        height : 40,
        borderRadius :5 , 
        marginVertical : 10,
        color :"grey" ,
        background : "none",
        backgroundColor : "white",
        padding : 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
    
        
     
      }, 
      search_icon_box:{
        width :40,
        height :40,
        borderRadius :40,
        backgroundColor: '#e4e6eb',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      input_box:{
        height :50,
        flexDirection:'row',
        alignItems : 'center',
        position:'absolute',
        top: 0,
        left: 0,
        backgroundColor:"white",
        //width: width - 32
      },
   
})



export default ChatRoom