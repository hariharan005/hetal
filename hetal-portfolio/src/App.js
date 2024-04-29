import "./App.css";
//import Loader from "./components/loader";
import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/experience";
import Education from "./components/education";
import Skills from "./components/skills";
import Blogs from "./components/blogs";
import Contact from "./components/contact"
import Schedule from "./components/schedule"
import Testapi from "./components/testapi"
import Feedbacks from "./components/feedback"
import Payment from "./components/payment";
import Whatido from "./components/whatido"
import Sidebar from "./components/sidebar"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<Skills />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="testapi" element={<Testapi />} />
          <Route path="feedback" element={<Feedbacks />} />
          <Route path="payment" element={<Payment />} />
          <Route path="whatido" element={<Whatido />} />
          <Route path="sidebar" element={<Sidebar />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
