import { View, Text } from 'react-native'

import React,{useEffect, useState} from 'react'
const UserSelect = (user) => {
  const [chat, setChat] = useState("") 
  setChat(user)
  console.log(user.target.innerText)
            
            

  return (
    <View>
        
    </View>
  )
}

export default UserSelect