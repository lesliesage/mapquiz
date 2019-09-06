import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import LoginContainer from "./containers/LoginContainer.js";
import QuizContainer from "./containers/QuizContainer.js";
import StatsContainer from "./containers/StatsContainer.js";
import Map from "./components/Map.js";
import APIKEY from "./APIKEY.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LoginContainer />
      <QuizContainer />
      <StatsContainer />
      <Map
        isMarkerShown={false}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${APIKEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `800px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
