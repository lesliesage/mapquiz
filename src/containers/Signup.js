import React, { Component } from "react";
import { API_ROOT } from "../constants/constants.js";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    redirect: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitNewUser = (e) => {
    e.preventDefault();
    const newUserDataFromForm = {
      user: {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      },
    };
    const contentObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserDataFromForm),
    };
    fetch(`${API_ROOT}/signup`, contentObj)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.token) {
          this.props.setUser(data.user);
          this.setState({ redirect: true });
        } else {
          alert("Invalid Signup");
        }
      });
  };

  render() {
    return this.state.redirect ? (
      <Redirect to="/play" />
    ) : (
      <div className="main info-pg signup">
        <h1>Signup</h1>
        <div className="ui form">
          <div className="field">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="username"
            ></input>
          </div>

          <div className="field">
            <label>Username</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="nickname"
            ></input>
          </div>

          <div className="field">
            <label>Password</label>
            <input
              onChange={this.handleChange}
              name="password"
              type="password"
            ></input>
          </div>
          <div className="ui submit button" onClick={this.handleSubmitNewUser}>
            Signup
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
