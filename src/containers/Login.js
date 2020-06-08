import React, { Component } from "react";
import { Button, Input, Header } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { API_ROOT } from "../constants/constants.js";

class Login extends Component {
  state = {
    email: "",
    password: "",
    redirect: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    fetch(`${API_ROOT}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          this.props.setUser(JSON.parse(data.user));
          this.setState({ redirect: true });
        } else {
          alert("Incorrect email or password");
        }
      });
  };

  handleForgot = (e) => {
    e.preventDefault();
    fetch(`${API_ROOT}/forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          alert("reset link has been emailed.");
        } else {
          alert("email not found.");
        }
      });
  };

  render() {
    return this.state.redirect ? (
      <Redirect to="/play" />
    ) : (
      <div className="user-detail-page">
        <Header as="h1">
          <Header.Content>Login</Header.Content>
        </Header>
        <div className="form-container">
          <div className="form-labels-container">
            <div className="form-label">Email:</div>
            <div className="form-label">Password:</div>
          </div>
          <form className="form-inputs-container" onSubmit={this.handleLogin}>
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
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            ></Input>
            <br />
            <Button type="submit" className="btn affirm">
              Play
            </Button>
            <Button className="btn deny" onClick={this.handleForgot}>
              Forgot Password
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
