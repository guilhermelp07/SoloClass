import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native"

import DrawerNav from "../../components/DrawerNav";

export default function Home(){
    
    const navigation = useNavigation();

    return(
        <View>
            <Text>Sim</Text>
        </View>
    );
}