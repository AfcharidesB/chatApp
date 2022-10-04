import { View, Text, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import{db, auth} from './firebase'
import { collection, query, where, getDocs, setDoc, updateDoc, doc, serverTimestamp, getDoc, onSnapshot, QuerySnapshot} from "firebase/firestore";
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import UserList from './UserList';
import { async } from '@firebase/util';

const Users = () => {
    const [users, setUsers] = useState([])
    const {currentUser}= useContext(AuthContext)
    useEffect(()=>{
        const userRef = collection(db, "userChats")
        const q = query(userRef, where("uid", 'not-in', [auth.currentUser.uid]))

        const unsub = onSnapshot(q,(querySnapshot)=>{
            let users = []
            querySnapshot.forEach((doc)=>{
                users.push(doc.data())
            })
            setUsers(users)
        })
        return() =>unsub()
    },[])
      console.log(users);   

     async function createRoom() {
        const {uid}=  auth.currentUser
        await setDoc(doc(db, "userChats", uid), {
           uid
          
            
          });
      }
          
       
      
       
        
      
       
   
  


  return (
    <View>
    
       
        <TouchableOpacity>
          {users.map((user)=>
                  <Text> {user.displayName}</Text> 
                    )}
        </TouchableOpacity>
    </View>
    
  )
   
}

export default Users
