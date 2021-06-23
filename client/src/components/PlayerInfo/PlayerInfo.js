import React, {Component} from 'react';
import axios from "axios";

class PlayerInfo extends Component {
state = {
    playerName: null,
    playerStats: {}
}

handleSubmit = (e) => {
  e.preventDefault();
  this.getPlayerId()
  console.log(this.state.playerName)
}

handleChange = (event) => {
  const replace = event.target.value.split(" ").join("_");
  if(replace.length > 0){
    this.setState({playerName: replace})
  } else {
    alert("Please type players name!")
  }
}



  getPlayerId = () => {
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
    .then(async res => {
      // console.log(res.data.data)
      if(res.data.data[0] === undefined){
        alert("This player is either injured or hasn't played yet!")
      } else if(res.data.data.length > 1){
        alert("Pleases specify the name more!")
      } else{
        return this.getPlayerStats(res.data.data[0].id)

      }
    }).catch(err => {
      console.log(err)
    })
  }

  getPlayerStats = (playerId) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${playerId}`)
    .then(async res => {
      console.log(res.data.data)
      this.setState({ playerStats: res.data.data[0]})
    }).catch(err => {
      console.log(err)
    })
  }


  
  render(){
  return (
      <>
    <div className="player-info">
     <form onSubmit={this.handleSubmit}>
       <label>
         Name
         <input 
         className="player-info__searchbar"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="please enter players name"
         />
       </label>
       <input type="submit" value="Submit"/>
     </form>
     <p className="player-info__season-information">Games Played: {this.state.playerStats["games_played"]}</p> 
     <p className="player-info__season-information">Points Averaged: {this.state.playerStats["pts"]}</p> 
     <p className="player-info__season-information">Rebounds Averaged: {this.state.playerStats["reb"]}</p>
     <p className="player-info__season-information">Assists Averaged: {this.state.playerStats["ast"]}</p>
     <p className="player-info__season-information">Blocks Averaged: {this.state.playerStats["blk"]}</p>
     <p className="player-info__season-information">Steals Averaged: {this.state.playerStats["stl"]}</p>
     <p className="player-info__season-information">Field Goal Percentage (decimal): {this.state.playerStats["fg_pct"]}</p>
     <p className="player-info__season-information">Free Throw Percentage (decimal): {this.state.playerStats["ft_pct"]}</p>
     <p className="player-info__season-information">3 Point Percentage (decimal): {this.state.playerStats["fg3_pct"]}</p>
     <p className="player-info__season-information">Turnovers Averaged: {this.state.playerStats["turnover"]}</p>

     <div className="player-info__players-list">
         this.state.
     </div>
    </div>
    

    </>
  );
}
}
export default PlayerInfo;
