import Figure from 'react-bootstrap/Figure';
import { useEffect, useState } from "react"
import { getChampionsById } from '../services/ChampionService';

export default function Champion_Maestry(props){
    const [championId, setChampionId] = useState(props.champion_id);
    const [championName, setChampionName] = useState();
    
    useEffect(()=> {
        findChampion(championId)
    },[])

    const findChampion = async(champion_id) => {
        const res = await getChampionsById(champion_id);
        setChampionName(res)
    }

    return(
    <>      
            <div className='maestry-list'>
                <Figure>
                    <Figure.Image
                        width={60}
                        height={60}
                        src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${championName}.png`}
                        roundedCircle
                    />
                    <Figure.Caption>
                        <h2>{championName}</h2>
                    </Figure.Caption>
                </Figure>
            </div>
    </>
    )
}