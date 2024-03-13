import "../css/experience.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//import { Link } from "react-router-dom";
export default function About() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 600,
      easing: "ease-in-sine",
      delay: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <section className="experience" data-aos="fade-up">
        <h3>Experience</h3>
        <div className="vertical-line1">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="dot1"></div>
          ))}
        </div>
        <div className="two-column-layout1">
          <div>Junior Faculty</div>
          <div>Deputy Manager - Reasearch Center</div>
        </div>
      </section>
    </>
  );
}
