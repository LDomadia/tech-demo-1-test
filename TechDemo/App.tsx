import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import StartUpScreen from './screens/StartUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartUp" component={StartUpScreen} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerStyle: {backgroundColor: '#133C55'}, headerTintColor: 'white', title: 'Sign Up'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
