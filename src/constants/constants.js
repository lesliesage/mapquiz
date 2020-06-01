let apiHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  apiHost = "http://localhost:3000";
} else {
  apiHost =
    process.env.REACT_APP_BACKEND_HOST || "https://mapquiz-api.herokuapp.com";
}

export const API_ROOT = `${apiHost}`;

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
