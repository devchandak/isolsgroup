import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InnovativeSolutionTechnologies from "./components/groupcompanies/InnovativeSolutionTechnologies";
import DigitalIndiaLeader from "./components/groupcompanies/DigitalIndiaLeader";
import DigitalMarketingCompanion from "./components/groupcompanies/DigitalMarketingCompanion";
import ThirstyHunter from "./components/groupcompanies/ThirstyHunter";
import BookYouOnline from "./components/groupcompanies/BookYouOnline";
import BusinessTechnology from "./components/solutionservices/BusinessTechnology";
import DigitalMarketingSolution from "./components/solutionservices/DigitalMarketingSolution";
import DigitalPaymentsSolution from "./components/solutionservices/DigitalPaymentsSolution";
import BusinessProcessManagement from "./components/solutionservices/BusinessProcessManagement";
import CloudInfrastructure from "./components/solutionservices/CloudInfrastructure";
import TechDigitalConsulting from "./components/solutionservices/TechDigitalConsulting";

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
        <Route path="/business-technology-solutions" element={<BusinessTechnology />} />
        <Route path="/digital-marketing-solutions" element={<DigitalMarketingSolution />} />.
        <Route path="/digital-payment-solutions" element={<DigitalPaymentsSolution />} />
        <Route path="/business-process-management" element={<BusinessProcessManagement />} />
        <Route path="/cloud-infra-solutions" element={<CloudInfrastructure />} />
        <Route path="/technology-digital-consulting" element={<TechDigitalConsulting />} />
      </Routes>
    </Router>
  );
};

export default App;
