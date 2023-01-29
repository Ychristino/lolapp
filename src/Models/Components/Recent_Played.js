import Figure from 'react-bootstrap/Figure';
import { useEffect, useState } from "react"
import { getChampionsById } from '../../services/ChampionService';
import { Badge, Card } from 'react-bootstrap';
import { findSummoner } from '../../services/MatchService';

export default function Recent_Played(props){

    const [match, setMatch]                 = useState(props.match)
    const [summoner, setSummoner]           = useState(props.summoner)
    const [championName, setChampionName]   = useState();
    const [win, setWin]                     = useState();
    const [kills, setKills]                 = useState();
    const [deaths, setDeaths]               = useState();
    const [assists, setAssists]             = useState();
    const [position, setPosition]           = useState();
    
    useEffect(()=>{
        const data = findSummoner(match.info.participants, summoner) 
        setChampionName(data.championName)
        setWin(data.win)
        setKills(data.kills)
        setDeaths(data.deaths)
        setAssists(data.assists)
        setPosition(data.teamPosition)
    },[])
    
    return(
    <>      
        <Card
            bg={win ? 'success' : 'danger'}
            className='text-center'
        >
            <Card.Header><h2>{position}</h2></Card.Header>
            <Card.Img
                style={{ width: '100%'}} 
                variant="top" 
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`}
            />

            <Card.Footer><h2>{kills}/{deaths}/{assists}</h2></Card.Footer>
        </Card>
    </>
    )
}