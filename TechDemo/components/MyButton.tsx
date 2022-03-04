import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const MyButton = (props: any) => {
    if (props.type == 'primary') {
        return (
            <Pressable style={styles.buttonBackPrimary} onPress={() => {console.log('Primary')}}>
                <Text style={styles.buttonForePrimary}>{props.text}</Text>
            </Pressable>
        )
    }
    if (props.type == 'secondary') {
        return (
            <Pressable style={styles.buttonBackSecondary} onPress={() => {console.log('Secondary')}}>
                <Text style={styles.buttonForeSecondary}>{props.text}</Text>
            </Pressable>
        )
    }
    return (
        <Pressable onPress={() => {console.log()}}>
        <Text >{props.text}</Text>
        </Pressable>
    )
}

export default MyButton;

const styles = StyleSheet.create({
    buttonBackPrimary: {
      backgroundColor: '#133C55',
      paddingHorizontal: 32,
      paddingVertical: 12,
      width: 150,
      borderRadius: 32
    },
    buttonForePrimary: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16

    },
    buttonBackSecondary: {
      backgroundColor: 'white',
      paddingHorizontal: 32,
      paddingVertical: 12,
      width: 150,
      borderRadius: 32,
      borderColor: '#133C55',
      borderWidth: 2
    },
    buttonForeSecondary: {
      color: '#133C55',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16
    }
  });