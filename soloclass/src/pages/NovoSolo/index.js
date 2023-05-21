import { StyleSheet, View} from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import smartsolos from "../../services/smartsolos";
import { useState } from "react";
import CustomPicker from "../../components/CustomPicker";
import Styles from "../../styles/Styles";
import { smartsolosPostTest } from "../../services/TestData";
import { pickerItems } from "../../components/ComponentData";

export default function NovoSolo(){

    const [ soilDrainage, setSoilDrainage ] = useState(0);

    async function sendRequest1(){
        await smartsolos.get('health')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    async function sendRequest(){
        await smartsolos.post('classification', smartsolosPostTest)
            .then((response) => console.log(response.data))
            .catch((error) => console.error(error))
    }

    return(
        <View style={Styles.container}>
            <CustomButton
                title="Camera"
                route="Camera"
            />

            <CustomPicker
                prompt="Nível de drenagem"
                selectedValue={soilDrainage}
                onValueChange={(itemValue, itemIndex) => setSoilDrainage(itemValue)}
                items={pickerItems}
            />

            <CustomTextInput
                placeholder="Cor do Solo"
            />
            <CustomTextInput
                placeholder="Estrutura do solo"
            />
            <CustomTextInput
                placeholder="Tamanho da estrutura"
            />
            <CustomTextInput
                placeholder="Tipo da estrutura"
            />
            <CustomTextInput
                placeholder="Textura do solo"
            />
            <CustomTextInput
                placeholder="Consistência do solo"
            />

            <CustomButton
                title="Salvar"
                onPress={sendRequest}
            />
        </View>
    );
}