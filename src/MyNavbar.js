import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';

const MyNavbar = () => {

    return(
        <>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Welcome</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto ml-2 "
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About Us</Nav.Link>
        <Nav.Link href="#action3">Contact Us</Nav.Link>
               
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>

        
        </>
    );

}

export default MyNavbar;