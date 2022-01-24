import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import "./styles.css"

export default function NavbarComponent() {
    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img src="/LOGO.jpg" alt="Logo" /> Shri Ram Hospital</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        {/* <Nav.Link href="#services"><h5>Services</h5></Nav.Link> */}
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#services">Our Team</Nav.Link>
                        <Nav.Link href="#home">Our Facility</Nav.Link>
                        <Nav.Link href="#aboutus">About us</Nav.Link>
                        <Nav.Link href="#home">FAQ</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

// primary - #007bff
// secondary - #6c757d
// success - #28a745
// danger - #dc3545
// warning - #ffc107
// info - #17a2b8
// light - #f8f9fa
// dark - #343a40
// muted - #6c757d
// white - #ffffff