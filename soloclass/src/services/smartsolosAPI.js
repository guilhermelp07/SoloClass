import axios from "axios";

const smartsolosAPI = axios.create({
    baseURL: 'https://api.cnptia.embrapa.br/smartsolos/expert/v1/',
    headers: {'Authorization': 'Bearer 3a270143-aa3c-3d0d-9c07-f63b69ef8242'}
});

export default smartsolosAPI;