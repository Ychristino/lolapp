import { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Badge from 'react-bootstrap/Badge';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import Popover from 'react-bootstrap/Popover';
import { Col } from 'react-bootstrap';


export default function Ranked_Badge_Info(props){
    
    const [rankedInfo, setRankedInfo]   = useState(props.ranked_info);
       
    const [queue, setQueue]    = useState(rankedInfo.queueType     != undefined ? rankedInfo.queueType    : 'N/A');
    const [tier, setTier]      = useState(rankedInfo.tier          != undefined ? rankedInfo.tier         : 'N/A');
    const [rank, setRank]      = useState(rankedInfo.rank          != undefined ? rankedInfo.rank         : 'N/A');
    const [wins, setWins]      = useState(rankedInfo.wins          != undefined ? rankedInfo.wins         : 'N/A');
    const [loss, setLoss]      = useState(rankedInfo.losses        != undefined ? rankedInfo.losses       : 'N/A');
    const [points, setPoints]  = useState(rankedInfo.leaguePoints  != undefined ? rankedInfo.leaguePoints : 'N/A')

    const dsp_queue = (queue_name)=>{
        switch(queue_name){
            
            case 'RANKED_FLEX_SR':
                return 'Flex';
            
            case 'RANKED_SOLO_SR':
                return 'Solo';
            
            default:
                return 'N/A';
        }
    }

    return(
        <>  
            <Col>
                <OverlayTrigger
                    placement='bottom'
                    overlay={
                        <Popover id="popover-basic" className='text-center'>
                        <Popover.Header as="h3">Wins/Losses</Popover.Header>
                        <Popover.Body>
                            {`${wins} / ${loss}`}
                        </Popover.Body>
                    </Popover>
                    }
                >
                    <Card className="text-center" border="light">
                        <Card.Header>{dsp_queue(queue)}</Card.Header>
                        <Card.Title>{`${tier} ${rank}`}</Card.Title>
                        <Card.Text>
                            {points} pontos
                            <div className={`elo-ico ${tier.toLowerCase()}`} />
                        </Card.Text>
                        <Card.Footer>
                            <ProgressBar>
                                <ProgressBar striped variant="success"  now={(wins*100)/(wins+loss)} key={1} label={`${((wins*100)/(wins+loss)).toFixed(0)}%`} />
                                <ProgressBar striped variant="danger"   now={(loss*100)/(wins+loss)} key={2} label={`${((loss*100)/(wins+loss)).toFixed(0)}%`} />
                            </ProgressBar>
                        </Card.Footer>
                    </Card>
                </OverlayTrigger>
            </Col>
        </>
    )
}