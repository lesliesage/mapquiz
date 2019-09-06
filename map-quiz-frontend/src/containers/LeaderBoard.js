import React, { Component } from "react";
import Leader from "../components/Leader.js";

class LeaderBoard extends Component {
  state = {
    leaders: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/topten")
      .then(resp => resp.json())
      .then(data => this.setState({ leaders: data }));
  }

  render() {
    return (
      <div>
        <p>LeaderBoard:</p>
        {this.state.leaders.map(game => (
          <Leader game={game} key={game.id} />
        ))}
      </div>
    );
  }
}

export default LeaderBoard;
