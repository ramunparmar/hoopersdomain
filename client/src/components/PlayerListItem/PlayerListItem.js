import React from 'react'
import { Link } from 'react-router-dom';
import playerKey from '../../utils/playerKey';


const toEspnId = (player) => {
   return playerKey[player.first_name + ' ' + player.last_name]
}


export default function PlayerListItem(props) {
    return (
        <Link to={`/players/${toEspnId(props.player)}`}>
        <tr className="player-list-row-item">
            <td className="player-list-data-item">{props.player.first_name} {props.player.last_name}</td>
        </tr>
        </Link>
    )
}
