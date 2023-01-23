import axios from 'axios'


export const getChampionsById = async (champion_id)=> {
    let champion_list;
    champion_list = champion_list == undefined ? await getChampionsList() : champion_list;


    const champion_found = Object.keys(champion_list).find(champion=> {
        if (champion_list[champion].key == champion_id) return champion_list[champion] 
    })

    return champion_found
}

export const getChampionsList = async ()=> {
    
    return axios.get(`http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json`)
            .then(response=> response.data.data)
            .catch(err=> err)
}