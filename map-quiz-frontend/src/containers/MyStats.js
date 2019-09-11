import React, { Component } from "react";
import Game from "../components/Game.js";
import { Container } from "semantic-ui-react";

class MyStats extends Component {
  sorted = () => {
    return this.props.games.sort((a, b) => (a.score < b.score ? 1 : -1));
  };
  render() {
    return (
      <Container id="my-stats-section">
        {this.sorted().map(game => {
          return (
            <Game
              key={game.id}
              game={game}
              handleClick={this.props.handleClick}
            />
          );
        })}
      </Container>
    );
  }
}

export default MyStats;
