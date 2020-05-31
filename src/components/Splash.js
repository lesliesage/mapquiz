import React from "react";
import Login from "../containers/Login";
import Video from "../resources/splash.mp4";

const videoURL = "../resources.splash.mp4";

const Splash = (props) => {
  return (
    <div>
      <Login
        hid={props.hid}
        setUser={props.setUser}
        closeForm={props.closeForm}
        toggleForm={props.toggleForm}
      />
      <video className="videoTag" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
        <source src={Video} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Splash;
