import "./App.css";
//import Loader from "./components/loader";
import Home from "./components/home";
import About from "./components/about";
import Education from "./components/education";
import Blogs from "./components/blogs";
import Contact from "./components/contact"
import Schedule from "./components/schedule"
import Feedbacks from "./components/feedback"
import Whatido from "./components/whatido"
import Header from "./components/header"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="feedback" element={<Feedbacks />} />
          <Route path="whatido" element={<Whatido />} />
          <Route path="header" element={<Header />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
