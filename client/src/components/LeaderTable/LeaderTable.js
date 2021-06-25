import React from "react";
import { Link } from "react-router-dom";

export default function LeaderTable(props) {
  const leaders = props.players.map((player) => {
    console.log(player);
    return (
      <tr key={player.player}>
        <td>{player.rank}</td>
        <td>
          <Link
            to={`/players/${player.player}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            {player.player}
          </Link>
        </td>
        <td>{player.team}</td>
        <td>{player.value}</td>
      </tr>
    );
  });

  return (
    <div className="leaders-table-container">
      <table className="leaders-table">
        <thead>
          <tr>
            <th colSpan="4">{props.stat}</th>
          </tr>
        </thead>
        <tbody>{leaders}</tbody>
      </table>
    </div>
  );
}
