import React from "react";
import "./SearchResults.scss";
import PlayerCard from "../PlayerCard/PlayerCard";
import { Redirect } from "react-router-dom";
const playerList = require("../../utils/playerList");

class SearchResults extends React.Component {
  constructor() {
    super();
    this.state = {
      isPlayer: false,
      playerOptions: [],
      id: "",
    };
    this.getInfo = this.getInfo.bind(this);
  }

  componentDidMount() {
    this.getInfo(this.props.match.params.playerID);
  }

  getInfo(ID) {
    console.log("ID", ID);
    if (playerList.includes(ID)) {
      this.setState({ isPlayer: true, id: ID });
    } else {
      // console.log(playerList);
      const filteredOptions = playerList
        .map((player) => {
          const playerStr = player.toLowerCase();
          // console.log(playerStr);
          return playerStr;
          // return player.toLowerCase().indexOf(ID.toLowerCase()) > -1;
        })
        .filter((player) => {
          return player;
        });
      this.setState({ playerOptions: filteredOptions, id: ID });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.playerID !== prevState.id) {
      return { id: "", playerOptions: [] };
    } else {
      return null;
    }
  }

  // componentDidUpdate(nextProps) {
  //     if (this.state.id === "") {
  //         this.getInfo(nextProps.playerID);
  //     }
  // }

  render() {
    console.log(this.props);
    let results = (
      <div className="search-results">
        <div className="search-results__container">
          <div className="search-results__data-container">
            <h3 className="search-results__header">Search Results</h3>
            <div className="row p-2">
              <PlayerCard player={this.props.match.params.playerID} />
              {/* {this.state.playerOptions.length === 0 ? <h4>No Results</h4> : this.state.playerOptions.map((player) => {
                                return (<PlayerCard player={this.props.match.params.playerID} />);
                            })} */}
            </div>
          </div>
        </div>
      </div>
    );
    return this.state.isPlayer ? (
      <Redirect to={`/players/${this.props.playerID}`} />
    ) : (
      results
    );
  }
}
export default SearchResults;
