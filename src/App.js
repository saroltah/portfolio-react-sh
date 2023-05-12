import React from "react";
import "./App.css";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";

export default function App() {
  return (
    <div className="App">
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
