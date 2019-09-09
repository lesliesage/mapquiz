import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Splash from "./containers/Splash.js";
import QuizContainer from "./containers/QuizContainer.js";
import StatsContainer from "./containers/StatsContainer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    open: false,
    user: null
  };


  setUser = (user) => {
    this.setState({
      user: user
    })
  }

  handleLoginClick = () => {
    this.setState({ open: !this.state.open });
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
<<<<<<< HEAD
            <Route exact path="/" render={(props) => 
              <Splash {...props} hid={this.state.hidden} user={this.state.user} />} 
            />
            <Route exact path="/play" render={
              (props) => <QuizContainer {...props} user={this.state.user} />
            } />
            <Route exact path="/stats" render={
              (props) => <StatsContainer {...props} user={this.state.user} />
            } />
=======
            <Route exact path="/" render={(props) => <Splash {...props} setUser={this.setUser} toggleForm={this.handleLoginClick} hid={this.state.open}/>} />
            <Route exact path="/play" component={QuizContainer} />
            <Route exact path="/stats" component={StatsContainer} />
>>>>>>> bd9ff5206ec48477a534ef75a59de0110d90be39
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
