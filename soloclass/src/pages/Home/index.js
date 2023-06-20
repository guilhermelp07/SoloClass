import { View } from "react-native"
import Styles from "../../styles/Styles";
import CustomButton from "../../components/CustomButton";

export default function Home(props){

    const {navigation} = props;

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
