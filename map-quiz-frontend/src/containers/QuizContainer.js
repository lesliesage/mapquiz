import React, { Component, Fragment } from "react";
import { Grid } from "semantic-ui-react";
import City from "../components/City.js";
import Map from "../components/Map.js";
import Score from "../components/Score.js";
import APIKEY from "../APIKEY.js";

class QuizContainer extends Component {
  state = {
    cities: [],
    cityIndex: 0,
    isMarkerShown: false,
    yourChoice: null,
    score: 2000,
    nextButton: false
  };

  componentDidMount() {
    fetch("http://localhost:3000/randomtwenty")
      .then(resp => resp.json())
      .then(cities => this.setState({ cities: cities }));
  }

  toggleMarker = () => {
    this.setState({ isMarkerShown: !this.state.isMarkerShown });
  };

  setChoice = latlng => {
    this.setState({ yourChoice: latlng });
  };

  nextQuest = () => {
    this.setState({
      cityIndex: (this.state.cityIndex += 1),
      nextButton: !this.state.nextButton,
      isMarkerShown: false,
      yourChoice: null
    });
  };

  toggleNextButton = () => {
    this.setState({
      nextButton: !this.state.nextButton
    });
  };

  setScore = distance => {
    this.setState({
      score: (this.state.score -= distance)
    });
  };

  render() {
    return (
      <div>
        <City
          currentCity={this.state.cities[this.state.cityIndex]}
          cityIndex={this.state.cityIndex}
          nextButton={this.state.nextButton}
          nextQuest={this.nextQuest}
        />
        <Grid id="game-grid">
          <Grid.Row>
            <Grid.Column width={13}>
              <Map
                toggleNextButton={this.toggleNextButton}
                setScore={this.setScore}
                currentCity={this.state.cities[this.state.cityIndex]}
                yourChoice={this.state.yourChoice}
                setChoice={this.setChoice}
                toggleMarker={this.toggleMarker}
                isMarkerShown={this.state.isMarkerShown}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${APIKEY}&libraries=geometry`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `800px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Grid.Column>
            <Grid.Column width={1}>
              <Score score={this.state.score} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default QuizContainer;
