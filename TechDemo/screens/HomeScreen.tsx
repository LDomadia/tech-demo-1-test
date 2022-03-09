import { View, Text, StyleSheet } from "react-native";
import { getFirstName } from "../services/firebase";

type ScreenProps = {
    navigation: any,
    route: any
}

// const firstName = async () => await getFirstName();

export default function HomeScreen({ navigation, route }: ScreenProps) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 40}}>Hi {route.params.firstName}</Text>
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
});