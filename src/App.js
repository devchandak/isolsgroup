import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InnovativeSolutionTechnologies from "./components/groupcompanies/InnovativeSolutionTechnologies";
import DigitalIndiaLeader from "./components/groupcompanies/DigitalIndiaLeader";
import DigitalMarketingCompanion from "./components/groupcompanies/DigitalMarketingCompanion";
import ThirstyHunter from "./components/groupcompanies/ThirstyHunter";
import BookYouOnline from "./components/groupcompanies/BookYouOnline";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innovative-solution-technologies" element={<InnovativeSolutionTechnologies />} />
        <Route path="/digital-india-leader" element={<DigitalIndiaLeader />} />
        <Route path="/digital-marketing-companion" element={<DigitalMarketingCompanion />} />
        <Route path="/thirsty-hunter" element={<ThirstyHunter />} />
        <Route path="/book-you-online" element={<BookYouOnline />} />
      </Routes>
    </Router>
  );
};

export default App;
