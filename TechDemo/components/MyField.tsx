import React, { useState } from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";

// https://www.npmjs.com/package/react-native-floating-label-input

export type Props = {
    title: string,
    type: string,
    onChangeFn: Function
}

const MyField: React.FC<Props> = ({ title, type, onChangeFn }) => {

    return ( 
        <View style={styles.container}>
            <Text>{title}</Text>
            <TextInput style={styles.input} autoCapitalize={"none"} onChangeText={(value) => onChangeFn(value)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,
        padding: 10,
    },
    container: {
        width: 300,
        height: 60,
        marginBottom: 20
    }
});

export default MyField;