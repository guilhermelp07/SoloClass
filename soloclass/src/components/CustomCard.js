import { Card } from "@rneui/themed";
import Styles from "../styles/Styles";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CustomCard(props) {
    const navigator = useNavigation();
    return (
        <Card containerStyle={Styles.card}>
            <Card.Title style={{fontSize:18, fontFamily: 'FFF_Tusj', fontWeight: 'normal'}}>{props.dados.title}</Card.Title>
            <View style={Styles.cardContent}>
                <Card.Image
                    style={Styles.cardImage}
                    source={{ uri: props.dados.uri }}
                />
                <Text style={Styles.cardText}>{props.dados.text}</Text>
                <TouchableOpacity
                    onPress={() => navigator.navigate("Detalhes do Solo", {id: props.dados.title})}
                >
                    <Text style={Styles.cardButton}>Relatório Completo</Text>
                </TouchableOpacity>
            </View>
        </Card>
    );
}