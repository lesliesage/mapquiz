import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

class Question extends Component {
  state = {};
  render() {
    return (
      <Grid.Row columns={2}>
        <Grid.Column>
          {this.props.index+1}: {this.props.question.city.name}, {this.props.question.city.country}
        </Grid.Column>
        <Grid.Column>Off by: {this.props.question.distance} km</Grid.Column>
      </Grid.Row>
    );
  }
}

export default Question;
