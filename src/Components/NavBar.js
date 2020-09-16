import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () =>{
  return(
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
    </Navbar>
  )

}

export default NavBar