import { View, StyleSheet, Text, Alert, Keyboard } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import Styles from "../../styles/Styles";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebase from "../../database/FirebaseConfig";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigation } from "@react-navigation/native";
import { saveUser } from "../../database/databaseService";

export default function CadastrarUsuario(){

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('');

    const navigator = useNavigation();

    function createUser(){

        if(!(name.length > 0 && email.length > 0 && password.length > 0 && passwordConfirmation.length > 0)){
            Alert.alert("","Favor preencher todos os campos!")
            return;
        }

        if(password !== passwordConfirmation){
            Alert.alert("","As senhas não batem!")
            return;
        }

        const auth = getAuth(firebase);
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((value) => {
                console.log('');
                console.log('USUARIO CRIADO');
                console.log(value.user);

                saveUser(value.user, name);

                Keyboard.dismiss();
                navigator.navigate("Login");
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return(
        <View style={Styles.container}>
            <Text style={styles.logo}>SoloClass</Text>
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

const styles = StyleSheet.create({
    logo: {
        fontSize: 70,
        margin: 20,
        marginBottom: 80,
        fontFamily: 'FFF_Tusj',
        color: '#6a4', //'#692',
        textShadowRadius: 12,
        textShadowColor: 'gray',
        textShadowOffset: { width: 0.5, height: 0.5 }
      }
})