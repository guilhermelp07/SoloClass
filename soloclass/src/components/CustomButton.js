import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import ButtonStyles from "../styles/ButtonStyles";

export default function CustomButton(props) {

    const navigator = useNavigation();

    return (
        <TouchableOpacity
            style={ButtonStyles.botao}
            onPress={props.onPress}
        >
            <Text style={ButtonStyles.btnText}>{props.title}</Text>
        </TouchableOpacity>
    );

}