let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  backendHost = "http://localhost:3000/";
} else {
  backendHost = process.env.REACT_APP_BACKEND_HOST || "http://my_URL_here";
}

export const API_ROOT = `${backendHost}`;
