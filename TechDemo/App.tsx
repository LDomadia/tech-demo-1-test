import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import MyButton from './components/MyButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';

function HomeScreen(props: any) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40}}>Hello</Text>
      <StatusBar style="auto" />
      <View style={{height: Dimensions.get('screen').width * 0.6}}></View>
      <View style={styles.fixToText}>
        <MyButton type="primary" text="Login" size="large"/>
        <View style={{height: Dimensions.get('screen').width * 0.05}}></View>
        <MyButton type="secondary" text="Sign Up" size="large" onPressFn={() => props.navigation.navigate("SignUp")}/>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
