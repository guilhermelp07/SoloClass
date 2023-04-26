import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomButton(props) {

    const navigator = useNavigation();

    return (
        <TouchableOpacity
            style={styles.botao}
            onPress={() => navigator.navigate(props.route)}
        >
            <Text style={styles.btnText}>{props.title}</Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    btnText: {
        fontSize: 26,
        color: '#fff'
    },
    botao: {
        width: 180,
        height: 60,
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#459C9C',
        margin: 20
    },
});