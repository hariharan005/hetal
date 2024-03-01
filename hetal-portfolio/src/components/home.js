import React from "react";
import "../css/home.css";
import Header from "../components/header";
import About from "../components/about";
import Experience from "../components/experience";
import Education from "../components/education";
import Skills from "../components/skills";
import Blogs from "../components/blogs";
import Contact from "../components/contact";
//import Footer from "../components/footer";
import profileImage from "../assets/2.png";
//import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
        once: true,
    });
  }, []);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header />
      <section data-aos="fade-in" className="profile-container">
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
          <div id="profile-img">
            <img src={profileImage} alt="Profile" title="Hetal"></img>
          </div>
          <div className="buttons">
            <Link to="about" smooth={true} duration={500} className="knw-button">
              Know More
            </Link>
            <Link to={profileImage} download="profile" className="dnw-button">
              Download
            </Link>
          </div>
        </div>
      </section>
        <About id="about"></About>
        {/* <Whatido></Whatido> */}
        <Skills></Skills>
        <Education></Education>
        <Experience></Experience>
        <Blogs></Blogs>
        <Contact></Contact>
    </>
  );
};

export default HomePage;
