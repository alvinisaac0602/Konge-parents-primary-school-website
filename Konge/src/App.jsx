import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NewsAndEvents from "./pages/NewsAndEvents";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Assuming you have a Footer component
import Academics from "./pages/Academics";
import Contact from "./pages/Contact"; // Assuming you have a Contact page
import Admissions from "./pages/Admissions"; // Assuming you have an Admissions page

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news-and-events" element={<NewsAndEvents />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admissions" element={<Admissions />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
