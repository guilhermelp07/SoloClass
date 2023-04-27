import { View, Text } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import TextButton from "../../components/TextButton";

import Styles from "../../styles/Styles";

export default function Login(){

    return(
        <View style={Styles.container}>
            <Text style={Styles.logo}>SoloClass</Text>
            <CustomTextInput
                placeholder="Login"
            />
            <CustomTextInput
                placeholder="Senha"
                secureTextEntry={true}
            />
            <CustomButton
                title="Login"
                route="Home"
            />
            <TextButton
                title="Esqueceu a senha?"
                route="Cadastrar Usuário"
            />
            <TextButton
                title="Cadastrar-se"
                route="Cadastrar Usuário"
            />
        </View>
    );
}