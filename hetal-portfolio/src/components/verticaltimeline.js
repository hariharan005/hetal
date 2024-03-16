import "../css/verticaltimeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from 'react-icons/fa';

const WorkIcon = () => <FaBriefcase></FaBriefcase>;

export default function App() {
  return (
    <div className="App">
      <VerticalTimeline lineColor="#fc466b">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ffffff", color: "#08203A", borderTop: "2px solid #fc466b"  }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "white", color: "red" }}
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
    </div>
  );
}
