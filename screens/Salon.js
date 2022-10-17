import { View,  StyleSheet } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-web'
import { FontAwesome } from '@expo/vector-icons';
const Salon = ({joinChatroom,text, setText}) => {

  return (
    <View style={styles.msBox}>
      <TextInput  style={styles.input}  type="text" placeholder="Message" value={text} onChange={e=>setText(e.target.value)} >
     </TextInput>
      <TouchableOpacity onPress={joinChatroom} style={styles.btnSend}  >
     
      <FontAwesome style={styles.send}name="send" size={24} color="#ced4da" />
      </TouchableOpacity>

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
     
      
    }
    
  })

export default Salon