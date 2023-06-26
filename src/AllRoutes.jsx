import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Questions from "./pages/Questions/Questions";
import AskQuestions from "./pages/AskQuestion/AskQuestion";
import DisplayQuestions from "./pages/Questions/DisplayQuestions";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Auth" element={<Auth />}></Route>
      <Route path="/Questions" element={<Questions />}></Route>
      <Route path="/Askquestion" element={<AskQuestions />}></Route>
      <Route path="/Questions/:id" element={<DisplayQuestions />}></Route>
      <Route path="/Tags" element={<Tags />}></Route>
      <Route path="/Users" element={<Users />}></Route>
      <Route path="/Users/:id" element={<UserProfile />}></Route>
    </Routes>
  );
};

export default AllRoutes;
