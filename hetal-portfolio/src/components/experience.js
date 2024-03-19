import "../css/experience.css";
import "../css/verticaltimeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";

//import { Link } from "react-router-dom";

const WorkIcon = () => <FaBriefcase></FaBriefcase>;

export default function About() {
  return (
    <>
      <section className="experience">
        <div className="title">
          <h3>Experience</h3>
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
            date="2023 - present"
            iconStyle={{ background: "white", color: "#fc466b" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Junior Faculty</h3>
            <h4 className="vertical-timeline-element-subtitle">Greatlakes Institute of Management</h4>
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
              borderTop: "2px solid #fc466b", borderLeft: "2px solid #fc466b",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fc466b" }}
            date="2022 - 2023"
            iconStyle={{ background: "white", color: "#fc466b" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Deputy Manager - Research Center</h3>
            <h4 className="vertical-timeline-element-subtitle">Greatlakes Institute of Management</h4>
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
