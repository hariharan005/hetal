import "../css/contact.css";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contactpic from "../assets/contact.jpg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 1000,
      once: false,
    });
  }, []);

  const form = useRef();

  // State to hold form input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    contactNumber: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3rj532h", "template_u47e4bf", form.current, {
        publicKey: "B-oVZILZaD5NZi6Nl",
      })
      .then(
        () => {
          toast.success("Email sent successfully");
          console.log("SUCCESS!");
          // Clear form input values after successful submission
          setFormData({
            firstName: "",
            lastName: "",
            emailId: "",
            contactNumber: "",
            message: "",
          });
        },
        (error) => {
          toast.success("Failed to sent successfully");
          console.log("FAILED...", error.text);
        }
      );
  };

  // Handler to update form input value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <ToastContainer />
      <section className="contact">
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
                value={formData.firstName}
                onChange={handleChange}
                required="required"
                maxLength="15"
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
                value={formData.lastName}
                onChange={handleChange}
                required="required"
                maxLength="10"
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
                value={formData.emailId}
                onChange={handleChange}
                required="required"
                maxLength="100"
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
                value={formData.contactNumber}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                required="required"
                maxLength="500"
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contactdiv">
          <img alt="contactimage" src={Contactpic} />
          <div className="contactme">
            <div className="faicon">
              <FaPhone></FaPhone>
              <label>+91&nbsp;9677723567</label>
            </div>
            <div className="faicon">
              <FaWhatsapp></FaWhatsapp>
              <a
                data-action="open"
                data-phone="919677723567"
                data-message=""
                role="button"
                tabindex="0"
                target="_blank"
                rel="noreferrer"
                href="https://web.whatsapp.com/send?phone=919677723567&amp;text="
              >
                Chat&nbsp;via&nbsp;whatsapp
              </a>
            </div>
            <div className="faicon">
              <FaEnvelope></FaEnvelope>
              <label>hetalsuresh06@gmail.com</label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
