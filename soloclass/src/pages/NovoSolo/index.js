import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View} from "react-native";
import CustomTextInput from "../../components/CustomTextInput";

import CustomButton from "../../components/CustomButton";
import smartsolos from "../../services/smartsolos";
export default function NovoSolo(){

    async function sendRequest1(){
        await smartsolos.get('health')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    async function sendRequest(){
        await smartsolos.post('classification',
            {
                "items": [
                  {
                    "ID_PONTO": "string",
                    "DRENAGEM": 1,
                    "HORIZONTES": [
                      {
                        "SIMB_HORIZ": "string",
                        "LIMITE_SUP": 0,
                        "LIMITE_INF": 0,
                        "COR_UMIDA_MATIZ": "string",
                        "COR_UMIDA_VALOR": 0,
                        "COR_UMIDA_CROMA": 0,
                        "COR_SECA_MATIZ": "string",
                        "COR_SECA_VALOR": 0,
                        "COR_SECA_CROMA": 0,
                        "COR_MOSQ_MATIZ_1": "string",
                        "COR_MOSQ_VALOR_1": 0,
                        "COR_MOSQ_CROMA_1": 0,
                        "COR_UMIDA_AMASSADA_MATIZ": "string",
                        "COR_UMIDA_AMASSADA_VALOR": 0,
                        "COR_UMIDA_AMASSADA_CROMA": 0,
                        "COR_SECA_TRITURADA_MATIZ": "string",
                        "COR_SECA_TRITURADA_VALOR": 0,
                        "COR_SECA_TRITURADA_CROMA": 0,
                        "ESTRUTURA_GRAU": 0,
                        "ESTRUTURA_TAMANHO": 0,
                        "ESTRUTURA_TIPO": 0,
                        "CEROSIDADE_GRAU": 0,
                        "CEROSIDADE_QUANTIDADE": 0,
                        "TRANSICAO_GRAU": 0,
                        "TRANSICAO_FORMA": 0,
                        "CONSISTENCIA_SECO": 0,
                        "CALHAU": 0,
                        "CASCALHO": 0,
                        "AREIA_GROS": 0,
                        "AREIA_FINA": 0,
                        "SILTE": 0,
                        "ARGILA": 0,
                        "PH_AGUA": 0,
                        "PH_KCL": 0,
                        "C_ORG": 0,
                        "CA_TROC": 0,
                        "MG_TROC": 0,
                        "K_TROC": 0,
                        "NA_TROC": 0,
                        "AL_TROC": 0,
                        "H_TROC": 0,
                        "P_ASSIM": 0,
                        "RETRATIL": true,
                        "COESO": true,
                        "FLUVICO": true,
                        "SOMBRICO": true,
                        "REDOXICO": true,
                        "MATERIAIS_PRIMARIOS": true,
                        "ATIVIDADES_HUMANAS": true,
                        "PLACICO_TOPO": true,
                        "MANGANES": true,
                        "COND_ELETR": 0,
                        "EQUI_CACO3": 0,
                        "TEOR_FE": 0,
                        "LAMELA_SUP": 0,
                        "LAMELA_INF": 0,
                        "LAMELA_TEXTURA": 0
                      }
                    ],
                    "ORDEM": "string",
                    "SUBORDEM": "string",
                    "GDE_GRUPO": "string",
                    "SUBGRUPO": "string"
                  }
                ]
            }
        )
            .then((response) => console.log(response.data))
            .catch((error) => console.error(error))
    }

    return(
        <View style={styles.container}>
            <CustomButton
                title="Camera"
                route="Camera"
            />
            <CustomTextInput
                placeholder="Cor do Solo"
            />
            <CustomTextInput
                placeholder="Estrutura do solo"
            />
            <CustomTextInput
                placeholder="Tamanho da estrutura"
            />
            <CustomTextInput
                placeholder="Tipo da estrutura"
            />
            <CustomTextInput
                placeholder="Textura do solo"
            />
            <CustomTextInput
                placeholder="Consistência do solo"
            />

            <CustomButton
                title="Salvar"
                onPress={sendRequest}
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
      }
});