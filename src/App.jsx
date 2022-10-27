import React, { useState } from "react";
import items from "./data";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import './App.css';
import Login from "./Pages/Login";
import Admin from "./Components/Admin";
import AdminHome from "./Pages/AdminHome";
import CustomerHome from "./Pages/Customer/CustomerHome";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route path="admin/home" element={<AdminHome />} />
          <Route path="cliente" element={<CustomerHome />} />

        </Routes>
    </BrowserRouter>
  );
};

export default App;