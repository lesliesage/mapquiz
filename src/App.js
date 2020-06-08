import React, { Component } from "react";
import "./App.css";
import NavBar from "./containers/NavBar.js";
import Splash from "./components/Splash.js";
import { API_ROOT } from "./constants/constants.js";
import QuizContainer from "./containers/QuizContainer.js";
import StatsContainer from "./containers/StatsContainer.js";
import Signup from "./containers/Signup.js";
import Profile from "./containers/Profile.js";
import Reset from "./containers/Reset.js";
import Login from "./containers/Login.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

class App extends Component {
  state = {
    user: null,
    page: "/",
  };

  setPage = (page) => {
    this.setState({ page: page });
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  handleLogoutClick = () => {
    this.setState({ user: null });
    localStorage.removeItem("token");
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      fetch(`${API_ROOT}/token`, {
        headers: { Authentication: `Bearer ${localStorage.getItem("token")}` },
      })
        .then((resp) => resp.json())
        .then((user) => this.setUser(user));
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
              handleToggleLoginForm={this.handleToggleLoginForm}
              user={this.state.user}
              page={this.state.page}
            />
            <Route
              exact
              path="/"
              render={(props) => (
                <Splash
                  {...props}
                  handleToggleLoginForm={this.handleToggleLoginForm}
                  setUser={this.setUser}
                  loginFormOpenStatus={this.state.loginFormOpenStatus}
                />
              )}
            />
            <Route
              path="/reset"
              render={(props) => <Reset {...props} setUser={this.setUser} />}
            />
            <Route
              exact
              path="/play"
              render={(props) =>
                localStorage.getItem("token") ? (
                  <QuizContainer {...props} user={this.state.user} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              exact
              path="/signup"
              render={(props) =>
                localStorage.getItem("token") ? (
                  <Redirect to="/play" />
                ) : (
                  <Signup {...props} setUser={this.setUser} />
                )
              }
            />
            <Route
              exact
              path="/login"
              render={(props) =>
                localStorage.getItem("token") ? (
                  <Redirect to="/play" />
                ) : (
                  <Login {...props} setUser={this.setUser} />
                )
              }
            />
            <Route
              exact
              path="/profile"
              render={(props) =>
                localStorage.getItem("token") ? (
                  <Profile {...props} setUser={this.setUser} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route exact path="/stats" render={() => <StatsContainer />} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
