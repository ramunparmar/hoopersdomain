import React from "react";
import axios from "axios";
import "./PlayerTable.scss";

class PlayerTable extends React.Component {
  state = {
    playerInfo: {},
    playerStats: [],
    playerPhoto: "",
    id: "",
    errors: {},
  };

  getInfo(ID) {
    axios
      .get(`http://localhost:3333/players/${ID}`)
      .then((results) => {
        console.log(results);
        if (results.data.errors) {
          this.setState({ errors: results.data.errors });
        } else {
          // console.log(results);
          this.setState({
            playerInfo: results.data.basics,
            playerStats: results.data.stats,
            playerPhoto: results.data.photo,
            id: ID,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getInfo(this.props.playerID);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.playerID !== prevState.id) {
      return { playerInfo: {} };
    } else {
      return null;
    }
  }

  // componentDidUpdate(nextProps) {
  //     if ((Object.keys(this.state.playerInfo).length === 0) && typeof(this.state.playerInfo) === "object") {
  //         this.getInfo(nextProps.playerID);
  //     }
  // }

  render() {
    let seasonStats = [];
    if (this.state.playerStats.length !== 0) {
      this.state.playerStats.forEach((year) => {
        seasonStats.push(
          <tr key={year.season}>
            <td>{year.season}</td>
            <td>{year.team}</td>
            <td>{year.GP}</td>
            <td>{year.MIN}</td>
            <td>{year.PTS}</td>
            <td>{year.FGM}</td>
            <td>{year.FGA}</td>
            <td>{year.FG_PCT}</td>
            <td>{year.FG3M}</td>
            <td>{year.FG3A}</td>
            <td>{year.FG3_PCT}</td>
            <td>{year.FTM}</td>
            <td>{year.FTA}</td>
            <td>{year.FT_PCT}</td>
            <td>{year.OREB}</td>
            <td>{year.DREB}</td>
            <td>{year.REB}</td>
            <td>{year.AST}</td>
            <td>{year.TOV}</td>
            <td>{year.STL}</td>
            <td>{year.BLK}</td>
          </tr>
        );
      });
    }
    let playerInfo = (
      <div>
        <div className="player-info-table">
          <div className="player-info-table__image-container">
            <img
              width="30%"
              src={this.state.playerPhoto}
              alt={
                this.state.playerInfo.firstName +
                " " +
                this.state.playerInfo.lastName
              }
            ></img>
          </div>
          <div className="col-8">
            <h1 className="display-3">
              {this.state.playerInfo.firstName} {this.state.playerInfo.lastName}
            </h1>
            <h1>
              <small className="display-4 text-muted">
                {this.state.playerInfo.position}
              </small>
            </h1>
            <h3 className="display-4">
              {this.state.playerInfo.team}
              <small className="text-muted">
                {" "}
                - {this.state.playerInfo.number}
              </small>
            </h3>
            <div className="player-info-table__current-season-stats">
              <div className="col-3">
                <div>Height: {this.state.playerInfo.height}</div>
                <div>Weight: {this.state.playerInfo.weight}</div>
                <div>Age: {this.state.playerInfo.age}</div>
              </div>
              <div className="text-center__container">
                <div className="col-3 text-center">
                  <h2>PPG</h2>
                  <h3>{this.state.playerInfo.ppg}</h3>
                </div>
                <div className="col-3 text-center">
                  <h2>RPG</h2>
                  <h3>{this.state.playerInfo.rpg}</h3>
                </div>
                <div className="col-3 text-center">
                  <h2>APG</h2>
                  <h3>{this.state.playerInfo.apg}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="player-info-table__container">
          <h2>Per Game Stats</h2>
          <div className="table-responsive">
            <table
              className="players-info__players-table"
              style={{ fontSize: 14 }}
            >
              <thead>
                <tr>
                  <th scope="col">Season</th>
                  <th scope="col">Team</th>
                  <th scope="col">GP</th>
                  <th scope="col">MIN</th>
                  <th scope="col">PTS</th>
                  <th scope="col">FGM</th>
                  <th scope="col">FGA</th>
                  <th scope="col">FG%</th>
                  <th scope="col">3PM</th>
                  <th scope="col">3PA</th>
                  <th scope="col">3P%</th>
                  <th scope="col">FTM</th>
                  <th scope="col">FTA</th>
                  <th scope="col">FT%</th>
                  <th scope="col">OREB</th>
                  <th scope="col">DREB</th>
                  <th scope="col">REB</th>
                  <th scope="col">AST</th>
                  <th scope="col">TOV</th>
                  <th scope="col">STL</th>
                  <th scope="col">BLK</th>
                </tr>
              </thead>
              <tbody>
                {this.state.playerStats.length === 0 ? null : seasonStats}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );

    if (
      !(Object.keys(this.state.errors).length === 0) &&
      typeof this.state.errors === "object"
    ) {
      return (
        <div className="player justify-content-center">
          <div className="text-light">
            <div className="d-flex align-items-center container-fluid mx-auto dark-overlay center justify-content-center">
              <h4>Uh Oh! An error occurred while retrieving the data...</h4>
              <h4>Please refresh the page and try again</h4>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="player justify-content-center">
          <div className="text-light player-overlay">
            <div className="container center">
              {!(Object.keys(this.state.playerInfo).length === 0) &&
              typeof this.state.playerInfo === "object"
                ? playerInfo
                : null}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PlayerTable;
