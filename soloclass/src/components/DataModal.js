import { Modal, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import DataItem from "./DataItem";
import CustomButton from "./CustomButton";

export default function DataModal(props){
    return (
        <Modal
            visible={props.visible}
            transparent={true}
            animationType="fade"
        >
            <View style={styles.modal}>

                <Text style={styles.title}>Classificação do Solo</Text>

                <View style={styles.content}>
                    <DataItem title="Nome do Solo:" description={props.data.nomeSolo}/>
                    <DataItem title="Ordem:" description={props.data.ordem}/>
                    <DataItem title="Sub-ordem:" description={props.data.subOrdem}/>
                    <DataItem title="Grupo:" description={props.data.grupo}/>
                    <DataItem title="Sub-grupo:" description={props.data.subGrupo}/>
                </View>
                <CustomButton title="OK" onPress={props.closeModal}/>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#fff', //'#DAFFF9',
        borderRadius: 20,
        alignItems: 'center', //'flex-start',
        justifyContent: 'center',
        flex: 1,
        margin: 30,
        marginTop: 150,
        marginBottom: 120,
        borderWidth: 2,
        padding: 14,
        borderColor: '#aaa',
        shadowColor: '#000',
        shadowRadius: 10,
        elevation: 14,
      },
      content: {
        flex: 1,
        alignSelf: 'flex-start',
        alignContent: 'flex-start',
      },
      title: {
        margin: 20,
        marginBottom: 30,
        fontSize: 26,
        fontWeight: 'bold'
      }
})