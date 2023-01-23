import { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Badge from 'react-bootstrap/Badge';
import ProgressBar from 'react-bootstrap/ProgressBar';


export default function Ranked_Badge_Info(props){
    
    const [queue, setQueue] = useState(props.queue  != undefined ? props.queue  : 'N/A')
    const [tier, setTier]   = useState(props.tier   != undefined ? props.tier   : 'N/A')
    const [rank, setRank]   = useState(props.rank   != undefined ? props.rank   : 'N/A')
    const [wins, setWins]   = useState(props.wins   != undefined ? props.wins   : 'N/A')
    const [loss, setLoss]   = useState(props.loss   != undefined ? props.loss   : 'N/A')
    
    return(
        <>
            <OverlayTrigger
                placement='right'
                overlay={
                    <Tooltip>
                        <strong>{`${wins}/${loss}`}</strong>
                    </Tooltip>
                }
            >

            <Badge 
                bg="secondary"
            >
                <h2 className='elo'>{`${queue.includes("RANKED_FLEX_SR") ? 'FLEX': 'SOLO'}`}</h2>
                <h2 className='elo'>{`${tier} ${rank}`}</h2>
                <div className={`elo-ico ${tier.toLowerCase()}`} />

                <ProgressBar>
                    <ProgressBar striped variant="success"  now={(wins*100)/(wins+loss)} key={1} label={`${((wins*100)/(wins+loss)).toFixed(0)}%`} />
                    <ProgressBar striped variant="danger"   now={(loss*100)/(wins+loss)} key={2} label={`${((loss*100)/(wins+loss)).toFixed(0)}%`} />
                </ProgressBar>
            </Badge>
            </OverlayTrigger>            
        </>
    )
}