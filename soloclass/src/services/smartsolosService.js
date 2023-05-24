import { saveSoil } from "../database/databaseService";
import smartsolosAPI from "./smartsolosAPI";

export async function sendRequest(data){
  const reqBody = createPostRequest(data);
  console.log("CORPO DA REQUISIÇÃO");
  console.log(reqBody);
    await smartsolosAPI.post('classification', reqBody)
        .then((response) => {
          console.log("RETORNO DA REQUISIÇÃO POST");
          console.log(response.config.data);
          console.log(response.data);
          
          saveSoil(response, data.soilDrainage);
        })
        .catch((error) => {
            console.error(error);
        });
}

function createPostRequest(data){

  let soilProfileList = data.soilProfiles.map((value) => {
    return (
      {
        "SIMB_HORIZ": value.profileName,
        "LIMITE_SUP": value.upperLimit,
        "LIMITE_INF": value.lowerLimit,
        "COR_UMIDA_MATIZ": data.soilColor.MATIZ,
        "COR_UMIDA_VALOR": data.soilColor.VALOR,
        "COR_UMIDA_CROMA": data.soilColor.CROMA,
      }
    );
  });
  
  console.log(soilProfileList);

  return (
      {
          "items": [
            {
              "ID_PONTO": data.soilName,
              "DRENAGEM": data.soilDrainage,
              "HORIZONTES": soilProfileList
            }
          ]
      }
  );
}