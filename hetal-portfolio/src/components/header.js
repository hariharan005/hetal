import React from "react";
import { Container, Navbar, Offcanvas, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logoImage from "../assets/logo.png";
import "../css/header.css";
//import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

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
          <h1 className="logo-text m-0 ms-2">HKP Mindcare</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <nav className="justify-content-end flex-grow-1 pe-3">
              <a
                className="navlink"
                to="landing"
                smooth={true}
                offset={-170}
                duration={500}
              >
                Home
              </a>
              <a
                className="navlink"
                to="about"
                smooth={true}
                offset={-170}
                duration={500}
              >
                About
              </a>
              <a
                className="navlink testd"
                to="schedule"
                smooth={true}
                offset={-170}
                duration={500}
              >
                Counseling
              </a>
              <a
                className="navlink"
                to="contact"
                smooth={true}
                offset={-170}
                duration={500}
              >
                Contact
              </a>
              <a
                className="navlink"
                to="blogs"
                smooth={true}
                offset={-170}
                duration={500}
              >
                Blogs
              </a>
              <a className="navlink" href="feedback" target="_blamk">
                Feedback
              </a>
            </nav>
            <div className="counseling-dropdown">
              <ul>
                <li>
                  <a href="/">option 1</a>
                </li>
                <li>
                  <a href="/">option 2</a>
                </li>
                <li>
                  <a href="/">option 3</a>
                </li>
                <li>
                  <a href="/">option 4</a>
                </li>
              </ul>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
