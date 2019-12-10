import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Splash from "./containers/Splash.js";
import QuizContainer from "./containers/QuizContainer.js";
import StatsContainer from "./containers/StatsContainer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

class App extends React.Component {
  state = {
    open: false,
    user: null,
    page: "/"
  };

  setPage = page => {
    this.setState({ page: page });
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  handleLoginClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleLogoutClick = () => {
    this.setState({ user: null });
    localStorage.removeItem("token");
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      fetch("http://localhost:3000/token", {
        headers: { Authentication: `${localStorage.getItem("token")}` }
      })
        .then(resp => resp.json())
        .then(user => this.setUser(user));
    }
  }

  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Overpass|Varela+Round&display=swap"
          rel="stylesheet"
        ></link>
        <Router>
          <React.Fragment>
            <NavBar
              handleLogoutClick={this.handleLogoutClick}
              handleLoginClick={this.handleLoginClick}
              user={this.state.user}
              page={this.state.page}
            />
            <Route
              exact
              path="/"
              render={props => (
                <Splash
                  {...props}
                  closeForm={this.handleLoginClick}
                  setUser={this.setUser}
                  toggleForm={this.handleLoginClick}
                  hid={this.state.open}
                />
              )}
            />
            <Route
              exact
              path="/play"
              render={props =>
                localStorage.getItem("token") ? (
                  <QuizContainer {...props} user={this.state.user} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              exact
              path="/stats"
              render={props => (
                <StatsContainer
                  {...props}
                  closeForm={this.LoginClick}
                  setUser={this.setUser}
                  toggleForm={this.handleLoginClick}
                  hid={this.state.open}
                  user={this.state.user}
                />
              )}
            />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
