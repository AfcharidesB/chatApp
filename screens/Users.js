import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const User = ({user, selectUser}) =>{
  return(
    <View>
        <Text style={styles.userList} onPress={()=>selectUser(user)} >{user.displayName}</Text>
       
    </View>
  )
}


const styles = StyleSheet.create({
  userList:{
    color:"dark",
    fontSize:15,
    padding:10,
    borderBottomColor : "#343a40",
    borderBottomWidth : "1px",
    alignItems : "center",
    textAlign : "center",
    marginTop : 60,
    
    
  },
})
export default User