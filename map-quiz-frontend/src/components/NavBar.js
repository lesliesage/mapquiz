import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class NavBar extends Component {
  mapQuizButton = (
    <Button position={"left"} style={{ marginLeft: "0.5em" }} id="mapquiz-link">
      <NavLink id="mapquiz-text" exact to="/">
        <img id="logo" src={require("../favicon.ico")} alt="MapQuiz Logo"></img>
        MapQuiz
      </NavLink>
    </Button>
  );

  loginButton = (
    <Button
      className="nav-link"
      position={null}
      id="login-button"
      style={{ marginLeft: "0.5em" }}
      onClick={this.props.handleLoginClick}
    >
      Login
    </Button>
  );

  logoutButton = (
    <Button
      className="nav-link"
      style={{ marginLeft: "0.5em" }}
      id="logout-button"
      onClick={this.props.handleLogoutClick}
    >
      <NavLink exact to="/">
        Logout
      </NavLink>
    </Button>
  );

  playButton = (
    <Button className="nav-link" id="play-link">
      <NavLink exact to="/play">
        Play
      </NavLink>
    </Button>
  );

  statsButton = (
    <NavLink exact to="/stats">
    <Button className="nav-link" id="stats-link">
        Stats
    </Button>
    </NavLink>
  );

  render() {
    return (
      <div id="navbar">
        {this.mapQuizButton}
        {this.props.user ? null : this.loginButton}
        {this.props.user ? this.logoutButton : null}
        {this.statsButton}
        {this.props.user ? this.playButton : null}
      </div>
    );
  }
}

export default NavBar;
