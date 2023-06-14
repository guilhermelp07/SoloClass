import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import ButtonStyles from "../styles/ButtonStyles";

export default function TextButton(props) {

    return (
        <TouchableOpacity
            style={props.style ? props.style : ButtonStyles.tButton}
            onPress={props.onPress}
        >
            <Text style={props.textStyle ? props.textStyle : ButtonStyles.tButtonText}>{props.title}</Text>
        </TouchableOpacity>
    );

}