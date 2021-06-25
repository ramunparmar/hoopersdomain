import React, { Component } from "react";
import LeaderTable from "../LeaderTable/LeaderTable";
import axios from "axios";
import "./CurrentStatLeaders.scss";

export default class CurrentStatLeaders extends Component {
  state = {
    PPG: [],
    APG: [],
    RPG: [],
    BPG: [],
    SPG: [],
    THREEPM: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3333/leaders")
      .then((response) => {
        console.log(response);
        this.setState(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="league-leaders">
        <div className="league-leaders__container">
          <div className="league-leaders__data-container">
            <div className="league-leaders__header-container">
              <h1 className="league-leaders__header">League Leaders</h1>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-4">
                <LeaderTable stat="PPG" players={this.state.PPG} />
              </div>
              <div className="col-md-6 col-xl-4">
                <LeaderTable stat="APG" players={this.state.APG} />
              </div>
              <div className="col-md-6 col-xl-4">
                <LeaderTable stat="RPG" players={this.state.RPG} />
              </div>
              <div className="col-md-6 col-xl-4">
                <LeaderTable stat="BPG" players={this.state.BPG} />
              </div>
              <div className="col-md-6 col-xl-4">
                <LeaderTable stat="SPG" players={this.state.SPG} />
              </div>
              <div className="col-md-6 col-xl-4">
                <LeaderTable stat="3PM" players={this.state.THREEPM} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
