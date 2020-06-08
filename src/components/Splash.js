import React from "react";
import Video from "../resources/splash.mp4";

const Splash = (props) => {
  return (
    <div className="splash">
      <div className="intro">
        <p>
          <b>MapQuiz</b> is a game that lets you test your geography knowledge.
        </p>
        <p>
          Achieve a high score by clicking as close as possible to each city.
        </p>
        <p>
          Win the game by guissing all 20 cities without running out of points.
        </p>
        <p>Log in or sign up to play!</p>
      </div>
      <div className="video-container">
        <video className="videoTag" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          <source src={Video} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Splash;
