import "../css/skills.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//import { Link } from "react-router-dom";
export default function About() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <section className="skills" data-aos="fade-up">
        <h3>Skill</h3>
        <div className="vertical-line">
          {[...Array(15)].map((_, index) => (
            <div key={index} className="dot"></div>
          ))}
        </div>
        <div className="two-column-layout">
          <div>Interpersonal Communication</div>
          <div>Mentoring</div>
          <div>Process Improvement</div>
          <div>People Management</div>
          <div>Research</div>
          <div>Communication</div>
          <div>Interpersonal Skills</div>
          <div>Business Continuity Planning</div>
          <div>Customer Support</div>
          <div>System Administration</div>
          <div>Quality Control</div>
          <div>Content Management</div>
          <div>Vendor Management</div>
          <div>Analysis</div>
          <div>Program Management</div>
        </div>
      </section>
    </>
  );
}
