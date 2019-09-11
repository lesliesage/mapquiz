import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import { Container, Header } from "semantic-ui-react";

class Score extends Component {
  render() {
    return (
      <Container id="score">
        <Header>Score</Header>
        <Spring
          from={{ percent: this.props.previousScore / 30 }}
          to={{ percent: this.props.score / 30 }}
        >
          {props  => (
            <div className="progress vertical">
              <div
                style={{ height: `${props.percent}%` }}
                className="progress-bar"
              >
                <span className="sr-only">{`${Math.round(
                  this.props.score 
                )}`}{console.log(Math.round(this.props.score))}</span>
              </div>
            </div>
          )}
        </Spring>
      </Container>
    );
  }
}

export default Score;
