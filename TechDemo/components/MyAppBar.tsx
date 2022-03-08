import React from "react";
import { View, StyleSheet } from "react-native";

export type Props = {

}

const MyAppBar: React.FC<Props> = ({}) => {
    return (
        <View style={styles.container}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        height: 40
    }
});

export default MyAppBar;