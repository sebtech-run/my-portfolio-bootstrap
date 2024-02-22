import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../styles/style.css';

const Navigation = () => {

    return (
        <Navbar className="section-navbar">
        <Container>
          <Navbar.Brand href="#home" className='section-navbar__name'><h4>BOUILLET SÉBASTIEN</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Mes projets" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Kasa</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Ohmyfood
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">ArgenBank</NavDropdown.Item>
                
               
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;