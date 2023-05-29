import { FlatList, View } from "react-native"
import Styles from "../../styles/Styles";
import CustomCard from "../../components/CustomCard";
import { getSoils } from "../../database/databaseService";
import { useEffect, useState } from "react";

export default function ListagemSolos(){

    let [ soilList ] = useState([]);

    // Ao renderizar a tela, buscará os dados.
    useEffect(() => {
        getSoils(addSoil);
    })

    function addSoil(soilData){
        soilList.push(soilData);
    }

    return(
        <View style={Styles.container}>
            <FlatList
                data={soilList}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <CustomCard dados={item}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}