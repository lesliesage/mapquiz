import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import MapOptions from "../MapOptions.json";

const google = window.google;
// reminders for resources we can use to calculate distance between the click and city coordinates
let arr = [
  { lat: 48.8667, lng: 2.3333 },
  { lat: 55.7522, lng: 37.6155 },
  { lat: -22.925, lng: -43.225 }
];

// google.maps.geometry.spherical.computeDistanceBetween(LatLng1, myLatLng)

const createMarker = () =>
  new window.google.maps.Marker({
    position: { lat: 43.642567, lng: -79.387054 },
    map: this.googleMap
  });

let markP = arr[0];
let i = 1;
const handleClick = e => {
  console.log(e.latLng);
  markP = arr[i];
  i += 1;
};

// {myLatLng = new google.maps.LatLng({lat: -34, lng: 151})}

const Map = withScriptjs(
  withGoogleMap(props => (
    <React.Fragment>
      <GoogleMap
        defaultZoom={2.3}
        defaultCenter={{ lat: 25, lng: 0 }}
        defaultOptions={{
          styles: MapOptions,
          maxZoom: 7,
          minZoom: 2.3,
          gestureHandling: "cooperative"
        }}
        onClick={handleClick}
      >
        {<Marker position={markP} />}
      </GoogleMap>
    </React.Fragment>
  ))
);

export default Map;
