import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import MapOptions from "../MapOptions.json";


// reminders for resources we can use to calculate distance between the click and city coordinates
let arr = [
  { lat: 48.8667, lng: 2.3333 },
  { lat: 55.7522, lng: 37.6155 },
  { lat: -22.925, lng: -43.225 }
];

// google.maps.geometry.spherical.computeDistanceBetween(LatLng1, myLatLng)

// const createMarker = () =>
//   new window.google.maps.Marker({
//     position: { lat: 43.642567, lng: -79.387054 },
//     map: this.googleMap
//   });



// {myLatLng = new google.maps.LatLng({lat: -34, lng: 151})}
let handleClick = (e, props) => {
  props.toggleMarker()
  let latLng = e.latLng
  props.setChoice(latLng)
  let mylatlng = new window.google.maps.LatLng({lat: props.currentCity.lat, lng: props.currentCity.long})
  let distance = window.google.maps.geometry.spherical.computeDistanceBetween(latLng, mylatlng)/1000
  console.log(distance)
  if (props.currentScore - distance >= 0) {
    props.setScore(distance)
    props.toggleNextButton()
    let formattedQuestion = {distance: distance, city_id: props.currentCity.id}
    props.addQuestion(formattedQuestion)
    debugger
    if(props.cityIndex >= 19){
      debugger
      props.createGame()
      props.showScoreModal()
    }
  } else {
    props.showModal()
  }
}

let formatlatlng = (currentCity) => {
  return  {lat: currentCity.lat, lng: currentCity.long}
  
}

const Map = withScriptjs(
  withGoogleMap(props => (
    <React.Fragment>
      {console.log(props)}
      <GoogleMap
        defaultZoom={2.3}
        defaultCenter={{ lat: 25, lng: 0 }}
        defaultOptions={{
          styles: MapOptions,
          maxZoom: 7,
          minZoom: 2.3,
          gestureHandling: "cooperative"
        }}
        onClick={(e) => handleClick(e, props)}
      >
        {props.isMarkerShown && props.currentCity ? <Marker icon={{                               url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"                           }} position={formatlatlng(props.currentCity)}/> : null}
        {props.yourChoice ? <Marker icon={{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}position={ props.yourChoice }/> : null}
      </GoogleMap>
    </React.Fragment>
  ))
);

export default Map;
