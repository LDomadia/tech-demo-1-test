import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      {/* <Button title='Hi There' onPress={() => {}} color='#133C55'></Button> */}
      <Pressable style={styles.buttonBack} onPress={() => {console.log('hi')}}>
        <Text style={styles.buttonFore}>Hi There!</Text>
        </Pressable>
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
  buttonBack: {
    backgroundColor: '#133C55',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 32
  },
  buttonFore: {
    color: 'white',
    fontWeight: 'bold'
  }
});
