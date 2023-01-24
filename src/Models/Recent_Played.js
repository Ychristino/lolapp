import Figure from 'react-bootstrap/Figure';
import { useEffect, useState } from "react"
import { getChampionsById } from '../services/ChampionService';
import { Badge } from 'react-bootstrap';
import { findParticipant } from '../services/MatchService';

export default function Recent_Played(props){

    const [matches, setMatches] = useState(props.matches);
    const [championName, setChampionName] = useState();
    const [win, setWin] = useState();
    const [kills, setKills] = useState();
    const [deaths, setDeaths] = useState();
    const [assists, setAssists] = useState();
    
    
    return(
    <>      
            <Badge
                bg={win ? 'success' : 'danger'}
            >
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
            </Badge>
    </>
    )
}