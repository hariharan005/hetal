import "../css/blogs.css";
//import Blog1 from "../assets/blog.jpg";
//import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Blogs() {
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
      <section className="blogs" data-aos="fade-up">
        <h3>Blogs</h3>
        <h1>My Latest Post</h1>
        <div class="container">
          <div class="column">
            <img src="" alt="blog1"></img>
          </div>
          <div class="column">
            <img src="" alt="blog1"></img>
          </div>
          <div class="column">
            <img src="" alt="blog1"></img>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
}
