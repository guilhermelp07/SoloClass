import { saveSoil } from "../database/databaseService";
import smartsolosAPI from "./smartsolosAPI";

export async function sendRequest(data, setLoaderVisible){
  const reqBody = createPostRequest(data);
  console.log(reqBody);
    await smartsolosAPI.post('classification', reqBody)
        .then((response) => {
          console.log(response.config.data);
          console.log(response.data);
          
          saveSoil(response, data.soilDrainage, data.imagePath);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {setLoaderVisible(false)});
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