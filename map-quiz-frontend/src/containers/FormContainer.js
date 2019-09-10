import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  loginChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmitFindUser = () => {
    fetch(`http://localhost:3000/users/${this.state.username}`)
      .then(resp => resp.json())
      .then(user => {
        if (user) {
          this.props.setUser(user);
          this.props.closeForm();
        } else {
          alert("incorrect username or password");
        }
      });
  };

  render() {
    return (
      <Modal id="login-modal"
        open={this.props.hid}
        centered={false}
        onClose={this.props.toggleform}
      >
        <Header icon="browser" content="Login" />
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
          <RegisterModal />
        </Modal.Actions>
      </Modal>
    );
  }
}

class RegisterModal extends React.Component {
  state = { registerOpen: false };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    return (
      <Modal id="register-modal"
        open={open}
        onOpen={this.open}
        onClose={this.close}
        centered={false}
        size="small"
        trigger={<Button>Register</Button>}
      >
        <Modal.Header>Register</Modal.Header>
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

            <div className="field">
              <label>Confirm Password</label>
              <input
                onChange={this.loginChange}
                name="confirm password"
                type="password"
              ></input>
            </div>

            <div className="ui submit button">Register</div>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button icon="check" content="Close" onClick={this.close} />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default FormContainer;
