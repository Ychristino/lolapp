import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure'

export default function Player_Header_Profile(props){

    const [summoner, setSummoner]   = useState(props.summoner);
    const [account, setAccount]     = useState(summoner.name)
    const [iconCode, setIconCode]   = useState(summoner.profileIconId)
    const [level, setLevel]         = useState(summoner.summonerLevel)

    return(
        <>
            <Col className='text-center'>
                <h3>{level}</h3>
                <Figure>
                    <Figure.Image
                        width={80}
                        height={80}
                        src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${iconCode}.png`}
                        roundedCircle
                    />
                </Figure>
                <h1>{account}</h1>
            </Col>
        </>
    )
}