import { getAuth, signOut } from "firebase/auth";
import firebase from "../database/FirebaseConfig";
import { Alert } from "react-native";

export function sair(navigation){

    Alert.alert('Mas já...', 'Tem certeza que deseja sair?', [
        {
          text: 'Cancelar',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Sim', onPress: () => logOut(navigation)}
      ]);
}

function logOut(navigation){
    const auth = getAuth(firebase);
    signOut(auth)
        .then(() => {
            console.log("logout...");
            navigation.navigate("Login");
        })
        .catch((error) => {
            console.error(error);
        })
}