import React from "react";
import Game from "./Game.js";
import { Container } from "semantic-ui-react";

const MyStats = (props) => {
  let sorted = () => {
    return props.games.sort((a, b) => (a.score < b.score ? 1 : -1));
  };
  return (
    <Container id="my-stats-section">
      {sorted().map((game) => {
        return (
          <Game key={game.id} game={game} handleClick={props.handleClick} />
        );
      })}
    </Container>
  );
};

export default MyStats;
