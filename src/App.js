import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Papers from "./pages/Papers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/play" element={<Papers />} />
    </Routes>
  );
}

export default App;
