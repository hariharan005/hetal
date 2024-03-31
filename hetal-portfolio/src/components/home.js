import React from "react";
import "../css/home.css";
import Header from "../components/header";
import About from "../components/about";
import Education from "../components/education";
import Whatido from "../components/whatido";
import Blogs from "../components/blogs";
import Contact from "../components/contact";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import Landingpage from "../components/landingpage";
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
      <Landingpage />
      <section id="home" className="profile-container" data-aos="fade-up">
        <div className="profile">
          <div className="backname">
            <h1>Psychology</h1>
          </div>
          <div className="bio">
            <h1>Hi</h1>
            <h2>Hetal - Counseller Therapist</h2>
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
              offset={-70}
              className="knw-button"
            >
              Know More
            </Link>
            <a href="schedule" className="dnw-button" target="_blank">
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
      <Education></Education>
      <Contact></Contact>
      <Blogs></Blogs>
      <div className="bookschedule">
        <div className="booklabel">
          <p>
            Book a Schedule for Counseling. Im available on Monday, Wednesday,
            Friday, Saturday and Sunday.
          </p>
        </div>
        <div className="schedulelink">
          <a href="schedule" target="_blank">
            Schedule
          </a>
        </div>
      </div>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
