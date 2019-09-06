import React, { Component } from "react";
import Game from "../components/Game.js";

class MyStats extends Component {
  state = {};
  render() {
    return (
      <div>
        MyStats Container Here
        <Game />
      </div>
    );
  }
}

export default MyStats;
