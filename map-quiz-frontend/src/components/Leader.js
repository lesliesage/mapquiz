import React, { Component } from "react";

class Leader extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          {this.props.game.user.username} - {this.props.game.score}
        </p>
      </div>
    );
  }
}

export default Leader;
