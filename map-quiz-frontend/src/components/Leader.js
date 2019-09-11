import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

class Leader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Grid.Column textAlign='right'>{this.props.index}.</Grid.Column>
        <Grid.Column>{this.props.game.user.username}</Grid.Column>
        <Grid.Column>{parseInt(this.props.game.score)}</Grid.Column>
      </React.Fragment>
    );
  }
}

export default Leader;
