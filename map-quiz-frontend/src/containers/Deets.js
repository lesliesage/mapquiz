import React, { Component } from "react";
import Question from "../components/Question.js";

class Deets extends Component {
  state = {};
  render() {
    return (
      <div>
          {this.props.game ? 
          this.props.game.questions.map(question => <Question key={question.id} question={question} />
          ) : null
        }
      </div>
    );
  }
}

export default Deets;
