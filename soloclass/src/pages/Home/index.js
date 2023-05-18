import { View } from "react-native"

import Styles from "../../styles/Styles";

import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={Styles.container}>
            <CustomButton title="Novo Solo" onPress={() => navigation.navigate("Novo Solo")}/>
            <CustomButton title="Histórico" onPress={() => navigation.navigate("Histórico de Solos")}/>
        </View>
    );
}
