import Figure from 'react-bootstrap/Figure';
import { useEffect, useState } from "react"
import { getChampionsById } from '../../services/ChampionService';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export default function Champion_Maestry(props){
    const [champion, setchampion] = useState(props.champion_Maestry)
    const [championId, setChampionId] = useState(champion.championId);
    const [championName, setChampionName] = useState();
    const [championMaestry, setChampionMaestry] = useState(champion.championLevel);
    const [championPoints, setChampionPoints] = useState(champion.championPoints)
    
    useEffect(()=> {
        findChampion(championId)
    },[])

    const findChampion = async(champion_id) => {
        const res = await getChampionsById(champion_id);
        setChampionName(res)
    }

    return(
    <>
        <Card
        border='light'>
            <Card.Img
                style={{ width: '100%'}} 
                variant="top" 
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`}
            />
            <Card.Body>
                <Card.Title>{championName}</Card.Title>
                <Card.Subtitle className="mb-4 text-muted">{`Maestria: ${championMaestry}`}</Card.Subtitle>
            </Card.Body>
            <Card.Footer className="text-muted">
                {`Pontos: ${championPoints.toLocaleString()}`}
            </Card.Footer>
        </Card>
    </>
    )
}