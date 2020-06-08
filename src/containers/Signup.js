import React, { Component } from "react";
import { Button, Input, Header } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { API_ROOT } from "../constants/constants.js";

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
    fetch(`${API_ROOT}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.token) {
          this.props.setUser(data.user);
          localStorage.setItem("token", data.token);
          this.setState({ redirect: true });
        } else {
          alert("Invalid signup. Please try again.");
        }
      });
  };

  render() {
    return this.state.redirect ? (
      <Redirect to="/play" />
    ) : (
      <div className="user-detail-page">
        <Header as="h1">
          <Header.Content>Signup</Header.Content>
        </Header>
        <div className="form-container">
          <div className="form-labels-container">
            <div className="form-label">Email:</div>
            <div className="form-label">Username:</div>
            <div className="form-label">Password:</div>
          </div>
          <form className="form-inputs-container" onSubmit={this.handleSubmitNewUser}>
            <Input
              className="form-input"
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="username"
              onChange={this.handleChange}
              value={this.state.email}
            ></Input>
            <br />
            <Input
              className="form-input"
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="nickname"
              onChange={this.handleChange}
              value={this.state.username}
            ></Input>
            <br />
            <Input
              className="form-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            ></Input>
            <br />
            <Button type="submit" className="btn affirm">
              Save
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
