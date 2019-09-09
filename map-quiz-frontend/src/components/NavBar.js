import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react'

const NavBar = (props) => {
  return (
    <Container className="navbar">
        <Button><NavLink exact to="/">Home</NavLink></Button>
      {props.user ? 
        <React.Fragment><Button><NavLink exact to="/play">Play</NavLink></Button>
        <Button><NavLink exact to="/stats">Stats</NavLink></Button></React.Fragment> :
        
        <Button style={{color: "#009fda"}} onClick={props.handleLoginClick}>Login</Button>
      }
    </Container>
  );
};

export default NavBar;