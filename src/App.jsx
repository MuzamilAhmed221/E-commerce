import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
      </>
  );
}

export default App;
