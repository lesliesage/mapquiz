import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

class RegisterModal extends Component {
  state = { registerOpen: false };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    return (
      <Modal
        id="register-modal"
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
              <label>Email</label>
              <input
                onChange={this.props.loginChange}
                type="text"
                name="email"
                placeholder="Email"
              ></input>
            </div>

            <div className="field">
              <label>Username</label>
              <input
                onChange={this.props.loginChange}
                type="text"
                name="username"
                placeholder="Username"
              ></input>
            </div>

            <div className="field">
              <label>Password</label>
              <input
                onChange={this.props.loginChange}
                name="password"
                type="password"
              ></input>
            </div>

            <div className="field">
              <label>Confirm Password</label>
              <input
                onChange={this.props.loginChange}
                name="confirm password"
                type="password"
              ></input>
            </div>
            <div
              className="ui submit button"
              onClick={this.props.handleSubmitNewUser}
            >
              Register
            </div>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button icon="check" content="Close" onClick={this.close} />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default RegisterModal;
