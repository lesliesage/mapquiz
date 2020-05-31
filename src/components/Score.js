import React from "react";
import { Spring } from "react-spring/renderprops";
import { Container, Header } from "semantic-ui-react";

const Score = (props) => {
  return (
    <Container id="score">
      <Header>Score</Header>
      <Spring
        from={{ percent: props.previousScore / 30 }}
        to={{ percent: props.score / 30 }}
      >
        {(tree) => (
          <div className="progress vertical">
            <div
              style={{ height: `${tree.percent}%` }}
              className="progress-bar"
            >
              <span className="sr-only">{`${Math.round(props.score)}`}</span>
            </div>
          </div>
        )}
      </Spring>
    </Container>
  );
};

export default Score;
