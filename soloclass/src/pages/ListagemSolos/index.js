import { FlatList, Text, View } from "react-native"

import Styles from "../../styles/Styles";
import { Card } from "@rneui/themed";
import CustomCard from "../../components/CustomCard";

export default function ListagemSolos(){

    const solos = [
        {id: 1, title: "Solo arenoso", text: "Tem consistência granulosa como a areia, é permeável à água. Comum na região nordeste do Brasil.", uri: "https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/tipos-de-solo-arenoso.jpg"},
        {id: 2, title: "Solo argiloso", text: "Tem consistência fina e é impermeável à água. Comum em alguns estados da região sul e região sudeste do Brasil.", uri: "https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/tipos-de-solo-argiloso.jpg"},
        {id: 3, title: "Solo calcário", text: "Formado por partículas de rochas, é seco e esquenta muito quando recebe a luz do sol. Comum em regiões de deserto.", uri: "https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/tipos-de-solo-calcario.jpg"}
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