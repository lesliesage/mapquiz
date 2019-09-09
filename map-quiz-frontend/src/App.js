import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import LoginContainer from "./containers/LoginContainer.js";
import Login from "./components/Login.js";
import QuizContainer from "./containers/QuizContainer.js";
import StatsContainer from "./containers/StatsContainer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";



class App extends React.Component {


  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"/>
    <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/play" component={QuizContainer} />
        <Route exact path="/stats" component={StatsContainer} />
      </React.Fragment>
    </Router>
    </div>
  );
};
}

export default App;
