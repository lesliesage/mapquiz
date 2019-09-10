import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Question from "../components/Question.js";


class Deets extends Component {
  state = {};
  render() {
    return (
      <Grid id="deets">
          {this.props.game ? 
          this.props.game.questions.map((question, index) => <Question key={question.id} question={question} index={index} />
          ) : null
        }
      </Grid>
    );
  }
}

export default Deets;
