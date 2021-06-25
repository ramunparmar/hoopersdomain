import React from "react";
import "./PlayerCard.scss";
import axios from "axios";
import { Redirect } from "react-router-dom";

class PlayerCard extends React.Component {
  constructor() {
    super();
    this.state = {
      playerInfo: {},
      playerStats: [],
      playerPhoto: "",
      errors: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    axios
      .get(`http://localhost:3333/players/${this.props.player}`)
      .then((results) => {
        console.log(results);
        if (results.data.basics === undefined) {
          this.setState({ errors: "Could not retrieve player information" });
        } else {
          this.setState({
            playerInfo: results.data.basics,
            playerPhoto: results.data.photo,
            playerStats: results.data.stats,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errors: error });
      });
  }

  handleClick(event) {
    event.preventDefault();
    console.log(event.target.name);
    return <Redirect to={{ pathname: "/players/" + event.target.name }} push />;
  }

  render() {
    if (
      typeof this.state.errors === "object" &&
      !(Object.keys(this.state.errors).length === 0)
    ) {
      return null;
    }
    if (
      typeof this.state.playerInfo === "object" &&
      Object.keys(this.state.playerInfo).length === 0
    ) {
      return null;
    } else {
      return (
        <div className="player-card">
          <img
            alt={`${this.state.playerInfo.firstName} ${this.state.playerInfo.lastName}`}
            src={this.state.playerPhoto}
          />
          <div className="player-card__body">
            <h4 className="player-card__header">
              {this.state.playerInfo.firstName} {this.state.playerInfo.lastName}
            </h4>
            <p className="player-card__information">
              {this.state.playerInfo.team}
            </p>
            <p className="player-card__information">
              {this.state.playerInfo.position} {this.state.playerInfo.number}
            </p>
            <p className="player-card__information">
              Points per Game: {this.state.playerInfo.ppg}
            </p>
            <p className="player-card__information">
              Rebounds per Game: {this.state.playerInfo.rpg}
            </p>
            <p className="player-card__information">
              Assists per Game: {this.state.playerInfo.apg}
            </p>
          </div>
        </div>
      );
    }
  }
}
export default PlayerCard;
