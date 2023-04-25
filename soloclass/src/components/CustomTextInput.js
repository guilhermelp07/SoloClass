import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, StyleSheet } from "react-native";

export default function CustomTextInput(props) {

    const navigator = useNavigation();

    return (
        <TextInput
            style={styles.textInput}
        />
    );

}

const styles = StyleSheet.create({
    textInput: {
        width: 250,
        height: 70,
        borderRadius: 5,
        borderColor: '#aaa',
        borderWidth: 2,
        backgroundColor: '#fff',
        margin: 10
    }
});