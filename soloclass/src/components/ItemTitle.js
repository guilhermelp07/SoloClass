import { Text } from "react-native";
import Styles from "../styles/Styles";

export function ItemTitle(props){
    return <Text
        style={Styles.itemTitle}
    >
        {props.text}
    </Text>
}