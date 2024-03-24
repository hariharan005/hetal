import "../css/about.css";
import Profile from "../assets/logo.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <section className="about" id="about">
        <h3>About Me</h3>
        <div className="bioabout1">
          <h1>20 Years Experience on</h1>
          <h2>Junior Faculty</h2>
          <article>
            <p>
              With dedicated service of 20 years in the education sector, I have
              always had an unwavering passion for nurturing the emotional and
              personal growth of those around me. Moving to counselling is thus
              a natural progression in my journey to help those in need.  My
              wealth of experience extends beyond counselling, encompassing
              positive relationships with students, collaboration with fellow
              educators, and forging strong connections with all stakeholders.
              With a fresh set of eyes and a heart eager to make a positive
              impact, I intend to contribute to nurturing and empowering
              environment I strive to create within my society. 
            </p>
          </article>
        </div>
        <div className="profile1">
          <div className="round1"></div>
          <div className="round2-blur"></div>
          <div className="round3space"></div>
          <div className="round40ffspace"></div>
          <img src={Profile} alt="profile" title="Hetal"></img>
        </div>
      </section>
    </>
  );
}
