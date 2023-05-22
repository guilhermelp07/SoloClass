import { View, Text, ScrollView, Modal, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import smartsolosAPI from "../../services/smartsolosAPI";
import { useState } from "react";
import CustomPicker from "../../components/CustomPicker";
import Styles from "../../styles/Styles";
import { smartsolosPostTest, soilProfilesTest } from "../../services/TestData";
import { pickerItems } from "../../components/ComponentData";
import { ItemTitle } from "../../components/ItemTitle";
import { sendRequest } from "../../services/smartsolosService";
import { SoilProfile } from "../../components/SoilProfile";
import { StyleSheet } from "react-native";

export default function NovoSolo(props){
    const {navigation} = props;
    const [ soilDrainage, setSoilDrainage ] = useState(0);
    const [ soilName, setSoilName ] = useState('');
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ profileName, setProfileName ] = useState('');
    const [ lowerLimit, setLowerLimit ] = useState(0);
    const [ upperLimit, setUpperLimit ] = useState(0);
    const [ soilProfileList, setSoilProfileList ] = useState([
        //{id: 0, profileName: "Teste perfil", lowerLimit: 0, upperLimit: 0}, {id: 1, profileName: "perfil 2", lowerLimit: 0, upperLimit: 0}
    ]);

    function openModal(){setModalVisible(true);}

    function closeModal(){
        setProfileName('');
        setLowerLimit(0);
        setUpperLimit(0);
        setModalVisible(false);
    }

    async function newSoil(){
        sendRequest({
            soilDrainage: soilDrainage,
            soilName: soilName,
            soilProfiles: soilProfileList
        });
    }

    function addItem(){
        if(profileName === ''){
            Alert.alert("Erro","Favor informar o nome do perfil!");
            return;
        }
        soilProfileList.push({
            id: soilProfileList.length,
            profileName: profileName,
            lowerLimit: lowerLimit,
            upperLimit: upperLimit
        });
        setSoilProfileList(soilProfileList);
        closeModal();
    }

    function deleteItem(id){
        // alert(id+" - tamanho da lista: "+soilProfileList.length);
        soilProfileList.splice(id, 1);
        setSoilProfileList(soilProfileList);
        // alert("tamanho da lista: "+soilProfileList.length);
        closeModal();
    }

    return(
        <View style={Styles.container}>
            
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={Styles.container}>
                    <CustomButton
                      title="Camera"
                      onPress={()=> navigation.navigate("Camera")}
                    />

                    <CustomTextInput
                        placeholder="Nome do solo"
                        onChangeText={(text) => setSoilName(text)}
                    />

                    <ItemTitle text="Drenagem do Solo" />
                   <CustomPicker
                        prompt="Nível de drenagem"
                        selectedValue={soilDrainage}
                        onValueChange={(itemValue, itemIndex) => setSoilDrainage(itemValue)}
                        items={pickerItems}
                    />
                    
                    <CustomButton
                        title="Perfis de Solo"
                        onPress={openModal}
                    />

                    <CustomButton
                        title="Salvar"
                        onPress={newSoil}
                    />

                    <Modal
                        visible={modalVisible}
                        animationType="slide"
                        transparent={true}
                    >
                        <ScrollView>
                            <View
                                style={Styles.modal}
                            >
                                <View style={Styles.containerSoilProfile}>
                                    <TouchableOpacity
                                        style={{position: 'relative'}}
                                        onPress={closeModal}
                                    >
                                        <Text style={{fontSize: 16, color: '#459C9C'}}>Fechar</Text>
                                    </TouchableOpacity>
                                    <Text style={Styles.title}> Perfis do Solo </Text>
                                    <TextInput
                                        style={Styles.soilProfileInput}
                                        placeholder="Nome do perfil"
                                        onChangeText={(text) => setProfileName(text)}
                                    />
                                    <View style={Styles.limitForm}>
                                        <ItemTitle text="Limite inferior:" />
                                        <TextInput
                                            style={Styles.soilProfileNumInput}
                                            keyboardType="numeric"
                                            onChangeText={(text) => setLowerLimit(parseFloat(text))}
                                        />
                                    </View>
                                    <View style={Styles.limitForm}>
                                        <ItemTitle text="Limite superior:" />
                                        <TextInput
                                            style={Styles.soilProfileNumInput}
                                            keyboardType="numeric"
                                            onChangeText={(text) => setUpperLimit(parseFloat(text))}
                                        />
                                    </View>
                                    <TouchableOpacity
                                        style={styles.btnAdd}
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
                                            edit={() => alert("edit")}
                                            delete={() => deleteItem(item.id)}
                                        />}
                                    showsVerticalScrollIndicator={false}
                                />
                            </View>
                        </ScrollView>
                    </Modal>
                    
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    btnAdd: {
        width: 160,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#459C9C',
        margin: 5
    }
});