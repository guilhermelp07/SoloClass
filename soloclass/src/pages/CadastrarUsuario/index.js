import { View, StyleSheet, Text } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";

export default function CadastrarUsuario(){

    return(
        <View style={styles.container}>
            <Text style={styles.logo}>SoloClass</Text>
            <CustomTextInput
                placeholder="Nome"
            />
                        <CustomTextInput
                placeholder="Email"
            />
                        <CustomTextInput
                placeholder="senha"
            />
                        <CustomTextInput
                placeholder="Confirme a senha"
            />
            <CustomButton
                title="Cadastre-se"
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
      },
      logo: {
        fontSize: 50,
        margin: 20,
        marginBottom: 60
      }
});