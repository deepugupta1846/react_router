import React from "react";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import About from "./About";

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about/:username" element={<About />} />
      </Routes>
    </>
  );
}
export default Routers;
