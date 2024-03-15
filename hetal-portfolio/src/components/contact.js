import "../css/contact.css";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contactpic from "../assets/contact.jpg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_e6kidl8", "template_7ggnhf5", form.current, {
        publicKey: "Za-uWbtzvATfxymfb",
      })
      .then(
        () => {
          toast.success("Email sent successfully");
          console.log("SUCCESS!");
        },
        (error) => {
          toast.success("Failed to sent successfully");
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
    <ToastContainer />
      <section className="contact" data-aos="fade-up">
        <div className="conlabel">
          <h5>Contact Me</h5>
          <h2>Get in Touch With Me</h2>
        </div>
        <div className="formdiv">
          <form ref={form} onSubmit={sendEmail}>
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
                name="emailId"
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
