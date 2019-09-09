import React, { Component } from "react";
import Question from './Question'

class Game extends Component {
  state = {};
  render() {
    return <div>
      {this.props.game.created_at} - {this.props.game.score}
      {this.props.game.questions(question => {
          return <Question question={question} />
        })}
    </div>;
  }
}

export default Game;
