import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    home: false,
    login: false,
    play: false,
    stats: false,
    profile: false,
  };

  mapQuizLink = (
    <NavLink className="nav-link nav-title" exact to="/">
      <img
        id="logo"
        className="navLink"
        src={require("../favicon.ico")}
        alt="MapQuiz Logo"
      ></img>
      MapQuiz
    </NavLink>
  );

  loginLink = (
    <NavLink exact to="/login" className="nav-link">
      Login
    </NavLink>
  );

  signupLink = (
    <NavLink exact to="/signup" className="nav-link">
      Signup
    </NavLink>
  );

  profileLink = (
    <NavLink exact to="/profile" className="nav-link">
      Profile
    </NavLink>
  );

  logoutLink = (
    <NavLink
      exact
      to="/"
      className="nav-link"
      onClick={this.props.handleLogoutClick}
    >
      Logout
    </NavLink>
  );

  playLink = (
    <NavLink exact to="/play" className="nav-link">
      Play
    </NavLink>
  );

  statsLink = (
    <NavLink exact to="/stats" className="nav-link">
      Stats
    </NavLink>
  );

  render() {
    return (
      <div id="navbar">
        <div>{this.mapQuizLink}</div>
        <div>
          {this.props.user ? this.playLink : null}
          {this.statsLink}
          {this.props.user ? this.profileLink : this.signupLink}
          {this.props.user ? this.logoutLink : this.loginLink}
        </div>
      </div>
    );
  }
}

export default NavBar;
