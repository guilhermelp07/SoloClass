import { FlatList, Modal, View } from "react-native";
import { SoilProfile } from "../SoilProfile";
import Styles from "../../styles/Styles";
import SmallButton from "../SmallButton";
import { deleteProfile, getProfileListLength } from "../../data/DataRules";

export default function ProfileListModal(props){

    const closeModal = props.closeModal;
    const setEmptyList = props.setEmptyList;

    function deleteItem(id){
        deleteProfile(id);
        setEmptyList((getProfileListLength() === 0));
        closeModal();
    }

    return (
        <Modal
            visible={props.visible}
            animationType="fade"
            transparent={true}
        >
            <View style={Styles.modal}>
                <FlatList
                    data={props.data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) =>
                        <SoilProfile
                            data={item}
                            delete={() => deleteItem(item.id)}
                        />}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                />
                <SmallButton
                    title="OK"
                    onPress={closeModal}
                />
            </View>
        </Modal>
    );
}