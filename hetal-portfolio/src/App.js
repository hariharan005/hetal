import "./App.css";
import React, { useEffect } from "react";
import Loader from "./components/loader";
import Home from "./pages/home";
import About from "./pages/about";
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
        </Routes>
      </header>
    </div>
  );
}

export default App;
