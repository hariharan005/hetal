import "../css/testimonials.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserCircle } from "react-icons/fa";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <section className="testimonials">
        <h3>Testimonials</h3>
        <h1>What Clients Say</h1>
        <p>
          We place huge value on strong relationship and have seen the benefit
          they bring to our business. Customer feedback is vital in helping us
          to get it right.
        </p>
        <div className="container-column">
          <div className="containers">
            {/* <img src={ProIcon} alt=""></img> */}
            <FaUserCircle className="user"></FaUserCircle>
            <p>
              Your empathetic approach made me feel understood and supported
              throughout the session. I appreciate your patience and kindness in
              addressing my concerns, even when they seemed trivial.
            </p>
            <h5>Pav***</h5>
            <h6>Content Strategist</h6>
          </div>
          <div className="containers">
          <FaUserCircle className="user"></FaUserCircle>
            <p>
              Your empathetic approach made me feel understood and supported
              throughout the session. I appreciate your patience and kindness in
              addressing my concerns, even when they seemed trivial.
            </p>
            <h5>Subashini</h5>
            <h6>Digital Market</h6>
          </div>
          <div className="containers">
          <FaUserCircle className="user"></FaUserCircle>
            <p>
              Your empathetic approach made me feel understood and supported
              throughout the session. I appreciate your patience and kindness in
              addressing my concerns, even when they seemed trivial.
            </p>
            <h5>Sunil</h5>
            <h6>Software Engineer</h6>
          </div>
          <div className="containers">
          <FaUserCircle className="user"></FaUserCircle>
            <p>
              Your empathetic approach made me feel understood and supported
              throughout the session. I appreciate your patience and kindness in
              addressing my concerns, even when they seemed trivial.
            </p>
            <h5>Yasmitha</h5>
            <h6>SOC analyst</h6>
          </div>
        </div>
      </section>
    </>
  );
}
