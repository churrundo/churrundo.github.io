import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
//import AboutMe from './pages/AboutMe';
//import Portfolio from './pages/Portfolio';
//import Blog from './pages/Blog';
//import Resume from './pages/Resume';
//import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} /> */}
          {/* Add additional routes as necessary */}
        </Routes>
        {/* Optionally, include a Footer component here */}
      </div>
    </Router>
  );
}

export default App;
