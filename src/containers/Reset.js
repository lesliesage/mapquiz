import React, { Component } from "react";
// import { Button, Header, Modal } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { API_ROOT } from "../constants/constants.js";

class Forgot extends Component {
  state = {
    email: "",
    password: "",
    newPassword: "",
    redirect: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleReset = (e) => {
    e.preventDefault();
    fetch(`${API_ROOT}/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        code: this.props.location.search.slice(1),
        password: this.state.password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          this.setState({ redirect: true });
        } else {
          alert("Invalid reset. Please try again.");
        }
      });
  };

  render() {
    return this.state.redirect ? (
      <Redirect to="/play" />
    ) : (
      <div className="main info-pg reset">
        <h1>Reset</h1>
        <div className="form-container">
          <div className="form-labels-container">
            <div className="form-label">Email:</div>
            <div className="form-label">New password:</div>
          </div>
          <form className="form-inputs-container" onSubmit={this.handleReset}>
            <input
              className="form-input"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              placeholder="Email"
            ></input>
            <br />
            <input
              type="password"
              className="form-input"
              id="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              placeholder="New password"
            ></input>
            <br />
            <button type="submit" className="btn">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Forgot;
