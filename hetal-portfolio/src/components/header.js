import React from "react";
import { Container, Navbar, Offcanvas, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logoImage from '../assets/logo.png'
import "../css/header.css";
//import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';

function OffcanvasExample() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    scroll.scrollToTop();
  }, []);

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
              <Link className="navlink" to="home" smooth={true} offset={-170} duration={500}>Home</Link>
              <Link className="navlink" to="about" smooth={true} offset={-170} duration={500}>About</Link>
              <Link className="navlink" to="skill" smooth={true} offset={-170} duration={500}>Skills</Link>
              <Link className="navlink" to="education" smooth={true} offset={-170} duration={500}>Education</Link>
              <Link className="navlink" to="experience" smooth={true} offset={-170} duration={500}>Experience</Link>
              <Link className="navlink" to="contact" smooth={true} offset={-170} duration={500}>Contact</Link>
              <Link className="navlink" to="blogs" smooth={true} offset={-170} duration={500}>Blogs</Link>
            </nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
