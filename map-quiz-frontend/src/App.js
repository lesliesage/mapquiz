import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Splash from "./containers/Splash.js";
import Login from "./components/Login.js";
import QuizContainer from "./containers/QuizContainer.js";
import StatsContainer from "./containers/StatsContainer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    hidden: true
  };

  handleLoginClick = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"
        />
        <Router>
          <React.Fragment>
            <NavBar handleLoginClick={this.handleLoginClick} />
            <Route exact path="/" render={(props) => <Splash {...props} hid={this.state.hidden}/>} />
            <Route exact path="/play" component={QuizContainer} />
            <Route exact path="/stats" component={StatsContainer} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
