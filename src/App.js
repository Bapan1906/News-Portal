import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Business from "./component/Business";
import Technical from "./component/Technical";
import Political from "./component/Political";
import Sports from "./component/Sports";
import Entertainment from "./component/Entertainment";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/political" element={<Political />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/entertainment" element={<Entertainment />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
