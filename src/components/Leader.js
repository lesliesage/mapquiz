import React from "react";
import { Grid } from "semantic-ui-react";

const Leader = (props) => {
  return (
    <React.Fragment>
      <Grid.Column textAlign="right">{props.index}.</Grid.Column>
      <Grid.Column>{props.game.user.username}</Grid.Column>
      <Grid.Column>{parseInt(props.game.score)}</Grid.Column>
    </React.Fragment>
  );
};

export default Leader;
