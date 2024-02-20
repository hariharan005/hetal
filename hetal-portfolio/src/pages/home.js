import React from "react";
import "../css/home.css";
import Header from "../components/header";
//import Footer from "../components/footer";
import profileImage from "../assets/logo.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="profile-container">
        <div className="profile">
          <div className="bio">
            <h1>
              Hi I'm <span>Hetal</span>
            </h1>
            <h3>Psycologist</h3>
            <article>
              Experienced psychologist specializing in counseling for students
              and working professionals. Accomplished junior faculty member with
              a passion for promoting mental well-being and personal
              development.
            </article>
          </div>
          <div className="profile-img">
            <img src={profileImage} alt="Profile" title="Hetal"></img>
          </div>
          <div className="buttons">
            <Link to="/about" className="knw-button">
              Know More
            </Link>
            <Link to={profileImage} download="profile" className="dnw-button">
              Download
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
