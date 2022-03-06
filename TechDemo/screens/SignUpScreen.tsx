import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MyButton from '../components/MyButton';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
        <MyButton text="Sign Up" type="primary" size="large" />
    </View>
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
