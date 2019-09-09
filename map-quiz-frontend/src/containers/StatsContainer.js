import React, { Component } from "react";
import LeaderBoard from "./LeaderBoard.js";
import MyStats from "./MyStats.js";
import Deets from "./Deets.js";
import { Container } from 'semantic-ui-react'


class StatsContainer extends Component {
  state = {};
  render() {
    return (
      <Container>
        StatsContainer Here
        <LeaderBoard />
        <MyStats />
        <Deets />
      </Container>
    );
  }
}

export default StatsContainer;