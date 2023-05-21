import axios from "axios";

const smartsolos = axios.create({
    baseURL: 'https://api.cnptia.embrapa.br/smartsolos/expert/v1/',
    headers: {'Authorization': 'Bearer 58f42dd4-11f6-3742-80ea-db8674ce7c2b'}
});

export default smartsolos;