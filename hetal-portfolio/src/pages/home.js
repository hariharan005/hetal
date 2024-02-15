import React from "react";
import "../css/home.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";
import profileImage from "../assets/logo.png";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <div className="profile">
          <h1>Hi I'm Hetal</h1>
          <h3>Psycologist</h3>
          <article>
            Experienced psychologist specializing in counseling for students and
            working professionals. Accomplished junior faculty member with a
            passion for promoting mental well-being and personal development.
          </article>
          <img src={profileImage} alt="Profile" title="Hetal"></img>
          <button>Know More</button>
          <button>Download</button>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
