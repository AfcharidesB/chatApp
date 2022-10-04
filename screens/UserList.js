import { View, Text } from 'react-native'
import React from 'react'

const UserList = ({user}) => {
  return (
    <View>
      <Text>{user.displayName}</Text>
    </View>
  )
}

export default UserList