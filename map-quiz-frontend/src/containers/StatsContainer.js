import React, { Component } from "react";
import LeaderBoard from "./LeaderBoard.js";
import MyStats from "./MyStats.js";
import Deets from "./Deets.js";
import { Container } from "semantic-ui-react";

class StatsContainer extends Component {
  state = {
    games: [],
    gameForDeets: 0
  };

  componentDidMount() {
    if (this.props.user) {
    fetch(`http://localhost:3000/users/${this.props.user.username}`)
      .then(resp => resp.json())
      .then(data => this.setState(data[0].games));
    } else return null
  }

  setGameForDeets = event => {
    this.setState({ gameForDeets: event.target.value });
  };

  render() {
    return (
      <Container>
        StatsContainer Here
        <LeaderBoard />
        {this.props.loggedIn ? (
          <Container>
            <MyStats games={this.state.games} />
            <Deets
              game={this.state.gameForDeets}
              handleClick={this.setGameForDeets}
            />
          </Container>
        ) : null}
      </Container>
    );
  }
}

export default StatsContainer;
