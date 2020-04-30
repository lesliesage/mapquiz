import React, { Component } from "react";
import Leader from "../components/Leader.js";
import { Container, Grid } from "semantic-ui-react";
import { API_ROOT } from "../constants/constants.js";

class LeaderBoard extends Component {
  state = {
    leaders: []
  };

  componentDidMount() {
    fetch(`${API_ROOT}/topten`)
      .then(resp => resp.json())
      .then(data => this.setState({ leaders: data }));
  }

  render() {
    return (
      <Container className="stat-section">
        <Grid divided="vertically">
          <Grid.Row columns={3}>
            {this.state.leaders.map((game, index) => (
              <Leader game={game} key={game.id} index={index + 1} />
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default LeaderBoard;
