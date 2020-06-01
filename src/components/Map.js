import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import MapOptions from "../MapOptions.json";

let handleClick = (e, props) => {
  if (props.unresponsive === false) {
    props.toggleMarker();
    let latLng = e.latLng;
    props.setChoice(latLng);
    let mylatlng = new window.google.maps.LatLng({
      lat: props.currentCity.lat,
      lng: props.currentCity.long,
    });
    let distance =
      window.google.maps.geometry.spherical.computeDistanceBetween(
        latLng,
        mylatlng
      ) / 1000;
    let minus = distance / 10;
    if (props.currentScore - minus >= 0) {
      props.setScore(minus);
      props.toggleNextButton();
      let formattedQuestion = {
        distance: distance,
        city_id: props.currentCity.id,
      };
      props.addQuestion(formattedQuestion);
      props.setDistance(
        `You guessed ${parseInt(distance)} km from ${props.currentCity.name}, ${
          props.currentCity.country
        }. (-${parseInt(minus)} points)`
      );
      props.makeUnresp();

      if (props.cityIndex >= 9) {
        props.createGame();
        props.showScoreModal();
      }
    } else {
      props.showModal();
      props.makeUnresp();
    }
  }
};

let formatlatlng = (currentCity) => {
  return { lat: currentCity.lat, lng: currentCity.long };
};

const Map = withScriptjs(
  withGoogleMap((props) => (
    <React.Fragment>
      <GoogleMap
        defaultZoom={2.3}
        defaultCenter={{ lat: 25, lng: 0 }}
        defaultOptions={{
          styles: MapOptions,
          maxZoom: 7,
          minZoom: 2.3,
          gestureHandling: "greedy",
          draggableCursor: "crosshair",
        }}
        onClick={(e) => handleClick(e, props)}
      >
        {props.isMarkerShown && props.currentCity ? (
          <Marker
            icon={{
              url: "https://www.google.com/mapfiles/arrow.png",
            }}
            position={formatlatlng(props.currentCity)}
            animation={window.google.maps.Animation.DROP}
          />
        ) : null}
        {props.yourChoice ? (
          <Marker
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            }}
            position={props.yourChoice}
          />
        ) : null}
      </GoogleMap>
    </React.Fragment>
  ))
);

export default Map;
