import axios from 'axios'
import ROUTE from '../Constants/ApiRoutes';
import { API_KEY } from '../Constants/ApiKey';

import { route_to_region } from './Route_to_Region';

export const getHistory = async (server_route, summoner, list_size=5)=>{
    const match_list    = await getMatchesList(server_route, summoner.puuid, list_size)
    
    return Promise.all(match_list.map(match=>
                        getMatch(server_route, match)    
                    )
                ).then(response=> response)

}

export const getMatchesList = async (server_route, summoner_puuid, list_size=5)=> {
    const URL =  route_to_region(server_route) + ROUTE.MATCH.BY_PUUID
    
    return axios.get(`${URL}${summoner_puuid}/ids?api_key=${API_KEY}&count=${list_size}`)
            .then(response=> response.data)
            .catch(err=> err)
}

export const getMatch = async (server_route, match_id)=> {
    const URL =  route_to_region(server_route) + ROUTE.MATCH.BY_MATCH_ID
    
    return axios.get(`${URL}${match_id}?api_key=${API_KEY}`)
            .then(response=> response.data)
            .catch(err=> err)
}

export const findSummoner = (participants_list, summoner_to_find)=>{

    return Object.assign(participants_list).find(summoner=> 
        summoner.summonerName == summoner_to_find 
    )

}