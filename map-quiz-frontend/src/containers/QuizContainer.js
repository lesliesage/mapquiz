import React, { Component } from "react";
import City from "../components/City.js";
import Map from "../components/Map.js";
import Score from "../components/Score.js";
import APIKEY from "../APIKEY.js";
class QuizContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        QuizContainer Here
        <City />
        <Map
     
        isMarkerShown={false}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${APIKEY}&libraries=geometry`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `800px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
        <Score />
      </div>
    );
  }
}

export default QuizContainer;
