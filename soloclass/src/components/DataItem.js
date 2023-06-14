import { StyleSheet, Text, View } from "react-native";

export default function DataItem(props){
    return (
        <View style={styles.item}>
            <Text style={styles.textLeft}>{props.title}</Text>
            <Text style={styles.textRight}>{props.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
      item: {
        flex: 1,
        width: 140,
        flexDirection: 'row',
        // backgroundColor: 'violet'
      },
      textLeft: {
        fontSize: 20,
        width: 130,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10,
        textAlign: 'left',
      },
      textRight: {
        fontSize: 20,
        // width: 0,
        marginLeft: 10,
        marginTop: 10,
        textAlign: 'right'
      }
})