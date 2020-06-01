import React from "react";
import { Button } from "semantic-ui-react";
import { MONTHS } from "../constants/constants.js";

let displayGame = (game) => {
  const date = new Date(
    game.created_at.slice(0, 4),
    game.created_at.slice(5, 7),
    game.created_at.slice(8, 10)
  );
  return `${parseInt(
    game.score
  )} points ${"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"} ${
    MONTHS[date.getMonth()]
  } ${date.getFullYear()}`;
};

const Game = (props) => {
  return (
    <Button
      onClick={() => props.handleClick(props.game)}
      className="game-button"
    >
      {props.game ? displayGame(props.game) : null}
    </Button>
  );
};

export default Game;
