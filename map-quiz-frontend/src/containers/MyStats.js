import React, { Component } from "react";
import Game from "../components/Game.js";
import { Container, Header } from "semantic-ui-react";

class MyStats extends Component {
  state = {};
  render() {
    return (
      <Container id="my-stats-section">
        {this.props.games.map(game => {
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
