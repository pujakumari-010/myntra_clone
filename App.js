import React from "react";
import "./App.css";
import "./components/Product/Cards";
import "./components/Product/Pdata";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./components/Filter/Filter.jsx";
import "./components/Sort/Sort.jsx";
import { Route, Routes } from "react-router-dom";
import Details from "./components/DetailsPage/Details";
import HomePage from "./components/Product/HomePage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:detailslug" element={<Details/>} />
      </Routes>

    </>
  );
};

export default App;
