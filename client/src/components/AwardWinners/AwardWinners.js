import React from "react";
import "./AwardWinners.scss";
import { Link } from "react-router-dom";

export default function AwardWinners() {
  return (
    <div className="award-winners">
      <h1 className="award-winners__header">
        Here are the 2020-2021 award winners!
      </h1>
      <div className="award-winners__data-container">
        <div className="award-winners__award-container">
          <h4 className="award-winners__award-header">MVP</h4>
          <Link to="/players/3112335" className="award-winners__award-winner">
            Nikola Jokic
          </Link>
        </div>
        <div className="award-winners__award-container">
          <h4 className="award-winners__award-header">Scoring Title</h4>
          <Link to="/players/3975" className="award-winners__award-winner">
            Stephen Curry
          </Link>
        </div>
        <div className="award-winners__award-container">
          <h4 className="award-winners__award-header">
            Defensive Player of the Year
          </h4>
          <Link to="/players/3032976" className="award-winners__award-winner">
            Rudy Gobert
          </Link>
        </div>
        <div className="award-winners__award-container">
          <h4 className="award-winners__award-header">Most Improved Player</h4>
          <Link to="/players/3064514" className="award-winners__award-winner">
            Julius Randle
          </Link>
        </div>
        <div className="award-winners__award-container">
          <h4 className="award-winners__award-header">Sixth Man of the Year</h4>
          <Link to="/players/2528426" className="award-winners__award-winner">
            Jordan Clarkson
          </Link>
        </div>
      </div>
    </div>
  );
}
