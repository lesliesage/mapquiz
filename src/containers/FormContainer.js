import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import RegisterModal from "../components/RegisterModal.js";
import { API_ROOT } from "../constants/constants.js";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirect: false,
    };
  }

  loginChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  handleSubmitFindUser = (e) => {
    e.preventDefault();
    let obj = { headers: { Authentication: this.state.password } };
    fetch(`${API_ROOT}/users/${this.state.email}`, obj)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.authenticated) {
          localStorage.setItem("token", data.token);
          this.props.setUser(data.user);
          this.props.closeForm();
          this.setRedirect();
        } else {
          alert("incorrect email or password");
        }
      });
  };

  handleSubmitNewUser = (e) => {
    e.preventDefault();
    const newUserDataFromForm = {
      user: {
        email: this.state.email,
        password: this.state.password,
      },
    };
    const contentObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserDataFromForm),
    };
    fetch(`${API_ROOT}/users`, contentObj)
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          this.props.setUser(data.user);
          this.props.closeForm();
          this.setRedirect();
        } else {
          alert("passwords don't match");
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
                onChange={this.loginChange}
                type="text"
                name="email"
                placeholder="Email"
              ></input>
            </div>
            <div className="field">
              <label>Password</label>
              <input
                onChange={this.loginChange}
                name="password"
                type="password"
              ></input>
            </div>

            <div
              className="ui submit button"
              onClick={this.handleSubmitFindUser}
            >
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
          <RegisterModal
            loginChange={this.loginChange}
            setRedirect={this.setRedirect}
            handleSubmitNewUser={this.handleSubmitNewUser}
            email={this.state.email}
            password={this.state.password}
            redirect={this.state.redirect}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default FormContainer;
