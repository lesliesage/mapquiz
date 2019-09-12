import React, { Component } from "react";
import FormContainer from "./FormContainer";
import Video from "../resources/splash.mp4";

class Splash extends Component {
  state = {
    videoURL: "../resources.splash.mp4"
  };
  render() {
    return (
      <div>
        <FormContainer
          hid={this.props.hid}
          setUser={this.props.setUser}
          closeForm={this.props.closeForm}
          toggleForm={this.props.toggleForm}
        />
        <video className="videoTag" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          <source src={Video} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default Splash;
