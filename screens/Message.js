import React from 'react';
import { StyleSheet, View , Text} from 'react-native'
import { auth } from './firebase';
import { useAuth} from "./firebase"
import { GiftedChat } from 'react-native-gifted-chat';
const Message =({message})=>{
  const currentUser = useAuth()
    const isMyMessage =()=>{
        return  message.uid === auth.currentUser.uid 
    }


   
    return(
      

       
      < View style={[styles.message, {backgroundColor : isMyMessage() ? "#395dff" : "#e5e5ea ",
      width: "30%",
      marginRight : isMyMessage() ? 0 : 50,
      marginLeft : isMyMessage() ? 270 : 0,
      marginTop : isMyMessage() ? 25 :0,
      borderRadius: 5,
      
      }]}>
        <Text >{message.name}</Text>
        <Text style={[styles.text,{color : isMyMessage() ? "white" : "dark",
        textAlign:"right",
        marginLeft : isMyMessage() ? 0 : 0,
        fontSize : 16  ,
      
      }]}>{message.text}  {currentUser ?.text}</Text>
      </ View>

    )
}


const styles = StyleSheet.create({
  message: {    
    width: '100%', 
    paddingVertical: 3, 
    paddingHorizontal: 10, 
    flexDirection : 'row', 
    alignItems : 'center', 
    proudContent : 'flex-start' ,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
},

sent: { 
  backgroundColor : "#395dff",
  
},
received : {
  backgroundColor :"#e5e5ea ",
}

} )
    



export default Message