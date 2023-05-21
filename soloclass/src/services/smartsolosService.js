import smartsolosAPI from "./smartsolosAPI";

export async function sendRequest(data){
    await smartsolosAPI.post('classification', createPostRequest(data))
        .then((response) => {
            console.log("RETORNO DA REQUISIÇÃO POST");
            console.log(response.config.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
}

function createPostRequest(data){
    return (
        {
            "items": [
              {
                "DRENAGEM": data.soilDrainage,
                "ID_PONTO": data.soilName,
                "HORIZONTES": [
                  {
                    "SIMB_HORIZ": "string",
                    "LIMITE_SUP": 80,
                    "LIMITE_INF": 1110
                  }
                ]
              }
            ]
        }
    );
}