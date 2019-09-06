import React, { Component } from "react";
import City from "../components/City.js";
import Map from "../components/Map.js";
import Score from "../components/Score.js";

class QuizContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        QuizContainer Here
        <City />
        {/* <Map /> */}
        <Score />
      </div>
    );
  }
}

export default QuizContainer;
