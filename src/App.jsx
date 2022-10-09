import React, { useState } from "react";
import Card from "./Components/Card";
import Categories from "./Components/Categories";
import items from "./data";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";

import logo from "./logo.svg";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import './App.css';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  // const [menuItems, setMenuItems] = useState(items);
  // const [activeCategory, setActiveCategory] = useState("");
  // const [categories, setCategories] = useState(allCategories);

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Categories />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;