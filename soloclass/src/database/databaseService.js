import { getDatabase, set, ref, onChildAdded, get, update } from "firebase/database";
import firebase from "./FirebaseConfig";
import { Alert } from "react-native";
import { saveImage } from "./firestoreService";
import { useState } from "react";

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

export async function saveSoil(response, soilDrainage, imagePath){

    const item = response.data.items[0];
    const itemName = item.ID_PONTO;

    await set(ref(database, `solos/${itemName}`), {
        nomeSolo: item.ID_PONTO,
        ordem: item.ORDEM,
        subOrdem: item.SUBORDEM,
        grupo: item.GDE_GRUPO,
        subGrupo: item.SUBGRUPO,
        drenagem: soilDrainage
    })
    .then(() => {
        console.log("Informações do solo gravadas com sucesso");
        saveImage(imagePath, itemName).then((value) => {
            updateImageUrl(itemName, value.url);
        })
    })
    .catch((error) => console.log(error));
}

export function updateImageUrl(soilName, imageUrl){
    const soilRef = ref(database, `solos/${soilName}`);
    update(soilRef, {urlImagem: imageUrl})
        .then((value) => {
            console.log("update da url OK");
        })
        .catch((error) => {
            console.error(error);
        });
}

export async function getSoils(addSoil){
    const dbRef = ref(database, 'solos');
    onChildAdded(dbRef, (data) => {
        console.log("Solo "+data.key);
        let soil = {
            id: data.key,
            title: data.val().nomeSolo,
            text: data.val().ordem,
            uri: data.val().urlImagem
        }
        addSoil(soil);
    })
}

export async function getSoilById(id){
    return new Promise(async (resolve, reject) => {
        const soilRef = ref(database, `solos/${id}`)
        await get(soilRef)
            .then((snapshot) => {
                console.log(snapshot.val());
                resolve(snapshot.val());
            })
            .catch((error) => console.error(error));
    })
}

export async function getResult(nomeSolo, setDadosRetorno, setModalRetornoVisible){
    await get(ref(database, 'solos/'+nomeSolo)).then((snapshot) => {
        if (snapshot.exists()){
            console.log(snapshot.val());
            setDadosRetorno(snapshot.val());
        } else {
            console.log("Nada");
        }
    }).catch((error) => console.error(error)
    ).finally(() => setModalRetornoVisible(true));
}