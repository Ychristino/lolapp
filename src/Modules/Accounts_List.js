import { useEffect, useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';

import Player_Header_Profile from '../Models/Components/Player_Header_Profile';
import Ranked_Badge_Info from '../Models/Components/Ranked_Header_Info';
import Champion_Maestry from '../Models/Components/Champion_Maestry';
import Recent_Played from '../Models/Components/Recent_Played';

import ACCOUNTS from '../Constants/Accounts';
import SERVER_ROUTE from '../Constants/ApiServerRoutes';

import { getProfile } from '../services/AccountService'
import Player_Info from '../Models/Player_Info';
import Champions_Info from '../Models/Champions_Info';

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
                    <Accordion.Item 
                        key={key}
                        eventKey={key}
                    >
                        <Accordion.Header>
                                <Player_Info 
                                    account={account.summoner}
                                    rank={account.rank}
                                />
                        </Accordion.Header>
                        
                        <Accordion.Body>
                            <Champions_Info 
                                maestry={account.top_maestry}
                                history={account.history}
                                player={account.summoner.name}
                            />
                        </Accordion.Body>

                    </Accordion.Item>
                )}
            </Accordion>
        </>
    )
}

export default Account_List;