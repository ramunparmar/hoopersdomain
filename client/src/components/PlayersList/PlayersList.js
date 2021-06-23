import React, { Component } from 'react'
import axios from 'axios'
import PlayerListItem from '../PlayerListItem/PlayerListItem';

export default class PlayersList extends Component {
state = {
    players: [],
}
    componentDidMount() {
            axios.get('http://localhost:3333/players/').then((res) => {
                this.setState({players: res.data.data});
            }).catch((error) => {
                console.log(error);
            })
        
    }



    render() {
        console.log(this.state.players);
        return (
            <div>
                <table>
                {this.state.players.map((player) => {
                  return <PlayerListItem player={player} key={player.id}/>
                })}
                </table>
            </div>
        )
    }
}
