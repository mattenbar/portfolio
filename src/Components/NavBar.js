import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () =>{
  return(
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">HOME</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="/InvoiceTracker">Invoice Tracker App</NavDropdown.Item>
            <NavDropdown.Item href="/PupPals-NYC">PupPals NYC App</NavDropdown.Item>
            <NavDropdown.Item href="/EventLiveStreams">Event Live Streams App</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/Resume">Resumé</Nav.Link>
          <Nav.Link href="/About-Me">About Me</Nav.Link>
          <Nav.Link href="/Contact-Me">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}

export default NavBar