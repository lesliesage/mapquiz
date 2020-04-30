import GOOGLEMAPS from "../Secrets.js";

let apiHost;
let googleMapsKey;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  apiHost = "http://localhost:3000";
  googleMapsKey = GOOGLEMAPS;
} else {
  apiHost =
    process.env.REACT_APP_BACKEND_HOST || "https://mapquiz-api.herokuapp.com";
  googleMapsKey = functions.config().googlemaps.key;
}

export const API_ROOT = `${apiHost}`;
export const GOOGLE_MAPS_KEY = `${googleMapsKey}`;
