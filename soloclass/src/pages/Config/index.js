import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native"

export default function Config(){
    
    const navigation = useNavigation();

    return(
        <View>
            <Text>Configurações</Text>
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}