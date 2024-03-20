import Header from "../components/header";
import Footer from "../components/footer";
import { InlineWidget } from "react-calendly";
import "../css/schedule.css";
export default function About() {
  return (
    <>
      {/* <Header /> */}
      {/* <div className="schedule">
        <form>
          <input type="text" placeholder="Fullname"></input>
          <input type="date" placeholder="dd/mm/yyyy"></input>
          <input type="tel" placeholder="+91 "></input>
          <label for="counseling-types">Choose a counseling type:</label>
          <select id="counseling-types">
          <option value="" selected disabled>Please select a counseling type</option>
            <option value="cbt">Cognitive Behavioral Therapy (CBT)</option>
            <option value="psychoanalytic">Psychoanalytic Therapy</option>
            <option value="humanistic">Humanistic Therapy</option>
            <option value="existential">Existential Therapy</option>
            <option value="gestalt">Gestalt Therapy</option>
          </select>
          <button>Submit</button>
        </form>
      </div> */}
      <div className="widget">
        <InlineWidget
          url="https://calendly.com/counseling-schedule"
          text="Click here to schedule!"
        />
      </div>
      {/* <Footer /> */}
    </>
  );
}
