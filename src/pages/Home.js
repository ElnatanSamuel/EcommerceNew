import React from "react";
import Explore from "../components/Explore";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Logos from "../components/logos";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Logos />
      <Explore />
      <Featured />
      <Footer />
    </div>
  );
}

export default Home;
