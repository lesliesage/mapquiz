import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import LoginContainer from "./containers/LoginContainer.js";
import Login from "./components/Login.js";
import QuizContainer from "./containers/QuizContainer.js";
import StatsContainer from "./containers/StatsContainer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/play" component={QuizContainer} />
        <Route exact path="/stats" component={StatsContainer} />
      </React.Fragment>
    </Router>
  );
};

export default App;
