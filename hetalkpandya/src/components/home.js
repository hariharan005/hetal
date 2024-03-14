import React from "react";
import "../css/home.css";
import Header from "../components/header";
import About from "../components/about";
import Experience from "../components/experience";
import Education from "../components/education";
import Skills from "../components/skills";
import Blogs from "../components/blogs";
import Contact from "../components/contact";
import Footer from "../components/footer";
//import Footer from "../components/footer";
import profileImage from "../assets/2.jpg";
import Msme from "../assets/msme.webp"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animateScroll as scroll } from 'react-scroll';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
        once: false,
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
          <div className="profile-img">
            <img src={profileImage} alt="Profile" title="Hetal"></img>
          </div>
          <div className="buttons">
            <Link to="about" smooth={true} duration={500} className="knw-button">
              Know More
            </Link>
            <Link to="schedule" download="profile" className="dnw-button">
            Schedule Counseling
            </Link>
            <a href={Msme} download="profile" className="dnw-button">
            UDYAM-XX-00-0000000
            </a>
          </div>
        </div>
      </section>
        <About id="about"></About>
        {/* <Whatido></Whatido> */}
        <Skills></Skills>
        <Education></Education>
        <Experience></Experience>
        <Contact></Contact>
        <Blogs></Blogs>
        <Footer></Footer>
    </>
  );
};

export default HomePage;