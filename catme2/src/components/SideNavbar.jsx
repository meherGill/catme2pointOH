import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const SideNavbar = () => {
  return (
    <Navbar className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar fixedTop></Navbar>
      <Navbar.Collapse id="basic-navbar-nav">
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SideNavbar;
