import React from "react";
// import Card1 from "../../assets/card-item2.svg";
// import Card2 from "../../assets/card2.svg";
import Card3 from "../../assets/card3.svg";
import Card4 from "../../assets/card4.svg";
import Card5 from "../../assets/card6.svg";

function Shop() {
  return (
    <div className="pt-24 px-26">
      <div className="grid grid-cols-6 space-x-4 items-center justify-center">
        <div className="relative ml-3 cursor-pointer">
          <img className="w-full h-full" src={Card3} alt="" />
          <div className="flex flex-col justify-center m-auto space-y-2 absolute inset-1/4 text-white ">
            <p className="font-bold text-center">CLOTHS</p>
            <p className=" text-sm text-center">5 Items</p>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <img className="w-full h-full" src={Card4} alt="" />
          <div className="flex flex-col justify-center m-auto space-y-2 absolute inset-1/4 text-white ">
            <p className="font-bold text-center">CLOTHS</p>
            <p className=" text-sm text-center">5 Items</p>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <img className="w-full h-full" src={Card3} alt="" />
          <div className="flex flex-col justify-center m-auto space-y-2 absolute inset-1/4 text-white ">
            <p className="font-bold text-center">CLOTHS</p>
            <p className=" text-sm text-center">5 Items</p>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <img className="w-full h-full" src={Card4} alt="" />
          <div className="flex flex-col justify-center m-auto space-y-2 absolute inset-1/4 text-white ">
            <p className="font-bold text-center">CLOTHS</p>
            <p className=" text-sm text-center">5 Items</p>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <img className="w-full h-full" src={Card5} alt="" />
          <div className="flex flex-col justify-center m-auto space-y-2 absolute inset-1/4 text-white ">
            <p className="font-bold text-center">CLOTHS</p>
            <p className=" text-sm text-center">5 Items</p>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <img className="w-full h-full" src={Card5} alt="" />
          <div className="flex flex-col justify-center m-auto space-y-2 absolute inset-1/4 text-white ">
            <p className="font-bold text-center">CLOTHS</p>
            <p className=" text-sm text-center">5 Items</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
