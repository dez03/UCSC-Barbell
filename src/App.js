import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import WeeklyLifts from "./pages/WeeklyLifts";


const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/events" element={<Events />} />
          <Route path="/weeklylifts" element={<WeeklyLifts />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;