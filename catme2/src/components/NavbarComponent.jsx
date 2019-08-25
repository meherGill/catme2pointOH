import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar className="navbar navbar-expand navbar-dark bg-primary topbar mb-2 static-top shadow">
      <Navbar.Brand href="#home">
        <img
        alt=""
        src="support.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' Collaborator'}
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar fixedTop></Navbar>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer exact to="/">
            <Nav.Link>Labs</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/allocate">
            <Nav.Link>Allocate</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
