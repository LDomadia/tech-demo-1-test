import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
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
    {/* <MyAppBar title='Sign Up' leadingIcon='arrow-back-sharp' /> */}
    <View style={styles.container}>
      <MyField title='First Name' type='text' onChangeFn={setFName} />
      <MyField title='Last Name' type='text' onChangeFn={setLName} />
      <MyField title='Email' type='text' onChangeFn={setEmail} />
      <MyField title='Password' type='text' onChangeFn={setPassword} />
      <MyButton text="Sign Up" type="primary" size="large" onPressFn={() => { signUpWithEmail(fName, lName, email, password); } } />
    </View>
    </>
  );
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
