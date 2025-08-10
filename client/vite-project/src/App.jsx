import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import BookingForm from "./Pages/BookingForm";
import About from "./Pages/About";
import EmiCalculator from "./Pages/EmiCalculator";
import Contact from "./Pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bookingform" element={<BookingForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/emicalculator" element={<EmiCalculator />} />
      <Route path="/contact" element={<Contact />} />
  
    </Routes>
  );
}

export default App;
