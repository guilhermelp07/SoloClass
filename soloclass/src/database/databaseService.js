import { getDatabase, set, ref } from "firebase/database";
import firebase from "./FirebaseConfig";
import { Alert } from "react-native";

const database = getDatabase(firebase);

export function saveUser(user, username){
    console.log(username);

    set(ref(database, 'usuarios/' + user.uid), {
        username: username,
        email: user.email
    })
    .then(() => Alert.alert("","Usuário cadastrado com sucesso!"))
    .catch((error) => console.error(error));
}

export function saveSoil(response, soilDrainage){

    const item = response.data.items[0];

    console.log(item);

    set(ref(database, 'solos/' + item.ID_PONTO), {
        nomeSolo: item.ID_PONTO,
        ordem: item.ORDEM,
        subOrdem: item.SUBORDEM,
        grupo: item.GDE_GRUPO,
        subGrupo: item.SUBGRUPO,
        drenagem: soilDrainage
    })
    .then(() => Alert.alert("","Solo classificado com sucesso!"))
    .catch((error) => console.log(error));
}
