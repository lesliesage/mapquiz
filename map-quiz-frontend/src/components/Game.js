import React, { Component } from "react";
import {Container, Button} from 'semantic-ui-react'

class Game extends Component {
  state = {};

  displayGame = (game) => {
    const date = new Date(game.created_at.slice(0,4), game.created_at.slice(5,7), game.created_at.slice(8,10))
    return `${date.toLocaleDateString()}: ${game.score} points`
  }

  render() {
    return <Button onClick={() => this.props.handleClick(this.props.game)} className="game-button">
      {this.props.game ? this.displayGame(this.props.game) : null}
      </Button>;
  }
}

export default Game;
