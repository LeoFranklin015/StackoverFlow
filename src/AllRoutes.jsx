import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Questions from "./pages/Questions/Questions";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Auth" element={<Auth />}></Route>
      <Route path="/Questions" element={<Questions />}></Route>
    </Routes>
  );
};

export default AllRoutes;
