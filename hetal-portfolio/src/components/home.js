import React from "react";
import "../css/home.css";
import Header from "../components/header";
import About from "../components/about";
import Experience from "../components/experience";
import Education from "../components/education";
import Skills from "../components/skills";
import Whatido from "../components/whatido";
import Blogs from "../components/blogs";
import Contact from "../components/contact";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import profileImage from "../assets/2.jpg";
import Msme from "../assets/msme.webp";
//import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { SocialIcon } from "react-social-icons";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
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
      <section id="home" className="profile-container">
        <div className="profile">
          <div className="sidename">
            <h1>Hetal K</h1>
            <h1>Pandya</h1>
          </div>
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
            <div className="prosocial">
              <SocialIcon
                bgColor="#E9F1F9"
                fgColor="#08203A"
                className="icon"
                url="https://facebook.com"
                network="facebook"
                target="_blank"
              ></SocialIcon>
              <SocialIcon
                bgColor="#E9F1F9"
                fgColor="#08203A"
                className="icon"
                url="https://facebook.com"
                network="twitter"
                target="_blank"
              ></SocialIcon>
              <SocialIcon
                bgColor="#E9F1F9"
                fgColor="#08203A"
                className="icon"
                url="https://facebook.com"
                network="instagram"
                target="_blank"
              ></SocialIcon>
            </div>
            <img src={profileImage} alt="Profile" title="Hetal"></img>
          </div>
          <div className="buttons">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-170}
              className="knw-button"
            >
              Know More
            </Link>
            <a href="schedule" className="dnw-button">
              Schedule Counseling
            </a>
            <a href={Msme} download="profile" className="dnw-button">
              UDYAM-XX-00-0000000
            </a>
          </div>
        </div>
      </section>
      <About id="about"></About>
      <Whatido></Whatido>
      <Skills></Skills>
      <Education></Education>
      <Experience></Experience>
      <Contact></Contact>
      <Blogs></Blogs>
      <div className="bookschedule">
        <div className="booklabel">
          <p>
            Book a Schedule for Counseling. Im available on Monday, Wednesday,
            and Sunday.
          </p>
        </div>
        <div className="schedulelink">
          <a href="schedule">Schedule</a>
        </div>
      </div>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
