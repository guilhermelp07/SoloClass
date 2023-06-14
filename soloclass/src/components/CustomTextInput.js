import { useNavigation } from "@react-navigation/native";
import { TextInput, StyleSheet } from "react-native";

export default function CustomTextInput(props) {

    const navigator = useNavigation();

    return (
        <TextInput
            style={styles.textInput}
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}
            onBlur={props.onBlur}
            value={props.value}
        />
    );

}

const styles = StyleSheet.create({
    textInput: {
        width: 270,
        height: 50,
        borderRadius: 5,
        borderColor: '#aaa',
        fontFamily: 'QuickSand',
        borderWidth: 2,
        backgroundColor: '#fff',
        margin: 10,
        fontSize: 20,
        paddingLeft: 12
      },
})