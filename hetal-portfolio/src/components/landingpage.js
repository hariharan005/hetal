import "../css/landingpage.css";
import Landingimg1 from "../assets/existentialtherapy.jpg";
import Landingimg2 from "../assets/gestalttheraphy.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Landingpage() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="landingpage" data-aos="fade-down">
      <div className="landingimg">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slideitem">
              <img src={Landingimg1} alt=""></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slideitem">
              <img src={Landingimg2} alt=""></img>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="wave-path"
            d="M0,128L60,112C120,96,240,64,360,74.7C480,85,600,139,720,138.7C840,139,960,85,1080,80C1200,75,1320,117,1380,138.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <h1>Your health is our priority</h1>
      <div className="button">
        <a href="schedule">Book now get a discounts</a>
        <a href="#about">Know More</a>
      </div>
    </div>
  );
}
