import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

      <Navbar />

    </div>
  );
}