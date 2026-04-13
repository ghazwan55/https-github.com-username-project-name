import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import AllHotels from "./pages/AllHotels";
import RoomDetails from "./pages/RoomDetails";
import Bookings from "./pages/Bookings"; 
import Layout from "./pages/dashboard/Layout";
function App() {
  const location = useLocation();
  const isDashboard = location.pathname.includes("dashboard");

  return (
    <div>
      {/* Navbar يظهر في كل الصفحات ما عدا dashboard */}
      {!isDashboard && <Navbar />}

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<AllHotels />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/dashboard" element={<Layout/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
