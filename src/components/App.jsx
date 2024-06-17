import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import SubHeading from "./SubHeading";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <SubHeading text="Portfolio" />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
