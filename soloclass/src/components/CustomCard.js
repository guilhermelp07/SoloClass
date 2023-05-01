import { Card } from "@rneui/themed";
import Styles from "../styles/Styles";
import { View, Text, TouchableOpacity } from "react-native";

export default function CustomCard(props) {
    return (
        <Card containerStyle={Styles.card}>
            <Card.Title style={{fontSize:17}}>{props.dados.title}</Card.Title>
            <View style={Styles.cardContent}>
                <Card.Image
                    style={Styles.cardImage}
                    source={{
                        uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg'
                    }}
                />
                <Text style={Styles.cardText}>{props.dados.text}</Text>
                <TouchableOpacity
                    onPress={() => alert("Detalhes do solo")}
                >
                    <Text style={Styles.cardButton}>Relatório Completo</Text>
                </TouchableOpacity>
            </View>
        </Card>
    );
}