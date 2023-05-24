import { View } from "react-native"
import Styles from "../../styles/Styles";
import CustomButton from "../../components/CustomButton";
import { useEffect } from "react";

export default function Home(props){

    const {navigation} = props;

    useEffect(
        () => {
            navigation.addListener('beforeRemove', (e) => {
                // retirado o bloqueio por enquanto pois a opção "Sair" estava caindo aqui também, embora seja disparada pelo drawer
                // e.preventDefault();
            })
        }
    );

    function newSoil(){
        console.log("Home -> Novo Solo");
        navigation.navigate("Novo Solo");
    }

    function soilHistory(){
        console.log("Home -> Histórico de Solos");
        navigation.navigate("Histórico de Solos");
    }

    return(
        <View style={Styles.container}>
            <CustomButton title="Novo Solo" onPress={newSoil}/>
            <CustomButton title="Histórico" onPress={soilHistory}/>
        </View>
    );
}
