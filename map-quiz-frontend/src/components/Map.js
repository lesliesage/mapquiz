import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import MapOptions from "../MapOptions.json";

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={2.3}
      defaultCenter={{ lat: 25, lng: 0 }}
      defaultOptions={{ styles: MapOptions, maxZoom: 7, minZoom: 2.3 }}
    >
      {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}
    </GoogleMap>
  ))
);

export default Map;
