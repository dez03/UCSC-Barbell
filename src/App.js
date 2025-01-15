import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import WeeklyLifts from "./pages/WeeklyLifts";

import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/weeklylifts" element={<WeeklyLifts />} />

        </Routes>
      </div>
      <Footer />

    </Router>
  );
};

export default App;