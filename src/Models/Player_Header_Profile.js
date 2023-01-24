import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure'
import Badge from 'react-bootstrap/Badge';

import ACCOUNTS from '../Constants/Accounts';

export default function Player_Header_Profile(props){

    const [account, setAccount] = useState(props.account)
    const [iconCode, setIconCode]       = useState(props.iconCode)
    const [level, setLevel]     = useState(props.level)

    return(
        <>
            <div className='summoner-profile'>
                <h3>{level}</h3>
                
                <Figure
                    className='summoner-profile'
                >
                    <Figure.Image
                        width={80}
                        height={80}
                        src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${iconCode}.png`}
                        roundedCircle
                    />

                    <Figure.Caption>
                        <h1>{account}</h1>
                    </Figure.Caption>

                </Figure>
            </div>
        </>
    )
}