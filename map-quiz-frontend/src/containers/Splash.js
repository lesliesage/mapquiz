import React, { Component } from "react";
import FormContainer from "./FormContainer";
import Video from "../resources/giphy.mp4";

class Splash extends Component {
  state = {
    videoURL: "../resources.giphy.mp4"
  };
  render() {
    return (
      <div>
        <FormContainer />
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
