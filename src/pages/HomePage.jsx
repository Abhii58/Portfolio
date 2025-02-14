import React from "react";
import "./HomePage.css";
import LeftSection from "./section/LeftSection";
import RightSection from "./section/RightSection";
import MidSection from "./section/MidSection";
import Navbar from "../components/Layout/Navbar";

function HomePage() {
  return (
   
    <div className="portfolio">
      <header><Navbar /></header>
      <LeftSection />
      <MidSection />
      <RightSection />
    </div>
  );
}

export default HomePage;
