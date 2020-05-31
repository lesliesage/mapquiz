import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
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
        console.log(data);
        if (data.jwt) {
          this.setState({ redirect: true });
          localStorage.setItem("token", data.jwt);
          this.props.setUser(JSON.parse(data.user));
          this.props.closeForm();
        } else {
          alert("incorrect email or password");
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
      <Modal
        id="login-modal"
        open={this.props.hid}
        centered={false}
        onClose={this.props.toggleform}
      >
        <Header content="Login" />
        <Modal.Content>
          <div className="ui form">
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              ></input>
            </div>

            <div className="ui submit button" onClick={this.handleLogin}>
              Play
            </div>
            <div className="ui submit button" onClick={this.handleForgot}>
              Forgot Password
            </div>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={this.props.toggleForm}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default Login;
