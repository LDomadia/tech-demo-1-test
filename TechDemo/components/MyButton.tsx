import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const MyButton = (props: any) => {

    // PRIMARY
    const primaryContainer = {
        backgroundColor: '#133C55',
        paddingHorizontal: 32,
        paddingVertical: 12,
        width: 150,
        borderRadius: 32
    }
    const primaryText = {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    }

    // SECONDARY
    const secondaryContainer = {
        backgroundColor: 'white',
        paddingHorizontal: 32,
        paddingVertical: 12,
        width: 150,
        borderRadius: 32,
        borderColor: '#133C55',
        borderWidth: 2
    }
    const secondaryText = {
        color: '#133C55',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    }

    let buttonContainer = {};
    let buttonText = {};
    if (props.type == 'primary') {
        buttonContainer = primaryContainer;
        buttonText = primaryText;
    }
    else if (props.type == 'secondary') {
        buttonContainer = secondaryContainer;
        buttonText = secondaryText;
    }
    return (
        <Pressable style={[buttonContainer]} onPress={() => {console.log()}}>
        <Text style={[buttonText]}>{props.text}</Text>
        </Pressable>
    )
}

export default MyButton;