import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

export function SoilProfile(props){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.data.profileName}</Text>
            <Text style={styles.text}>Limite inferior: {props.data.lowerLimit}</Text>
            <Text style={styles.text}>Limite superior: {props.data.upperLimit}</Text>
            <Text style={styles.text}>Ativ. humana: {props.data.humanActivity ? "Sim" : "Não"}</Text>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.btnDelete}
                    onPress={props.delete}
                >
                    <Text style={styles.btnText}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 5,
        padding: 7,
        borderRadius: 8,
        backgroundColor: '#DAFFF9',
        borderWidth: 2,
        borderColor: '#aaa'
    },
    title: {
        margin: 2,
        fontSize: 21,
        fontFamily: 'QuickSand-Bold'
    },
    text: {
        margin: 2,
        fontSize: 20,
        fontFamily: 'QuickSand',
        textAlign: 'left',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        backgroundColor: '#DAFFF9',
        borderColor: '#aaa',
        marginTop: 10
    },
    btnEdit: {
        height: 30,
        width: 80,
        borderRadius: 10,
        backgroundColor: '#459C9C',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    },
    btnDelete: {
        height: 30,
        width: 80,
        borderRadius: 10,
        backgroundColor: '#c22',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    },
    btnText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'QuickSand'
    }
});