import "../css/contact.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contactpic from "../assets/contact.jpg";
export default function Contact() {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 600,
      easing: "ease-in-sine",
      delay: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <section className="contact" data-aos="fade-up">
        <div className="conlabel">
          <h5>Contact Me</h5>
          <h2>Get in Touch With Me</h2>
        </div>
        <div className="formdiv">
          <form>
            <div className="form-group">
              <label htmlFor="firstName">
                First Name:<sup>*</sup>
              </label>
              <input
                placeholder="Firstname"
                type="text"
                id="firstName"
                name="firstName"
                required="required"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">
                Last Name:<sup>*</sup>
              </label>
              <input
                placeholder="Lastname"
                type="text"
                id="lastName"
                name="lastName"
                required="required"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email:<sup>*</sup>
              </label>
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                required="required"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactNumber">
                Contact Number:<sup>*</sup>
              </label>
              <input
                placeholder="Phone number"
                type="text"
                id="contactNumber"
                name="contactNumber"
                required="required"
                maxLength="10"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message:<sup>*</sup>
              </label>
              <textarea
                placeholder="Message"
                id="message"
                name="message"
                required="required"
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contactdiv">
          <img alt="contactimage" src={Contactpic} />
          <div className="contactme">
            <label>+91 9677723567</label>
            <label>hetalpanday@gmail.com</label>
            <label>hetalsuresh06@gmail.com</label>
          </div>
        </div>
      </section>
    </>
  );
}
