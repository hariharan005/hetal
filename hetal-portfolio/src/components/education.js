import "../css/education.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//import { Link } from "react-router-dom";

export default function Education() {
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
      <section className="education" id="education" data-aos="fade-up">
        <h3 data-aos="fade-up">Education</h3>
        <div>
            <div className="horizontal"></div>
            <h4 className="year">Jan 2019 - Jun 2021</h4>
            <h5 className="college">University of Madras</h5>
            <h6 className="degree">Masters in Psychology</h6>
            <div className="vertical"></div>
        </div>
      </section>
    </>
  );
}
