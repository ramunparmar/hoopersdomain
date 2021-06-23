import React, { Component } from 'react'
import './HomePage.scss';
import * as NBAIcons from 'react-nba-logos';
import CurrentStatLeaders from '../../components/CurrentStatLeaders/CurrentStatLeaders';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Link } from 'react-router-dom';
const playerList = require('../../utils/playerList');

export default class HomePage extends Component {

    render() {
        return (
            <>
            <section className="home">
                <h1 className="home__header">Welcome to Hooper's Domain!</h1>
                <CurrentStatLeaders />
            </section>
            <section className="teams">
                <h1 className="teams__header">Teams</h1>
                <div className="teams__icons">
                    <Link to='/team/ATL'>
                        <NBAIcons.ATL/>
                    </Link>
                    <Link to='/team/BKN'>
                        <NBAIcons.BKN/>
                    </Link>
                    <Link to='/team/BOS'>
                        <NBAIcons.BOS/>
                    </Link>
                    <Link to='/team/CHA'>
                        <NBAIcons.CHA/>
                    </Link>
                    <Link to='/team/CHI'>
                        <NBAIcons.CHI/>
                    </Link>
                    <Link to='/team/CLE'>
                        <NBAIcons.CLE/>
                    </Link>
                    <Link to='/team/DAL'>
                        <NBAIcons.DAL/>
                    </Link>
                    <Link to='/team/DEN'>
                        <NBAIcons.DEN/>
                    </Link>
                    <Link to='/team/DET'>
                        <NBAIcons.DET/>
                    </Link>
                    <Link to='/team/GSW'>
                        <NBAIcons.GSW/>
                    </Link>
                    <Link to='/team/HOU'>
                        <NBAIcons.HOU/>
                    </Link>
                    <Link to='/team/IND'>
                        <NBAIcons.IND/>
                    </Link>
                    <Link to='/team/LAC'>
                        <NBAIcons.LAC/>
                    </Link>
                    <Link to='/team/LAL'>
                        <NBAIcons.LAL/>
                    </Link>
                    <Link to='/team/MEM'>
                        <NBAIcons.MEM/>
                    </Link>
                    <Link to='/team/MIA'>
                        <NBAIcons.MIA/>
                    </Link>
                    <Link to='/team/MIL'>
                        <NBAIcons.MIL/>
                    </Link>
                    <Link to='/team/MIN'>
                        <NBAIcons.MIN/>
                    </Link>
                    <Link to='/team/NOP'>
                        <NBAIcons.NOP/>
                    </Link>
                    <Link to='/team/NYK'>
                        <NBAIcons.NYK/>
                    </Link>
                    <Link to='/team/OKC'>
                        <NBAIcons.OKC/>
                    </Link>
                    <Link to='/team/ORL'>
                        <NBAIcons.ORL/>
                    </Link>
                    <Link to='/team/PHI'>
                        <NBAIcons.PHI/>
                    </Link>
                    <Link to='/team/PHX'>
                        <NBAIcons.PHX/>
                    </Link>
                    <Link to='/team/POR'>
                        <NBAIcons.POR/>
                    </Link>
                    <Link to='/team/SAC'>
                        <NBAIcons.SAC/>
                    </Link>
                    <Link to='/team/SAS'>
                        <NBAIcons.SAS/>
                    </Link>
                    <Link to='/team/TOR'>
                        <NBAIcons.TOR/>
                    </Link>
                    <Link to='/team/UTA'>
                        <NBAIcons.UTA/>
                    </Link>
                    <Link to='/team/WAS'>
                        <NBAIcons.WAS/>
                    </Link>
                </div>
            </section>
            <SearchBar options={playerList}/>
            </>
        )
    }
}
