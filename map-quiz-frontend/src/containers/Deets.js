import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Question from "../components/Question.js";

class Deets extends Component {
  state = {};
  render() {
    return (
      <Container id="deets">
          {this.props.game ? 
          this.props.game.questions.map(question => <Question key={question.id} question={question} />
          ) : null
        }
      </Container>
    );
  }
}

export default Deets;
