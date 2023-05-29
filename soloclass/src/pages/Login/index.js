import { View, Text, Alert, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import TextButton from "../../components/TextButton";
import Styles from "../../styles/Styles";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../database/FirebaseConfig";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, get , ref, child } from "firebase/database";
import LoadAnimation from "../../components/LoadAnimation";

export default function Login(){

    const [email, setEmail] = useState('teste@gmail.com');
    const [password, setPassword] = useState('123456');
    const [ userName, setUserName ] = useState('default');
    const [ loaderVisible, setLoaderVisible ] = useState(false);

    const navigator = useNavigation();

    const dbRef = ref(getDatabase(firebase));

    function login(){
        setLoaderVisible(true);
        const auth = getAuth(firebase);
        signInWithEmailAndPassword(auth, email, password)
            .then((value) => {
                get(child(dbRef, `usuarios/${value.user.uid}`))
                    .then((snapshot) => {
                        if(snapshot.exists()){
                            setUserName(snapshot.val().username);
                            console.log("snapshot.val: "+snapshot.val().username);
                            // alert("snapshot.val: "+snapshot.val().username);
                        } else {
                            console.log("No data available");
                        }
                    })
                    .catch((error) => {
                        console.eror(error);
                        alert(error);
                    })
                    .finally(() => {setLoaderVisible(false)})
                console.log("Login com o usuário: "+value.user.email+", id: "+value.user.uid);
                // Alert.alert("","Usuário "+value.user.email+" logado com sucesso!")
                navigator.navigate("Home");
            })
            .catch((error) => {
                console.error(error);
                Alert.alert("","Login/senha incorreto(s)!");
            })
            .finally(() => {setLoaderVisible(false)})
    }

    return(
        <View style={Styles.container}>

            <LoadAnimation visible={loaderVisible}/>

            <Text style={Styles.logo}>SoloClass</Text>
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
            {/* <TextButton
                title="Esqueceu a senha?"
                route="Recuperar Senha"
            /> */}
            <TextButton
                title="Cadastrar-se"
                onPress={() => navigator.navigate("Cadastrar Usuário")}
            />
        </View>
    );
}