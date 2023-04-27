import { View } from "react-native"

import Styles from "../../styles/Styles";

import CustomButton from "../../components/CustomButton";

export default function Home(){

    return(
        <View style={Styles.container}>
            <CustomButton title="Novo Solo" route="Novo Solo"/>
            <CustomButton title="Histórico" route="Histórico de Solos"/>
        </View>
    );
}
