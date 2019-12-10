import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import RegisterModal from "../components/RegisterModal.js";
import { API_ROOT } from "../constants/constants.js";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
  }

  loginChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  handleSubmitFindUser = () => {
    let obj = {headers: {"Authentication": this.state.password}}
    fetch(`${API_ROOT}/users/${this.state.username}`, obj)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        if (data.authenticated) {
          localStorage.setItem("token", data.token)
          this.props.setUser(data.user);
          this.props.closeForm();
          this.setRedirect();
        } else {
          alert("incorrect username or password");
        }
      });
  };

  handleSubmitNewUser = () => {
    const newUserDataFromForm = { user: {
      username: this.state.username,
      password: this.state.password
    }
    };
    console.log(newUserDataFromForm);
    const contentObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserDataFromForm)
    };
    fetch(`${API_ROOT}/users`, contentObj)
      .then(resp => resp.json())
      .then(data => {
        if (data) {
          this.props.setUser(data.user);
          this.props.closeForm();
          this.setRedirect();
        } else {
          alert("passwords don't match");
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
        <Header icon='loading asterisk' content="Login" />
        <Modal.Content>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input
                onChange={this.loginChange}
                type="text"
                name="username"
                placeholder="Username"
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
            username={this.state.username}
            password={this.state.password}
            redirect={this.state.redirect}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default FormContainer;
