import { View, Alert, TouchableOpacity, Button } from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import CustomPicker from "../../components/CustomPicker";
import Styles from "../../styles/Styles";
import { pickerItems } from "../../components/ComponentData";
import { pickerColors } from "../../components/ComponentData";
import { ItemTitle } from "../../components/ItemTitle";
import { sendRequest } from "../../services/smartsolosService";
import LoadAnimation from "../../components/LoadAnimation";
import DataModal from "../../components/modals/DataModal";
import { getResult } from "../../database/databaseService";
import ProfilesModal from "../../components/modals/ProfilesModal";
import Ionicons from '@expo/vector-icons/Ionicons';
import { addProfile, deleteProfile, getSoilProfileList, resetSoilProfileList } from "../../data/DataRules";

export default function NovoSolo(props){

    const {navigation} = props;
    const [ soilDrainage, setSoilDrainage ] = useState(0);
    const [ soilName, setSoilName ] = useState("");
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ profileName, setProfileName ] = useState('');
    const [ lowerLimit, setLowerLimit ] = useState(0);
    const [ upperLimit, setUpperLimit ] = useState(0);
    const [ colorIndex, setColorIndex ] = useState(0);
    const [ imagePath, setImagePath ] = useState("");
    const [ loaderVisible, setLoaderVisible ] = useState(false);
    const [ modalRetornoVisible, setModalRetornoVisible ] = useState(false);
    const [ dadosRetorno ] = useState({});
    const [ humanActivity, setHumanActivity ] = useState(false);

    function openModal(){setModalVisible(true);}

    function closeModal(){
        setProfileName('');
        setLowerLimit(0);
        setUpperLimit(0);
        setHumanActivity(false);
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
            soilProfiles: getSoilProfileList(),
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
        addProfile({
            profileName: profileName,
            lowerLimit: lowerLimit,
            upperLimit: upperLimit,
            humanActivity: humanActivity
        })
        closeModal();
    }

    function deleteItem(id){
        if (deleteProfile(id)) closeModal();
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
        resetSoilProfileList();
        setColorIndex(0);
        setImagePath("");
    }

    return (
        <View style={Styles.container}>

            <LoadAnimation visible={loaderVisible}/>

            <View style={Styles.container}>

                <View style={{marginBottom: 50}}>
                    <Ionicons
                        name="camera"
                        size={70}
                        onPress={openCamera}
                    />
                </View>

                <CustomTextInput
                    placeholder="Nome do solo"
                    onChangeText={(text) => setSoilName(text)}
                    value={soilName}
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

                <ProfilesModal
                    visible={modalVisible}
                    closeModal={closeModal}
                    setProfileName={setProfileName}
                    setUpperLimit={setUpperLimit}
                    setLowerLimit={setLowerLimit}
                    addItem={addItem}
                    deleteItem={deleteItem}
                    soilProfileList={getSoilProfileList()}
                    setHumanActivity={setHumanActivity}
                    humanActivity={humanActivity}
                />

                <DataModal
                    visible={modalRetornoVisible}
                    title={soilName}
                    closeModal={closeDataModal}
                    data={dadosRetorno}
                />
            </View>
        </View>
    );
}