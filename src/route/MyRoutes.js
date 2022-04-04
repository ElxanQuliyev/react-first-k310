import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFount from "../pages/NotFount";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/haqqimizda" element={<About/>}/>
      <Route path="/elaqe" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="*" element={<NotFount/>}/>
    </Routes>
  );
};

export default MyRoutes;
