import React from 'react';
import { Navbar, Nav, NavDropdown }from 'react-bootstrap/'
import './NavBar.css'
import logo from '../images/logo.png'

const NavBar = () => {

    return(
        <Navbar 
        className="color-nav" 
        expand="lg"
        sticky="top"> 
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    />
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-links">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/master">Pet Lookup</Nav.Link>
                <Nav.Link href="/visit">Schedule Visit</Nav.Link>
                <NavDropdown title="Resources" id="basic-nav-dropdown">
                    <NavDropdown.Item className='dropdown-link' href="/resources">Spay and Neuter</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className='dropdown-link' href="care">Care Options</NavDropdown.Item>
                    <NavDropdown.Item className='dropdown-link' href="playtime">Playtime</NavDropdown.Item>
                    <NavDropdown.Item className='dropdown-link' href="/adoption">Success Stories</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;



