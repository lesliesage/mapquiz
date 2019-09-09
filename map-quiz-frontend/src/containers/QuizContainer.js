import React, { Component } from "react";
import City from "../components/City.js";
import Map from "../components/Map.js";
import Score from "../components/Score.js";
import APIKEY from "../APIKEY.js";
class QuizContainer extends Component {
  state = {
    cities: [],
    cityIndex: 0,
    isMarkerShown: false,
    yourChoice: null
  };

  componentDidMount(){
    fetch('http://localhost:3000/randomtwenty').then(resp => resp.json()).then(cities => this.setState({cities: cities}))
  }

  toggleMarker = () => {
    this.setState({isMarkerShown: !this.state.isMarkerShown})
  }

  setChoice = (latlng) => {
    this.setState({yourChoice: latlng})
  }

  render() {
    return (
      <div>
        QuizContainer Here
        <City currentCity={this.state.cities[this.state.cityIndex]}/>
        <Map
        currentCity={this.state.cities[this.state.cityIndex]}
        yourChoice={this.state.yourChoice}
        setChoice={this.setChoice}
        toggleMarker = {this.toggleMarker}
        isMarkerShown={this.state.isMarkerShown}
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
