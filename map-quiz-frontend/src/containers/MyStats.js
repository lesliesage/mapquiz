import React, { Component } from "react";
import Game from "../components/Game.js";

class MyStats extends Component {
  state = {};
  render() {
    return (
      <div>
        MyStats Container Here
        {this.props.games.map(game => {
          return <Game game={game} />
        })}
      </div>
    );
  }
}

export default MyStats;
