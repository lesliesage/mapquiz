import React, { Component, Fragment } from "react";
import { Grid } from "semantic-ui-react";
import City from "../components/City.js";
import Map from "../components/Map.js";
import Score from "../components/Score.js";
import APIKEY from "../APIKEY.js";
import DeadModal from '../components/DeadModal'
import ScoreModal from '../components/ScoreModal'

class QuizContainer extends Component {
  state = {
    cities: [],
    cityIndex: 0,
    isMarkerShown: false,
    yourChoice: null,
    score: 3000,
    previousScore: 3000,
    nextButton: false,
    questions: [],
    deadModal: false,
    scoreModal: false
  };

  createGame = () => {
    debugger
   let dataObj = {game: {user_id: 13, score: this.state.score, questions_attributes: [...this.state.questions]}}
   let configObj = {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(dataObj)
    }

    debugger

    fetch('http://localhost:3000/games', configObj).then(resp => resp.json()).then(data => console.log(data))
  }

  showScoreModal = () => {
    this.setState({
      scoreModal: true
    })
  }

  closeScoreModal = () => {
    this.setState({
      scoreModal: false
    })
  }

    showModal = () => {
      this.setState({
          deadModal: true
      })
  }

  closeModal = () => {
    this.setState({
        deadModal: false
    })
  }

  resetPlay = () => {
    fetch("http://localhost:3000/randomtwenty")
      .then(resp => resp.json())
      .then(cities => this.setState({ cities: cities }));

    this.setState({
      cityIndex: 0,
      isMarkerShown: false,
      yourChoice: null,
      score: 3000,
      previousScore: 3000,
      nextButton: false,
      questions: [],
      deadModal: false,
      scoreModal: false
    })
  }

  addQuestion = (question) => {
    this.setState({
      questions: [...this.state.questions, question]
    })
  }

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
      cityIndex: this.state.cityIndex + 1,
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
    this.setState(state => ({
      score: state.score - distance,
      previousScore: state.score
    }));
  };

  render() {
    return (
      <div>
        <DeadModal show={this.state.deadModal} closeModal={this.closeModal} resetPlay={this.resetPlay}/>
        <ScoreModal show={this.state.scoreModal} resetPlay={this.resetPlay} score={this.state.score}/>
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
                showScoreModal={this.showScoreModal}
                cityIndex={this.state.cityIndex}
                createGame={this.createGame}
                showModal={this.showModal}
                currentScore={this.state.score}
                addQuestion={this.addQuestion}
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
              <Score
                score={this.state.score}
                previousScore={this.state.previousScore}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default QuizContainer;
