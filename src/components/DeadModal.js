import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const DeadModal = (props) => {
  return (
    <Modal className="game-over" open={props.show}>
      
      <Header icon="thumbs down outline" content="Game Over" />

      <Modal.Content>
        <h3 className="modal-text">Points depleted.</h3>
      </Modal.Content>

      <Modal.Actions className="game-over-actions">
        <Button onClick={props.resetPlay} className="game-over-btn">
          <Icon name="checkmark" /> Try Again
        </Button>

        <Button className="game-over-btn">
          <NavLink exact to="/">
            <Icon name="home" /> Return to Home
          </NavLink>
        </Button>

        <Button onClick={props.closeModal} className="game-over-btn">
          <Icon name="remove" />
          Close
        </Button>
      </Modal.Actions>

    </Modal>
  );
};

export default DeadModal;
