import React from 'react';
import PlayerCard from "../PlayerCard/PlayerCard";
import { Redirect } from 'react-router-dom';
const playerList = require('../../utils/playerList');


class SearchResults extends React.Component {
    constructor() {
        super();
        this.state = {
            isPlayer: false,
            playerOptions: [],
            id: ""
        }
        this.getInfo = this.getInfo.bind(this);
    }

    componentDidMount() {
        this.getInfo(this.props.playerID);
    }

    getInfo(ID) {
        if (playerList.includes(ID)) {
            this.setState({isPlayer: true, id: ID});
        } else {

            const filteredOptions = playerList.filter(
                (player) => player.toLowerCase().indexOf(ID.toLowerCase()) > -1
            );
            this.setState({playerOptions: filteredOptions, id: ID});
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.playerID !== prevState.id){
            return {id: "", playerOptions: []};
        } 
        else {
            return null;
        }
     }

    componentDidUpdate(nextProps) {
        if (this.state.id === "") {
            this.getInfo(nextProps.playerID);
        }
    }

    render() {
        let results = (
            <div className="player justify-content-center">
                <div className="text-light">
                    <div className="d-inline-block align-items-center container-fluid m-auto dark-overlay justify-content-center">
                        <h3>Search Results</h3>
                        <div className="row p-2">
                            {this.state.playerOptions.length === 0 ? <h4>No Results</h4> : this.state.playerOptions.map((player) => {
                                return (<PlayerCard player={this.props.playerID} />);
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            this.state.isPlayer ? <Redirect to={`/players/${this.props.playerID}`} /> : results
        );
    }
}
export default SearchResults;