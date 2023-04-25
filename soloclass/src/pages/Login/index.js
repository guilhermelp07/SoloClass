import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";

export default function Home(){
    
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.logo}>SoloClass</Text>
            <CustomTextInput
                placeholder="Login"
            />
            <CustomButton
                title="Login"
                route="Home"
            />
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
      },
      logo: {
        fontSize: 50,
        margin: 20
      }
});