import React, { useState } from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from '../components/MyButton';
import MyField from '../components/MyField';
import { signUpWithEmail } from '../services/firebase';
import MyAppBar from '../components/MyAppBar';


export default function SignUpScreen() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
      <MyField title='First Name' type='text' onChangeFn={setFName} />
      <MyField title='Last Name' type='text' onChangeFn={setLName} />
      <MyField title='Email' type='text' onChangeFn={setEmail} />
      <MyField title='Password' type='text' onChangeFn={setPassword} />
        <MyButton text="Sign Up" type="primary" size="large" onPressFn={() => { signUpWithEmail(fName, lName, email, password); } } />
        <View style={{height: Dimensions.get('screen').width * 0.05}}></View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
