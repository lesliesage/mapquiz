import React, { Component } from "react";

class Question extends Component {
  state = {};
  render() {
    return <div>Question Component Here
      {this.props.question.city} - Off by: {this.props.question.distance} miles
    </div>;
  }
}

export default Question;
