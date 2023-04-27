import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native"

import Styles from "../../styles/Styles";

export default function Config(){

    return(
        <View style={Styles.container}>
            <Text>Configurações</Text>
        </View>
    );
}