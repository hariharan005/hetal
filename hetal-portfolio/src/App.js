import "./App.css";
import React, { useEffect } from "react";
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
import { Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    // Set the title when the component mounts
    document.title = "Home";
  }, []);

  

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
        </Routes>
      </header>
    </div>
  );
}

export default App;
