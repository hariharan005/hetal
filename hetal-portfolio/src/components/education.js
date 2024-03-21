import "../css/education.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//import { Link } from "react-router-dom";

export default function Education() {
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
      <section className="education" id="education" data-aos="fade-up">
        <h3>Education</h3>
        <div>
          <div className="horizontal"></div>
          <h4 className="year">Jan 2019 - Jun 2021</h4>
          <h5 className="college">University of Madras</h5>
          <h6 className="degree">Masters in Psychology</h6>
          <div className="eduscope">
            <p>
              A Master's in Psychology is an advanced degree program designed to
              provide students with a deeper understanding of human behavior,
              cognition, and mental processes. It typically involves coursework
              in areas such as developmental psychology, social psychology,
              clinical psychology, cognitive psychology, and research methods.
              Students may also have the opportunity to specialize in areas such
              as counseling, industrial-organizational psychology, or
              neuropsychology. A master's degree in psychology can prepare
              graduates for various career paths, including counseling,
              research, human resources, or further study at the doctoral level.
            </p>
          </div>
          <div className="vertical"></div>
        </div>
      </section>
    </>
  );
}
