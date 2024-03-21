import "../css/skills.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCogs } from "react-icons/fa";
//import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const WorkIcon = () => <FaCogs></FaCogs>;

export default function About() {
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
      {/* <section className="skills">
        <h3>Skill</h3>
        <div className="vertical-line">
          {[...Array(15)].map((_, index) => (
            <div key={index} className="dot"></div>
          ))}
        </div>
        <div className="two-column-layout">
          <div>Interpersonal Communication</div>
          <div>Mentoring</div>
          <div>Process Improvement</div>
          <div>People Management</div>
          <div>Research</div>
          <div>Communication</div>
          <div>Interpersonal Skills</div>
          <div>Business Continuity Planning</div>
          <div>Customer Support</div>
          <div>System Administration</div>
          <div>Quality Control</div>
          <div>Content Management</div>
          <div>Vendor Management</div>
          <div>Analysis</div>
          <div>Program Management</div>
        </div>
      </section> */}
      <section data-aos="fade-up" className="skills" id="skill">
        <div className="title">
          <h3>Skill</h3>
        </div>
        <VerticalTimeline lineColor="#fc466b">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#ffffff",
              color: "#08203A",
              borderTop: "2px solid #fc466b",
              borderRight: "2px solid #fc466b",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fc466b" }}
            iconStyle={{ background: "white", color: "#fc466b" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Interpersonal Communication</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#ffffff",
              color: "#08203A",
              borderTop: "2px solid #fc466b",
              borderLeft: "2px solid #fc466b",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fc466b" }}
            iconStyle={{ background: "white", color: "#fc466b" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Mentoring</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#ffffff",
              color: "#08203A",
              borderTop: "2px solid #fc466b",
              borderLeft: "2px solid #fc466b",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fc466b" }}
            iconStyle={{ background: "white", color: "#fc466b" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Quality Control</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#ffffff",
              color: "#08203A",
              borderTop: "2px solid #fc466b",
              borderLeft: "2px solid #fc466b",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fc466b" }}
            iconStyle={{ background: "white", color: "#fc466b" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Business Continuity Planning</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#ffffff",
              color: "#08203A",
              borderTop: "2px solid #fc466b",
              borderLeft: "2px solid #fc466b",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fc466b" }}
            iconStyle={{ background: "white", color: "#fc466b" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Program Management</h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </>
  );
}
