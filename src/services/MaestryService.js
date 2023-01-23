import axios from 'axios'
import ROUTE from '../Constants/ApiRoutes';
import { API_KEY } from '../Constants/ApiKey';

export const getTopMaestry = async (server_route, summoner, list_size=5)=> {
    const URL =  server_route + ROUTE.CHAMPION_MAESTRY.TOP_MAESTRY_BY_SUMMONER_ID
    
    return axios.get(`${URL}${summoner.id}/top?api_key=${API_KEY}&count=${list_size}`)
            .then(response=> response.data)
            .catch(err=> err)
}