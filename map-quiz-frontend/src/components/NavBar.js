import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react'
// import { Container } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <Container className="navbar">
        <Button><NavLink exact to="/">Home</NavLink></Button>
        <Button><NavLink exact to="/login">Login</NavLink></Button>
        <Button><NavLink exact to="/play">Play</NavLink></Button>
        <Button><NavLink exact to="/stats">Stats</NavLink></Button>
    </Container>
  );
};

export default NavBar;