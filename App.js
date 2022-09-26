import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import UserProfil from './screens/UserProfil';
import ChatScreen from './screens/ChatScreen';
import Register from './screens/Register'


 



const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator  >

      <Stack.Screen  name="Accueil"component={LoginScreen} options ={{headerShown: false}} />
       <Stack.Screen name="Register" component={Register} />
    
      <Stack.Screen name="Profile" component={UserProfil} options ={{headerShown: false}}  />

      <Stack.Screen name="Chat" component={ChatScreen} />
     


      </Stack.Navigator>
    </NavigationContainer>

  );

};





export default App;
