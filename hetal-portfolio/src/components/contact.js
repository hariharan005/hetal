import "../css/contact.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contactpic from "../assets/logo.png"
//import { Link } from "react-router-dom";
export default function Contact() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 1000,
    });
  }, []);
  return (
    <>
      <section className="contact" data-aos="fade-up">
        <h5>Contact Me</h5>
        <h2>Get in Touch With Me</h2>
        <div className="formdiv">
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>

            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number:</label>
              <input type="text" id="contactNumber" name="contactNumber" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contactdiv">
            <img alt="contactimage" src={Contactpic}/>
            <div className="contactme">
                <label>+91 9790755231</label>
                <label>hetal.k@gmail.com</label>
            </div>
        </div>
      </section>
    </>
  );
}
