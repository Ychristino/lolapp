import { useEffect, useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';

import Player_Header_Profile from '../Models/Player_Header_Profile';
import Ranked_Badge_Info from '../Models/Ranked_Header_Info';
import Champion_Maestry from '../Models/Champion_Maestry';
import Recent_Played from '../Models/Recent_Played';

import ACCOUNTS from '../Constants/Accounts';
import SERVER_ROUTE from '../Constants/ApiServerRoutes';

import { getProfile } from '../services/AccountService'
import { Col, Row } from 'react-bootstrap';

function Account_List(){
    const [accountList, setAccountList] = useState([]);

    useEffect( () => {
        ACCOUNTS.map(account=> 
            findAccount(account.name),
        )
    },[])
    
    const findAccount = async(account) => {
        const res = await getProfile(SERVER_ROUTE.PLATFORM.BR1, account);
        setAccountList(oldList=> [...oldList, res])
    }

    return(
        <>
            <Accordion flush alwaysOpen>
                {accountList.map((account, key)=>
                <Row>
                    <Accordion.Item 
                        key={key}
                        eventKey={key}
                    >
                        <Accordion.Header> 
                            <Col>  
                                <Player_Header_Profile
                                    account={account.summoner.name}
                                    iconCode={account.summoner.profileIconId}
                                    level={account.summoner.summonerLevel}
                                />
                            </Col>
                            {account.rank.length != 0 
                            ? account.rank.sort((a, b)=>
                                ((a['queue'] > b['queue']) ? -1 : ((a['queue'] < b['queue']) ? 1 : 0))
                            ).map((rank)=>
                                <Col>
                                    <Ranked_Badge_Info 
                                        queue={rank.queueType}
                                        tier={rank.tier}
                                        rank={rank.rank}
                                        wins={rank.wins}
                                        loss={rank.losses}
                                    />
                                </Col>    
                            ) 
                                : <h1>Invocador ainda não possui partidas ranqueadas</h1>
                            }
                        </Accordion.Header>
                        
                        <Accordion.Body>
                            <Badge 
                                pill
                                bg='secondary'
                            >
                                <h1>Mais Jogados</h1>
                                {account.top_maestry.map(maestry=>
                                    <Champion_Maestry
                                        champion_id={maestry.championId}
                                    />

                                )}
                            </Badge>
                        </Accordion.Body>

                    </Accordion.Item>
                </Row>
                )}
            </Accordion>
        </>
    )
}

export default Account_List;