import React, { Component } from "react";
import LeaderBoard from "./LeaderBoard.js";
import MyStats from "./MyStats.js";
import Deets from "./Deets.js";

class StatsContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        StatsContainer Here
        <LeaderBoard />
        <MyStats />
        <Deets />
      </div>
    );
  }
}

export default StatsContainer;
