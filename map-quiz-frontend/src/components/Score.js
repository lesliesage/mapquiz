import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import { Container, Header } from "semantic-ui-react";

class Score extends Component {
  
  percentage = this.props.score/20

  render() {
    return (
      <Container id="score">
        <Header>Score</Header>
        <Spring from={{ percent: 0 }} to={{ percent: this.percentage }}>
          {({ percent }) => (
            <div className="progress vertical">
              <div
                style={{ height: `${this.percentage}%` }}
                className="progress-bar"
              >
                <span className="sr-only">{`${this.props.score}`}</span>
              </div>
            </div>
          )}
        </Spring>
      </Container>
    );
  }
}

export default Score;
