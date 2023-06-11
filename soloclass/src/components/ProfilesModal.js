import { Modal, TextInput, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Styles from "../styles/Styles";
import TextButton from "./TextButton";
import { ItemTitle } from "./ItemTitle";
import ButtonStyles from "../styles/ButtonStyles";
import { FlatList } from "react-native";
import { SoilProfile } from "./SoilProfile";
import { CheckBox } from "@rneui/themed";
import { useState } from "react";

export default function ProfilesModal(props) {

    const closeModal = props.closeModal;
    const setProfileName = props.setProfileName;
    const setUpperLimit = props.setUpperLimit;
    const setLowerLimit = props.setLowerLimit;
    const addItem = props.addItem;
    const deleteItem = props.deleteItem;
    const soilProfileList = props.soilProfileList;
    const setHumanActivity = props.setHumanActivity;
    const humanActivity = props.humanActivity;

    return (
        <Modal
            visible={props.visible}
            animationType="slide"
            transparent={true}
        >
            <ScrollView>
                <View style={Styles.modal}>
                    <View style={Styles.containerSoilProfile}>
                        <TextButton
                            title="Fechar"
                            style={{position: 'relative'}}
                            textStyle={{fontSize: 16, color: /*'#459C9C'*/'#e40', fontWeight: 'bold'}}
                            onPress={closeModal}
                        />
                        <Text style={Styles.title}> Perfis do Solo </Text>
                        <TextInput
                            style={Styles.soilProfileInput}
                            placeholder="Nome do perfil"
                            onChangeText={(text) => setProfileName(text)}
                        />
                        <View style={Styles.limitForm}>
                            <ItemTitle text="Limite superior:" />
                            <TextInput
                                style={Styles.soilProfileNumInput}
                                keyboardType="numeric"
                                onChangeText={(text) => setUpperLimit(parseFloat(text))}
                            />
                        </View>
                        <View style={Styles.limitForm}>
                            <ItemTitle text="Limite inferior:" />
                            <TextInput
                                style={Styles.soilProfileNumInput}
                                keyboardType="numeric"
                                onChangeText={(text) => setLowerLimit(parseFloat(text))}
                            />                        
                        </View>
                        <CheckBox
                            title="Atividade humana"
                            textStyle={{fontSize: 16, fontWeight: 'normal'}}
                            center={true}
                            checked={humanActivity}
                            onPress={() => setHumanActivity(!humanActivity)}
                            checkedColor="#459C9C"
                        />
                        <TouchableOpacity
                            style={ButtonStyles.btnAdd}
                            onPress={addItem}
                        >
                            <Text style={{fontSize: 19, color: '#fff'}}>Adicionar perfil</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={soilProfileList}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => 
                            <SoilProfile
                                data={item}
                                delete={() => deleteItem(item.id)}
                            />}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                    />
                </View>

            </ScrollView>
        </Modal>
    );
}