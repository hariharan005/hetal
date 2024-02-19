import React from "react";
import "../css/home.css";
import Header from "../components/header";
//import Footer from "../components/footer";
import profileImage from "../assets/logo.png";

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
            <a href="/about" className="knw-button" onclick="window.location.href = 'https://ide.geeksforgeeks.org'">Know More</a>
            <a href="/about" className="dnw-button">Download</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
