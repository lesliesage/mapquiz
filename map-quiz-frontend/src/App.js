import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'





function App() {
  return (
    <div className="App">
     

      <Map
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>


    </div>
  );
}

export default App;
