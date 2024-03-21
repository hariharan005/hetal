import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../css/whatido.css";
import { Autoplay } from "swiper/modules";
import Slide1 from "../assets/cbt.jpg";
import Slide2 from "../assets/existentialtherapy.jpg";
import Slide3 from "../assets/gestalttheraphy.jpg";
import Slide4 from "../assets/HumanisticPsychology.png";
import Slide5 from "../assets/Psychoanalysis.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Whatido() {
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
    <section className="whatido" data-aos="fade-up">
      <div className="title">
        <h3>What I Do</h3>
      </div>
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
            <h1 className="slidetitle">Cognitive Behavioral Therapy</h1>
            <img src={Slide1} alt=""></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideitem">
            <h1 className="slidetitle">Existential Therapy</h1>
            <img src={Slide2} alt=""></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideitem">
            <h1 className="slidetitle">Gestalt Therapy</h1>
            <img src={Slide3} alt=""></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideitem">
            <h1 className="slidetitle">HumanisticTherapy</h1>
            <img src={Slide4} alt=""></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideitem">
            <h1 className="slidetitle">psychoanalytic Therapy</h1>
            <img src={Slide5} alt=""></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
