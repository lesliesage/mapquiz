import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    home: false,
    play: false,
    stats: false,
    profile: false,
  };

  toggleClass = () => {
    const currentHome = this.state.home;
    const currentPlay = this.state.play;
    const currentStats = this.state.stats;
    const currentProfile = this.state.profile;
    this.setState({
      home: !currentHome,
      play: !currentPlay,
      stats: !currentStats,
      profile: !currentProfile,
    });
  };

  mapQuizButton = (
    <NavLink id="mapquiz-link" exact to="/">
      <img id="logo" src={require("../favicon.ico")} alt="MapQuiz Logo"></img>
      MapQuiz
    </NavLink>
  );

  loginButton = (
    <NavLink
      exact
      to="/"
      className="nav-link"
      id="login-button"
      onClick={this.props.handleToggleLoginForm}
    >
      Login
    </NavLink>
  );

  signupButton = (
    <NavLink exact to="/signup" className="nav-link" id="signup-button">
      Signup
    </NavLink>
  );

  profileButton = (
    <NavLink exact to="/profile" className="nav-link">
      Profile
    </NavLink>
  );

  logoutButton = (
    <NavLink
      exact
      to="/"
      className="nav-link"
      id="logout-button"
      onClick={this.props.handleLogoutClick}
    >
      Logout
    </NavLink>
  );

  playButton = (
    <NavLink exact to="/play" className="nav-link">
      Play
    </NavLink>
  );

  statsButton = (
    <NavLink exact to="/stats" className="nav-link">
      Stats
    </NavLink>
  );

  render() {
    return (
      <div id="navbar">
        {this.mapQuizButton}
        {this.props.user ? null : this.loginButton}
        {this.props.user ? null : this.signupButton}
        {this.props.user ? this.logoutButton : null}
        {this.props.user ? this.profileButton : null}
        {this.statsButton}
        {this.playButton}
      </div>
    );
  }
}

export default NavBar;
