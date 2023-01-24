import axios from 'axios'
import ROUTE from '../Constants/ApiRoutes';
import { getHistory } from './MatchService'

import { API_KEY } from '../Constants/ApiKey';
import { getTopMaestry } from './MaestryService';

export const getProfile = async (server_route, name)=> {
    const summoner      = await getSummoner(server_route, name)
    const rank          = await getRank(server_route, summoner)
    const top_maestry   = await getTopMaestry(server_route, summoner)
    const history       = await getHistory(server_route, summoner)

    return {summoner, rank, history, top_maestry }
}

export const getSummoner = async (server_route, name)=> {
    const URL =  server_route + ROUTE.SUMMONER.BY_NAME

    return axios.get(`${URL}${name}?api_key=${API_KEY}`)
            .then(response=> response.data)
            .catch(err=> err)   
}

export const getRank = async (server_route, summoner)=> {
    const URL =  server_route + ROUTE.RANKED.BY_SUMMONER_ID

    return axios.get(`${URL}${summoner.id}?api_key=${API_KEY}`)
            .then(response=> response.data)
            .catch(err=> err)
}