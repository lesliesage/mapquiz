import { NavLink } from "react-router-dom";
import React, { Component } from "react";

class NavBar extends Component {
  state = {
    home: false,
    play: false,
    stats: false
  };

  toggleClass = () => {
    const currentHome = this.state.home;
    const currentPlay = this.state.play;
    const currentStats = this.state.stats;
    this.setState({
      home: !currentHome,
      play: !currentPlay,
      stats: !currentStats
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
      onClick={this.props.handleLoginClick}
    >
      Login
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
        {this.props.user ? this.logoutButton : null}
        {this.statsButton}
        {this.props.user ? this.playButton : null}
      </div>
    );
  }
}

export default NavBar;
