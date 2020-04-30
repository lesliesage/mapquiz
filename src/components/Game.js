import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class Game extends Component {
  state = {};

  months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  displayGame = game => {
    const date = new Date(
      game.created_at.slice(0, 4),
      game.created_at.slice(5, 7),
      game.created_at.slice(8, 10)
    );
    return `${parseInt(
      game.score
    )} points ${"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"} ${
      this.months[date.getMonth()]
    } ${date.getFullYear()}`;
  };

  render() {
    return (
      <Button
        onClick={() => this.props.Click(this.props.game)}
        className="game-button"
      >
        {this.props.game ? this.displayGame(this.props.game) : null}
      </Button>
    );
  }
}

export default Game;
