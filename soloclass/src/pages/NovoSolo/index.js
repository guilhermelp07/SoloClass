import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import CustomTextInput from "../../components/CustomTextInput";

import CustomButton from "../../components/CustomButton";
export default function NovoSolo(){


    return(
        <View style={styles.container}>
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
                route="Home"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DAFFF9',
        padding: 10
      }
});