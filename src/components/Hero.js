import React from "react";
import HeroImg from "../assets/hero-cover-1.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className=" herosection py-16 px-28 flex  flex-row items-center  space-x-4">
      <div className="space-y-6">
        <p className="summertxt text-sm font-bold">SUMMER 2020</p>
        <h1 className="text-5xl font-bold opacity-80">NEW COLLECTION</h1>
        <p className="text-md font-light opacity-60 w-72">
          We know how large objects will act, but things on a small scale.
        </p>

        <button className="shopbtn font-medium py-2 px-6">SHOP NOW</button>
      </div>
      <div className="heroimg">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
