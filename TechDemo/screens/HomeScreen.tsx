import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button, Snackbar } from 'react-native-paper';

type ScreenProps = {
    navigation: any,
    route: any
}

export default function HomeScreen({ navigation, route }: ScreenProps) {
    const [text, setText] = React.useState("");
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 40}}>Hi {route.params.firstName}</Text>
            <TextInput 
            mode='outlined'
            autoComplete={false}
            label="Email"
            value={text}
            onChangeText={text => setText(text)}
            />
            <Button icon="camera" mode="contained" onPress={onToggleSnackBar}>
    Press me
  </Button>
  <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});