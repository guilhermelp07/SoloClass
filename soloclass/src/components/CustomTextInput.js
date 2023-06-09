import { useNavigation } from "@react-navigation/native";
import { TextInput, StyleSheet } from "react-native";
import Styles from "../styles/Styles";

export default function CustomTextInput(props) {

    const navigator = useNavigation();

    return (
        <TextInput
            style={Styles.textInput}
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}
            onBlur={props.onBlur}
            value={props.value}
        />
    );

}