import React from "react";

import Header from "./components/Header";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./bootstrap.min.css";
import Faviorites from "./components/Faviorites";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fav" element={<Faviorites />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
