import { useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import Champion_Maestry from "./Components/Champion_Maestry"
import Recent_Played from "./Components/Recent_Played"

export default function Champions_Info(props){

    const [maestryList, setMaestryList] = useState(props.maestry)
    const [history, setHistory]         = useState(props.history)
    const [player, setPlayer]           = useState(props.player)

    return(
        <>
            <Container>
                <h1>Mais Jogados</h1>
                <Row sm={1} md={3} lg={5}>
                    {maestryList.map(maestry=>
                        <Champion_Maestry
                            champion_Maestry={maestry}
                        />
                    )}
                </Row>

                <h1>Recentemente Jogados</h1>
                <Row sm={1} md={3} lg={5}>
                    {history.map(match=>
                        <Recent_Played 
                            match={match}
                            summoner={player}
                        />
                    )}
                </Row>
            </Container>
        </>
    )
}