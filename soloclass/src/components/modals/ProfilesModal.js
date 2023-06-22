import { Modal, TextInput, View, Text, ScrollView } from "react-native";
import Styles from "../../styles/Styles";
import { ItemTitle } from "../ItemTitle";
import { CheckBox } from "@rneui/themed";
import SmallButton from "../SmallButton";
import { useState } from "react";
import ProfileListModal from "./ProfileListModal";
import { Alert } from "react-native";
import { addProfile } from "../../data/DataRules";

export default function ProfilesModal(props) {

    const closeModal = props.closeModal;
    const soilProfileList = props.soilProfileList;

    const [ profileName, setProfileName ] = useState('');
    const [ upperLimit, setUpperLimit ] = useState('0');
    const [ lowerLimit, setLowerLimit ] = useState('0');
    const [ humanActivity, setHumanActivity ] = useState(false);
    const [ listVisible, setListVisible ] = useState(false);
    const [ emptyList, setEmptyList ] = useState(true);

    function openProfileList(){ setListVisible(true) }
    function closeProfileList(){ setListVisible(false) }

    function addPerfil(){
        if(!addItem()) return;
        setEmptyList(false);
        resetStates();
    }

    function resetStates(){
        setProfileName('');
        setUpperLimit('0');
        setLowerLimit('0');
        setHumanActivity(false);
    }

    function addItem(){
        if(profileName === ''){
            Alert.alert("","Favor informar o nome do perfil!");
            return false;
        }
        addProfile({
            profileName: profileName,
            lowerLimit: parseFloat(lowerLimit),
            upperLimit: parseFloat(upperLimit),
            humanActivity: humanActivity
        });
        Alert.alert("","Perfil incluído com sucesso!");
        return true;
    }

    return (
        <Modal
            visible={props.visible}
            animationType="slide"
            transparent={true}
        >
            <ScrollView>
                <View style={Styles.modal}>
                    <View style={Styles.containerSoilProfile}>
                        <Text style={Styles.title}> Perfis do Solo </Text>
                        <TextInput
                            style={Styles.soilProfileInput}
                            placeholder="Nome do perfil"
                            value={profileName}
                            onChangeText={(text) => setProfileName(text)}
                        />
                        <View style={Styles.limitForm}>
                            <ItemTitle text="Limite superior:" />
                            <TextInput
                                style={Styles.soilProfileNumInput}
                                keyboardType="numeric"
                                value={upperLimit}
                                onChangeText={(text) => setUpperLimit(text)}
                            />
                        </View>
                        <View style={Styles.limitForm}>
                            <ItemTitle text="Limite inferior:" />
                            <TextInput
                                style={Styles.soilProfileNumInput}
                                keyboardType="numeric"
                                value={lowerLimit}
                                onChangeText={(text) => setLowerLimit(text)}
                            />                        
                        </View>
                        <CheckBox
                            title="Atividade humana"
                            textStyle={{fontSize: 17,fontFamily: 'QuickSand', fontWeight: 'normal'}}
                            center={true}
                            checked={humanActivity}
                            onPress={() => setHumanActivity(!humanActivity)}
                            checkedColor="#459C9C"
                        />
                        <SmallButton
                            title="Adicionar Perfil"
                            onPress={addPerfil}
                        />
                        {soilProfileList.length > 0 || !emptyList ?
                            <SmallButton
                                title="Ver Perfis"
                                onPress={openProfileList}
                            />
                        : 
                            null
                        }
                        <SmallButton
                            title="Cancelar"
                            onPress={closeModal}
                        />
                    </View>
                    <ProfileListModal
                        visible={listVisible}
                        data={soilProfileList}
                        closeModal={closeProfileList}
                        setEmptyList={setEmptyList}
                    />
                </View>

            </ScrollView>
        </Modal>
    );
}