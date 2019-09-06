import React from "react";
import "./App.css";
import Map from "./components/Map.js";
import APIKEY from "./APIKEY.js";

function App() {
  return (
    <div className="App">
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
