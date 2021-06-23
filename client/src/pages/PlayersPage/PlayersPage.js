import React, { Component } from 'react';
// import PlayerInfo from '../../components/PlayerInfo/PlayerInfo';
import PlayerTable from '../../components/PlayerTable/PlayerTable';
import PlayersList from '../../components/PlayersList/PlayersList';

export default class PlayersPage extends Component {
    render() {
        return (
            <div>
                <PlayersList />
                <PlayerTable playerID={this.props.match.params.playerID}/>
            </div>
        )
    }
}

