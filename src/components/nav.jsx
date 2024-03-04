import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import '../styles/style.css';

const Navigation = () => {

    return (
      <Navbar className='navbar-section' bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className='nav-title'><p>Sébastien Bouillet</p></Navbar.Brand>
        <Nav>
          <NavLink className="link-nav" to="/">
          Home
          </NavLink>
          <NavLink className="link-nav" to="/portfolio">
         Portfolio
          </NavLink>
          <NavLink className="link-nav" to="/contact">
         Contact
          </NavLink>
       
        </Nav>
      </Container>
    </Navbar>
    );
};

export default Navigation;