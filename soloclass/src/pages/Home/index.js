import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native"

import DrawerNav from "../../routes/DrawerNav";
import CustomButton from "../../components/CustomButton";

export default function Home(){

    return(
        <View style={styles.container}>
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