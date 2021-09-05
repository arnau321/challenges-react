import React from 'react'
import {Navbar, Container, Nav, NavDropdown, NavLink } from 'react-bootstrap'


const Header = () => (
     <div className="header">
      <Navbar bg="primary" variant='dark' expand="md">
        <Container>
          <Navbar.Brand >Challenges</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink href='/' className='nav-link'>Home</NavLink>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/weather">Weather App</NavDropdown.Item>
                <NavDropdown.Item href="/momentum">Momentum</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </div>
   )
 export default Header