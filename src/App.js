import { useState } from "react";

import "./App.css";

import Navbar from "./Components/NavBar/Navbar";
import TopNav from "./Components/TopNav/TopNav";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";

import { Routes, Route } from "react-router-dom";

function App() {
  const [nav, setnav] = useState(false);
  return (
    <div className="App">
      <TopNav nav={nav} setnav={setnav} />
      <Navbar nav={nav} setnav={setnav} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="works" element={<Works />} />
        <Route path="skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
