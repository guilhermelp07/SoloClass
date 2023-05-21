import { View, Text, ScrollView } from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import smartsolosAPI from "../../services/smartsolosAPI";
import { useState } from "react";
import CustomPicker from "../../components/CustomPicker";
import Styles from "../../styles/Styles";
import { smartsolosPostTest } from "../../services/TestData";
import { pickerItems } from "../../components/ComponentData";
import { ItemTitle } from "../../components/ItemTitle";
import { sendRequest } from "../../services/smartsolosService";

export default function NovoSolo(){

    const [ soilDrainage, setSoilDrainage ] = useState(0);
    const [ soilName, setSoilName ] = useState('');

    async function sendRequest1(){
        await smartsolosAPI.get('health')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    async function newSoil(){
        sendRequest({
            soilDrainage: soilDrainage,
            soilName: soilName
        });
    }

    return(
        <View style={Styles.container}>
            
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={Styles.container}>
                    <CustomButton
                        title="Camera"
                        route="Camera"
                    />

                    <CustomTextInput
                        placeholder="Nome do perfil"
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
                        title="Salvar"
                        onPress={newSoil}
                    />
                    
                </View>
            </ScrollView>
        </View>
    );
}