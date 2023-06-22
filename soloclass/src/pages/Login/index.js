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
import { setLoggedUser } from "../../data/DataRules";

export default function Login(){

    const [email, setEmail] = useState('teste@gmail.com');
    const [password, setPassword] = useState('123456');
    const [ loaderVisible, setLoaderVisible ] = useState(false);

    const navigator = useNavigation();

    const dbRef = ref(getDatabase(firebase));

    function login(){
        if(email === '' || password === ''){
            Alert.alert("","Favor informar o email/senha!");
            return;
        }
        setLoaderVisible(true);
        const auth = getAuth(firebase);
        signInWithEmailAndPassword(auth, email, password)
            .then((value) => {
                get(child(dbRef, `usuarios/${value.user.uid}`))
                    .then((snapshot) => {
                        if(snapshot.exists()){
                            setLoggedUser(snapshot.val().username);
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

            <Text style={styles.logo}>SoloClass</Text>
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