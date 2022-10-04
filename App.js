import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import UserProfil from './screens/UserProfil';
import ChatScreen from './screens/ChatScreen';
import Register from './screens/Register'
import ChatRoom from './screens/ChatRoom';

import { useContext } from 'react';
import { AuthProvider, AuthContext  } from './screens/AuthContext';
import Users from './screens/Users';


 



const Stack = createNativeStackNavigator();

const App = () => {
 const {currentUser} = useContext(AuthContext)
 console.log(currentUser)

 
  return (
    <NavigationContainer>
    

      <AuthProvider>
      <Stack.Navigator  >
      
   
      <Stack.Screen  name="Accueil"component={LoginScreen} options ={{headerShown: false}} />
       <Stack.Screen name="Register" component={Register} />
       <Stack.Screen name="ChatRoom" component={ChatRoom} />
     <Stack.Screen name="Profile" component={UserProfil}  />
      <Stack.Screen name="Chat" component={ChatScreen} />
         <Stack.Screen name="UserList" component={Users} />
     


      </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>

  );

};





export default App;
