  
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
      <React.Fragment>
      <Button position={'left'} style={{ marginLeft: '0.5em' }} id="mapquiz-link" as='a'><NavLink id='mapquiz-text' exact to="/"><img id='logo' src={require('../favicon.ico')}></img>MapQuiz</NavLink></Button>
          
            {this.props.user ? (
              <React.Fragment>
                <Button className='nav-link' as='a' style={{ marginLeft: '0.5em' }}  id='logout-button' onClick={this.props.handleLogoutClick}><NavLink exact to="/">Logout</NavLink></Button>
                <Button className='nav-link' id="play-link" as='a'><NavLink exact to="/play">Play</NavLink></Button>
                <Button className='nav-link' id="stats-link" as='a'><NavLink exact to="/stats">Stats</NavLink></Button>
              </React.Fragment>
            ) : (
              <Button className='nav-link' position={null} id="login-button" as='a' style={{ marginLeft: '0.5em' }} onClick={this.props.handleLoginClick}>Login</Button>
            )}
            
        
        </React.Fragment>
    )       
  }
}

export default NavBar;
