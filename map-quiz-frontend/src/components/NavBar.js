  
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react'
import {
  Button,
  Menu
} from 'semantic-ui-react'


class NavBar extends Component {
  render() {
    return (
        <Menu id="navbar" size='large'>
            <Menu.Item id="mapquiz-link" as='a' active><NavLink exact to="/">MapQuiz</NavLink></Menu.Item>
            {this.props.user ? (
              <React.Fragment>
                <Menu.Item id="play-link" as='a'><NavLink exact to="/play">Play</NavLink></Menu.Item>
                <Menu.Item id="stats-link" as='a'><NavLink exact to="/stats">Stats</NavLink></Menu.Item>
                <Button as='a' style={{ marginLeft: '0.5em' }} onClick={this.props.handleLoginClick}>Logout</Button>
              </React.Fragment>
            ) : (
              <Button id="login-button" as='a' style={{ marginLeft: '0.5em' }} onClick={this.props.handleLoginClick}>Login</Button>
            )}
        </Menu>
    )       
  }
}

export default NavBar;
