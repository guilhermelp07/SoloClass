import { getDatabase, set, ref, onChildAdded } from "firebase/database";
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

export function saveSoil(response, soilDrainage,imagePath){

    const item = response.data.items[0];

    console.log(item);

    set(ref(database, 'solos/' + item.ID_PONTO), {
        nomeSolo: item.ID_PONTO,
        ordem: item.ORDEM,
        subOrdem: item.SUBORDEM,
        grupo: item.GDE_GRUPO,
        subGrupo: item.SUBGRUPO,
        drenagem: soilDrainage,
        imagePath: imagePath
    })
    .then(() => Alert.alert("","Solo classificado com sucesso!"))
    .catch((error) => console.log(error));
}

export async function getSoils(addSoil){
    const dbRef = ref(database, 'solos');
    onChildAdded(dbRef, (data) => {
        console.log("Solo "+data.key);
        let soil = {
            id: data.key,
            title: data.val().nomeSolo,
            text: data.val().ordem
        }
        addSoil(soil);
    })
}

/*
export async function getSoils1(){
    await get(ref(database, 'solos')).then((snapshot) => {
        if (snapshot.exists()){
            console.log(snapshot.val().ordem);
        } else {
            console.log("Nada")
        }
    }).catch((error) => {
        console.error(error)
    })
    // const dbRef = ref(database)
    // await get(child(dbRef, 'solos')).then((snapshot) => {
    //     if(snapshot.exists()){
    //         console.log(snapshot.val());
    //         list = snapshot.val();
    //         return;
    //     } else {
    //         console.log(" No data available");
    //     }
    // }).catch((error) => {
    //     console.error(error);
    // })
    const [ soilList, setSoilList ] = useState([])
    onValue(ref(database, '/solos'), (snapshot) => {
        //console.log(snapshot.val());
    }, {
        onlyOnce: true
    });
}
*/