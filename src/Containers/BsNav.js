// BsNav.jsx
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { HouseDoor, MusicNoteBeamed, Table } from 'react-bootstrap-icons';

function BsNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">Musical-Stairs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/MainPage">
              <HouseDoor /> Home
            </Nav.Link>
            <Nav.Link href="/Datatable">
              <Table /> Data Table
            </Nav.Link>
            <Nav.Link href="/MusicVisualiser">
              <MusicNoteBeamed /> Music Visualiser
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BsNav;
