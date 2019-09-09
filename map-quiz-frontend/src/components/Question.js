import React, { Component } from "react";

class Question extends Component {
  state = {};
  render() {
    return <div>
      {this.props.question.city.name}, {this.props.question.city.country} - Off by: {this.props.question.distance} miles
    </div>;
  }
}

export default Question;
