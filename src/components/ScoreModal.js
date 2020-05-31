import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const ScoreModal = (props) => {
  return (
    <Modal
      id="score-modal"
      open={props.show}
      basic
      size="small"
      centered={false}
    >
      <Header icon="star outline" content="You Won!!" />
      <Modal.Content>
        <h3>Your Score: {Math.round(props.score)}</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" inverted onClick={props.resetPlay}>
          <Icon name="checkmark" /> New Game
        </Button>

        <NavLink exact to="/">
          <Button basic color="red" inverted>
            <Icon name="home" /> Return to Home
          </Button>
        </NavLink>

        <Button basic color="red" inverted onClick={props.closeScoreModal}>
          <Icon name="remove" />
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ScoreModal;
