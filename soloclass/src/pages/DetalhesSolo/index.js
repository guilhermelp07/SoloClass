import { Image, Text, View } from "react-native"
import Styles from "../../styles/Styles";
import { useEffect } from "react";
import { getSoilById } from "../../database/databaseService";
import { useState } from "react";
import { getStringDrenagem } from "../../data/DataRules";

export default function DetalhesSolo({route}){

    const soilId = route.params?.id;

    const [ nomeSolo, setNomeSolo ] = useState('');
    const [ drenagem, setDrenagem ] = useState('');
    const [ ordem, setOrdem ] = useState('');
    const [ subOrdem, setSubOrdem ] = useState('');
    const [ grupo, setGrupo ] = useState('');
    const [ subGrupo, setSubGrupo ] = useState('');
    const [ urlImagem, setUrlImagem ] = useState('');

    useEffect(() => {
        getSoilById(soilId)
            .then((value) => {
                setDadosSolo(value);
            });
    });

    function setDadosSolo(value){
        setNomeSolo(value.nomeSolo);
        setOrdem(value.ordem);
        setSubOrdem(value.subOrdem);
        setGrupo(value.grupo);
        setSubGrupo(value.subGrupo);
        setUrlImagem(value.urlImagem);
        setDrenagem(getStringDrenagem(value.drenagem));
    }

    return(
        <View style={Styles.detailContainer}>
            <View style={Styles.detailsHeader}>
                <Text style={Styles.title}> {nomeSolo} </Text>
                <Image
                    style={Styles.image}
                    source={{ uri: urlImagem ? urlImagem : null }}
                />
            </View>
            
            <View style={Styles.soilDetails}>
                <Text style={Styles.attribute}>
                    Drenagem: <Text style={{fontFamily: 'QuickSand'}}> {drenagem} </Text>
                </Text>
                <Text style={Styles.attribute}>
                    Ordem: <Text style={{fontFamily: 'QuickSand'}}> {ordem} </Text>
                </Text>
                <Text style={Styles.attribute}>
                    Sub-ordem: <Text style={{fontFamily: 'QuickSand'}}> {subOrdem} </Text>
                </Text>
                <Text style={Styles.attribute}>
                    Grupo: <Text style={{fontFamily: 'QuickSand'}}> {grupo} </Text>
                </Text>
                <Text style={Styles.attribute}>
                    Sub-grupo: <Text style={{fontFamily: 'QuickSand'}}> {subGrupo} </Text>
                </Text>
            </View>
        </View>
    );
}