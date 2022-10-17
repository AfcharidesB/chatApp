import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MessagesText = ({msg}) => {

  return (
    <View>
        
      <Text style={styles.message}>
      {msg.text} 
      
        
      </Text>
     
      
     
    </View>
  )
}

const styles = StyleSheet.create({
    message:{
        color: "dark",
        fontSize: "15px",
        marginTop:20
    }
})
export default MessagesText