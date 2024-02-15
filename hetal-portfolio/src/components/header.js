import React from "react";
import { Container, Nav, Navbar, Offcanvas, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logoImage from '../assets/logo.png'
import "../css/header.css";

function OffcanvasExample() {
  return (
    <Navbar expand="lg" fixed="top" fg="red" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image
            className="logo"
            src={logoImage}
            alt="Logo"
            width="50px"
            height="50px"
            roundedCircle
          />
          <h1 className="logo-text m-0 ms-2">Hetal K.Pandya</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="navlink" href="/">Home</Nav.Link>
              <Nav.Link className="navlink" href="/">About</Nav.Link>
              <Nav.Link className="navlink" href="/">Experience</Nav.Link>
              <Nav.Link className="navlink" href="/">Skills</Nav.Link>
              <Nav.Link className="navlink" href="/">Blogs</Nav.Link>
              <Nav.Link className="navlink" href="/">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
