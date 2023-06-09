import { View, Text, ScrollView, Modal, TextInput, TouchableOpacity, FlatList, Alert, Keyboard } from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import CustomPicker from "../../components/CustomPicker";
import Styles from "../../styles/Styles";
import { pickerItems } from "../../components/ComponentData";
import { pickerColors } from "../../components/ComponentData";
import { ItemTitle } from "../../components/ItemTitle";
import { sendRequest } from "../../services/smartsolosService";
import { SoilProfile } from "../../components/SoilProfile";
import TextButton from "../../components/TextButton";
import ButtonStyles from "../../styles/ButtonStyles";
import LoadAnimation from "../../components/LoadAnimation";
import DataModal from "../../components/DataModal";
import { getResult } from "../../database/databaseService";

export default function NovoSolo(props){
    const {navigation} = props;
    const [ soilDrainage, setSoilDrainage ] = useState(0);
    const [ soilName, setSoilName ] = useState("");
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ profileName, setProfileName ] = useState('');
    const [ lowerLimit, setLowerLimit ] = useState(0);
    const [ upperLimit, setUpperLimit ] = useState(0);
    const [ soilProfileList, setSoilProfileList ] = useState([]);
    const [ colorIndex, setColorIndex ] = useState(0);
    const [ imagePath, setImagePath ] = useState("");
    const [ loaderVisible, setLoaderVisible ] = useState(false);
    const [ modalRetornoVisible, setModalRetornoVisible ] = useState(false);
    const [ dadosRetorno ] = useState({});

    function openModal(){setModalVisible(true);}

    function closeModal(){
        setProfileName('');
        setLowerLimit(0);
        setUpperLimit(0);
        setModalVisible(false);
    }

    async function newSoil(){
        if(soilName === ""){
            Alert.alert("","Favor informar o nome do solo!");
            return;
        }
        setLoaderVisible(true);
        sendRequest({
            soilDrainage: soilDrainage,
            soilName: soilName,
            soilProfiles: soilProfileList,
            soilColor: getSoilColor(),
            imagePath: imagePath
        }, setLoaderVisible, showResult);
    }

    function getSoilColor(){
        return ({
            MATIZ: pickerColors[colorIndex].MATIZ,
            VALOR: pickerColors[colorIndex].VALOR,
            CROMA: pickerColors[colorIndex].CROMA
        });
    }

    function addItem(){
        if(profileName === ''){
            Alert.alert("","Favor informar o nome do perfil!");
            return;
        }

        let index = soilProfileList.length;

        soilProfileList[index] = {
            id: soilProfileList.length,
            profileName: profileName,
            lowerLimit: lowerLimit,
            upperLimit: upperLimit
        }

        console.log("criou o elemento no index "+index);
        setSoilProfileList(soilProfileList);
        closeModal();
    }

    function deleteItem(id){
        for(let i=0; i<soilProfileList.length; i++){
            if(soilProfileList[i].id === id){
                soilProfileList.splice(i, 1);
                console.log("deletou o elemento com id "+id+", posição "+i)
            }
        }
        setSoilProfileList(soilProfileList);
        closeModal();
    }

    function openCamera(){
        navigation.navigate("Camera", {
            setColorIndex: setColorIndex,
            setImagePath:setImagePath
        });
    }

    function closeDataModal(){
        setModalRetornoVisible(false);
    }

    function showResult(){
        getResult(soilName, setDadosRetorno, setModalRetornoVisible);
        resetStates();
    }

    function setDadosRetorno(data){
        console.log("setDadosRetorno");
        console.log(data);
        console.log(data.drenagem);

        dadosRetorno.nomeSolo = data.nomeSolo
        dadosRetorno.ordem = data.ordem
        dadosRetorno.subOrdem = data.subOrdem
        dadosRetorno.grupo = data.grupo
        dadosRetorno.subGrupo = data.subGrupo
        dadosRetorno.drenagem = data.drenagem
    }

    function resetStates(){
        setSoilName("");
        setProfileName("");
        setSoilDrainage(0);
        setLowerLimit(0);
        setUpperLimit(0);
        setSoilProfileList([]);
        setColorIndex(0);
        setImagePath("");
    }

    return (
        <View style={Styles.container}>

            <LoadAnimation visible={loaderVisible}/>

                <View style={Styles.container}>
                    <CustomButton
                      title="Câmera"
                      onPress={openCamera}
                    />

                    <CustomTextInput
                        placeholder="Nome do solo"
                        onChangeText={(text) => setSoilName(text)}
                        value={soilName}
                        // onBlur={() => {alert("opa")}}
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

                    <DataModal
                        visible={modalRetornoVisible}
                        title={soilName}
                        closeModal={closeDataModal}
                        data={dadosRetorno}
                    />

                    <TextButton title="Abrir modal" onPress={() => setModalRetornoVisible(true)}/>
                    
                </View>
        </View>
    );
}