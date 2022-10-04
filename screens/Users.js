import { View, Text, Button } from 'react-native'
import React,{useEffect, useState} from 'react'
import{db, auth} from './firebase'
import { collection, query, where, getDocs, setDoc, updateDoc, doc, serverTimestamp, getDoc, onSnapshot, QuerySnapshot} from "firebase/firestore";
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import UserList from './UserList';
import { async } from '@firebase/util';
const Users = () => {
    const [users, setUsers] = useState([null])
    const {currentUser}= useContext(AuthContext)
    const printUsers = (async () =>{
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('displayName', '!=', [auth.currentUser.displayName]))
        let users = []
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(doc =>{
            setUsers(doc.data())
            console.log(doc.id, " => ", doc.data());
            })
           
        
       
        } catch (error) {
            
        }
       
   }
  )


  return (
    <View>
        {
            users.map(user =><Text key={user} user={user} >{user}</Text>)
        }
        
       
     <Button title='Voir les amis ' onPress={printUsers}></Button>
    </View>
    
  )
   
}

export default Users
