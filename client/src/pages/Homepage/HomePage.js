import React, { Component } from 'react'
import * as NBAIcons from 'react-nba-logos';

export default class HomePage extends Component {
    // state = {
    //     players: [],
    //     teams: []
    // }
    render() {
        return (
            <section className="home">
                <h1 className="home__header">Welcome to Hooper's Domain!</h1>
                <p className="home__information">Below are all the current Stat leaders in their respective categories!</p>
        
                <CurrentStatLeaders />

                <NBAIcons.ATL />

            </section>
        )
    }
}
