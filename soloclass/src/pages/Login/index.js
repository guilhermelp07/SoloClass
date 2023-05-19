import { View, Text, Alert } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import TextButton from "../../components/TextButton";

import Styles from "../../styles/Styles";
import { useNavigation } from "@react-navigation/native";

import firebase from "../../database/FirebaseConfig";

import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login(){

    const [email, setEmail] = useState('teste@gmail.com');
    const [password, setPassword] = useState('123456');

    const navigator = useNavigation();

    function login(){
        const auth = getAuth(firebase);
        signInWithEmailAndPassword(auth, email, password)
            .then((value) => {
                console.log("Login com o usuário: "+value.user.email)
                // Alert.alert("Sucesso","Usuário "+value.user.email+" logado com sucesso!")
                navigator.navigate("Home");
            })
            .catch((error) => {
                Alert.alert("Erro","Login/senha incorreto(s)! / "+error)
            })
    }

    return(
        <View style={Styles.container}>
            <Text style={Styles.logo}>SoloClass : {email} / {password}</Text>
            <CustomTextInput
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
            />
            <CustomTextInput
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <CustomButton
                title="Login"
                route="Home"
                onPress={login}
            />
            <TextButton
                title="Esqueceu a senha?"
                route="Recuperar Senha"
            />
            <TextButton
                title="Cadastrar-se"
                onPress={() => navigator.navigate("Cadastrar Usuário")}
            />
        </View>
    );
}