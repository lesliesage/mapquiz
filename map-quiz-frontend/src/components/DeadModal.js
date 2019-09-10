import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';


class DeadModal extends React.Component  {

    render(){ 
    return (
            <Modal id='dead-modal' open={this.props.show} basic size='small' centered={false}>
            <Header icon='thumbs down outline' content='Depleted Points' />
            <Modal.Content>
                <p>
                YOU ARE DEAD
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' inverted onClick={this.props.resetPlay}>
                <Icon name='checkmark' /> Try Again
                </Button>

                <NavLink exact to="/"><Button basic color='red' inverted>
                <Icon name='home'/> Return to Home
                </Button></NavLink>

                <Button basic color='red' inverted onClick={this.props.closeModal}><Icon name='remove'/>Close</Button>
            </Modal.Actions>
            </Modal>
        )
    }
};

export default DeadModal
