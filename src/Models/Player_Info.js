import Player_Header_Profile from "./Components/Player_Header_Profile"
import Ranked_Badge_Info from "./Components/Ranked_Header_Info";

import { useState } from "react"
import { Col, Container, Row } from 'react-bootstrap';

export default function Player_Info(props){
    
    const [summoner, setSummoner]   = useState(props.account)
    const [rank, setRank]           = useState(props.rank)

    return(
        <>
            <Container>
                <Row sm={1} md={3}>
                    <Player_Header_Profile
                        summoner={summoner}
                    />

                    {rank.length != 0 ? rank.sort((a, b)=> ((a['queueType'] > b['queueType']) ? -1 : ((a['queueType'] < b['queueType']) ? 1 : 0)))
                        .map((rank)=>
                            <>
                                <Ranked_Badge_Info 
                                    ranked_info={rank}
                                />
                            </>
                        ) : <h1>Invocador ainda não possui partidas ranqueadas</h1>
                    
                    }
                    
                </Row>
            </Container>
        </>
    )
}