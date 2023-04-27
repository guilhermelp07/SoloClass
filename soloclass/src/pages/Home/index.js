import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native"

import CustomButton from "../../components/CustomButton";

export default function Home(){

    return(
        <View style={styles.container}>
            <CustomButton title="Novo Solo" route="Novo Solo"/>
            <CustomButton title="Histórico" route="Histórico de Solos"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DAFFF9',
        padding: 10
      }
});