import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import { Box } from "@mui/material";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Analysis from "./components/Analysis";
import Office from "./components/Office";
import BusManagement from "./components/BusManagement";
import CrewManagement from "./components/CrewManagement";
import RouteManagement from "./components/RouteManagement";
import MaintenanceManagement from "./components/MaintenanceManagement";
import ReportsAnalytics from "./components/ReportsAnalytics";
import FeedbackSupport from "./components/FeedbackSupport";
import GenerationRequest from "./components/GenerationRequest"; // Import the new component

function App() {
  // Check local storage for login status
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true"
  );

  // Sync login state with local storage
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <TopBar isLoggedIn={isLoggedIn} />
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/bus-management" element={<BusManagement />} />
            <Route path="/crew-management" element={<CrewManagement />} />
            <Route path="/route-management" element={<RouteManagement />} />
            <Route
              path="/maintenance-management"
              element={<MaintenanceManagement />}
            />
            <Route path="/reports-analytics" element={<ReportsAnalytics />} />
            <Route path="/feedback-support" element={<FeedbackSupport />} />
            <Route
              path="/office"
              element={isLoggedIn ? <Office /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            {/* New Generation Request Route */}
            <Route
              path="/generation-request"
              element={<GenerationRequest />}
            />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
