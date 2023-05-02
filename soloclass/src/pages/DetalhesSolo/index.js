import { Image, Text, View } from "react-native"

import Styles from "../../styles/Styles";

export default function DetalhesSolo(route){
    return(
        <View style={Styles.detailContainer}>
            <View style={Styles.detailsHeader}>
                <Text style={Styles.title}>Montanhas Gélidas</Text>
                <Image
                    style={Styles.image}
                    source={{
                        uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg'
                    }}
                />
            </View>
            
            <View style={Styles.soilDetails}>
                <Text style={Styles.attribute}>
                    Horizontes: <Text style={{fontWeight:'normal'}}>*Dados do horizonte do perfil* {/*props.horizontes*/}</Text>
                </Text>
                <Text style={Styles.attribute}>
                    Drenagem: <Text style={{fontWeight:'normal'}}>*Intensidade da drenagem* {/*props.drenagem*/}</Text>
                </Text>
                <Text style={Styles.attribute}>
                    Ordem: <Text style={{fontWeight:'normal'}}>*Ordem do solo* {/*props.ordem*/}</Text>
                </Text>
                <Text style={Styles.attribute}>
                    Sub-ordem: <Text style={{fontWeight:'normal'}}>*Sub-ordem do solo* {/*props.subordem*/}</Text>
                </Text>
                <Text style={Styles.attribute}>
                    Grupo: <Text style={{fontWeight:'normal'}}>*Grupo do solo* {/*props.grupo*/}</Text>
                </Text>
                <Text style={Styles.attribute}>
                    Sub-grupo: <Text style={{fontWeight:'normal'}}>*Sub-grupo do solo* {/*props.subgrupo*/}</Text>
                </Text>
            </View>
        </View>
    );
}