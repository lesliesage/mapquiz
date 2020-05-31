import React, { Component } from "react";
import { Button, Input, Header, Container, Modal } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { API_ROOT } from "../constants/constants.js";

class Profile extends Component {
  state = {
    user: null,
    email: "",
    username: "",
    password: "",
    newPassword: "",
    redirect: false,
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      fetch(`${API_ROOT}/profile`, {
        headers: { Authentication: `Bearer ${localStorage.getItem("token")}` },
      })
        .then((resp) => resp.json())
        .then((user) => {
          this.setState({
            user: user,
            email: user.email,
            username: user.username,
          });
        });
    } else return null;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    e.target.reset();
    fetch(`${API_ROOT}/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authentication: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        newPassword: this.state.newPassword,
      }),
    })
      .then((resp) => resp.json())
      .then((user) => {
        if (!!user.id) {
          alert("Profile updated!");
        } else {
          alert("Invalid update. Please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return this.state.redirect ? (
      <Redirect to="/play" />
    ) : (
      <div className="profile">
        <Header as="h1" textAlign="center">
          <Header.Content>Profile</Header.Content>
        </Header>
        <div className="form-container">
          <div className="form-labels-container">
            <div className="form-label">Email:</div>
            <div className="form-label">Username:</div>
            <div className="form-label">Password:</div>
            <div className="form-label">New password:</div>
          </div>
          <form className="form-inputs-container" onSubmit={this.handleUpdate}>
            <Input
              className="form-input"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            ></Input>
            <br />
            <Input
              className="form-input"
              id="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            ></Input>
            <br />
            <Input
              type="password"
              className="form-input"
              id="password"
              name="password"
              onChange={this.handleChange}
              placeholder="Password"
            ></Input>
            <br />
            <Input
              type="password"
              className="form-input"
              id="new-password"
              name="newPassword"
              onChange={this.handleChange}
              placeholder="New password"
            ></Input>
            <br />
            <Button type="submit" className="btn affirm" id="pforile-save">
              Save
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
