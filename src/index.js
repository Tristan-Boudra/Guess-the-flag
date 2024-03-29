import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home";
import Error from "./pages/error";
import Navbar from "./components/navbar";
import AllFlags from "./pages/allFlags";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allFlags" element={<AllFlags />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
