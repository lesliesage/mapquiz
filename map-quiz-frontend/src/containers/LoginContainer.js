import React, { Component } from "react";
import FormContainer from './FormContainer'

class LoginContainer extends Component {
  state = {
    hidden: true
  };
  
  render() {
    return <div>LoginContainer Here
      <FormContainer />
    </div>;
  }
}

export default LoginContainer;
