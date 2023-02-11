import React from "react";
import Prod1 from "../assets/prod1.svg";
import Prod2 from "../assets/prod2.svg";
import Prod3 from "../assets/prod3.svg";

function Explore() {
  return (
    <div className=" grid grid-cols-2 px-48 space-x-8">
      <div className=" relative">
        <div className="card absolute bottom-14 left-0 p-10 space-y-4">
          <p className="text-2xl font-bold text-white w-60">
            Top Product Of the Week
          </p>
          <button className="cardbtn text-xs font-bold py-3 px-6">
            EXPLORE ITEMS
          </button>
        </div>
        <img className="w-full h-full" src={Prod1} alt="" />
      </div>
      <div className="grid grid-rows-2 space-y-2">
        <div className="relative w-full h-full">
          <div className="card1 absolute bottom-0 left-0 p-10 space-y-4">
            <p className="text-xl font-bold text-white ">
              Top Product Of the Week
            </p>
            <button className="cardbtn text-xs font-bold py-3 px-6">
              EXPLORE ITEMS
            </button>
          </div>
          <img src={Prod2} alt="" />
        </div>
        <div className="relative">
          <div className="card1 absolute bottom-12 left-0 p-10 space-y-4">
            <p className="text-xl font-bold text-white ">
              Top Product Of the Week
            </p>
            <button className="cardbtn text-xs font-bold py-3 px-6">
              EXPLORE ITEMS
            </button>
          </div>
          <img className="" src={Prod3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Explore;
