import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, StyleSheet } from "react-native";

export default function CustomTextInput(props) {

    const navigator = useNavigation();

    return (
        <TextInput
            style={styles.textInput}
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
        />
    );

}

const styles = StyleSheet.create({
    textInput: {
        width: 270,
        height: 60,
        borderRadius: 5,
        borderColor: '#aaa',
        borderWidth: 2,
        backgroundColor: '#fff',
        margin: 10,
        fontSize: 22,
        paddingLeft: 12
    }
});