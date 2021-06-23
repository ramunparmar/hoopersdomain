import React, { Component } from 'react';
import PlayerTable from '../../components/PlayerTable/PlayerTable';
// import PlayersList from '../../components/PlayersList/PlayersList';
// import PlayerInfo from '../../components/PlayerInfo/PlayerInfo';

export default class PlayersPage extends Component {
    render() {
        return (
            <div>
                <PlayerTable playerID={this.props.match.params.playerID}/>
            </div>
        )
    }
}

