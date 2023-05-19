import { View, StyleSheet, Text, Alert, Keyboard } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import Styles from "../../styles/Styles";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebase from "../../database/FirebaseConfig";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigation } from "@react-navigation/native";

export default function CadastrarUsuario(){

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('');

    const navigator = useNavigation();

    function createUser(){

        if(!(name.length > 0 && email.length > 0 && password.length > 0 && passwordConfirmation.length > 0)){
            Alert.alert("Erro","Favor preencher todos os campos!")
            return;
        }

        if(password !== passwordConfirmation){
            Alert.alert("Erro","As senhas não batem!")
            return;
        }

        const auth = getAuth(firebase);
        const database = getDatabase(firebase);

        createUserWithEmailAndPassword(auth, email, password)
            .then((value) => {
                console.log(value);
                set(ref(database, 'usuarios/' + value.user.uid), {
                    username: name,
                    email: email,
                    password: password
                  })
                    .then(() => {
                        Alert.alert("Sucesso","Usuário cadastrado com sucesso!")
                    })
                    .catch((error) => alert(error));
                setName('');
                setEmail('');
                setPassword('');
                setPasswordConfirmation('');
                Keyboard.dismiss();
                navigator.navigate("Login");
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            })
    }

    return(
        <View style={Styles.container}>
            <Text style={Styles.logo}>SoloClass</Text>
            <CustomTextInput
                placeholder="Nome"
                onChangeText={(text) => setName(text)}
            />
            <CustomTextInput
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
            />
            <CustomTextInput
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <CustomTextInput
                placeholder="Confirme a senha"
                secureTextEntry={true}
                onChangeText={(text) => setPasswordConfirmation(text)}
            />
            <CustomButton
                title="Cadastre-se"
                onPress={createUser}
            />
        </View>
    );
}