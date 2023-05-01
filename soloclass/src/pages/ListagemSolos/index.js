import { FlatList, Text, View } from "react-native"

import Styles from "../../styles/Styles";
import { Card } from "@rneui/themed";
import CustomCard from "../../components/CustomCard";

export default function ListagemSolos(){

    const solos = [
        {id: 1, title: "Montanhas Gélidas", text: "As Montanhas Gélidas são conhecidas pelas baixas temperaturas e pelas estalactites que se formam em suas cavernas misteriosas."},
        {id: 2, title: "Montanhas Gélidas", text: "As Montanhas Gélidas são conhecidas pelas baixas temperaturas e pelas estalactites que se formam em suas cavernas misteriosas."},
        {id: 3, title: "Montanhas Gélidas", text: "As Montanhas Gélidas são conhecidas pelas baixas temperaturas e pelas estalactites que se formam em suas cavernas misteriosas."}
    ];

    return(
        <View style={Styles.container}>
            <FlatList
                data={solos}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <CustomCard dados={item}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}