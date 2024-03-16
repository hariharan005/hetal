import "../css/skills.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCogs } from "react-icons/fa";
//import { Link } from "react-router-dom";

const WorkIcon = () => <FaCogs></FaCogs>;

export default function About() {
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
      <section className="skills" id="skill">
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
            date="2011 - present"
            iconStyle={{ background: "white", color: "#fc466b" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Junior Faculty</h3>
            <h4 className="vertical-timeline-element-subtitle">GLIM</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
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
            date="2011 - present"
            iconStyle={{ background: "white", color: "#fc466b" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Junior Faculty</h3>
            <h4 className="vertical-timeline-element-subtitle">GLIM</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </>
  );
}
