import React from "react";
import { Container, Navbar, Offcanvas, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logoImage from '../assets/logo.png'
import "../css/header.css";
import { Link } from "react-router-dom";

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
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <nav className="justify-content-end flex-grow-1 pe-3">
              <Link className="navlink" to="/">Home</Link>
              <Link className="navlink" to="/about">About</Link>
              <Link className="navlink" to="/experience">Experience</Link>
              <Link className="navlink" to="/skills">Skills</Link>
              <Link className="navlink" to="/blogs">Blogs</Link>
              <Link className="navlink" to="/contact">Contact</Link>
            </nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
