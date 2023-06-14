import { Text, TouchableOpacity } from "react-native";
import ButtonStyles from "../styles/ButtonStyles";

export default function SmallButton(props){
    return (
        <TouchableOpacity
            style={props.style ? props.style : ButtonStyles.smallBtn}
            onPress={props.onPress}
        >
            <Text style={props.textStyle ? props.textStyle : ButtonStyles.smallBtnText}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
}