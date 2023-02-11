import React from "react";
import Prod1 from "../../assets/prod112.svg";
import Feature2 from "../../assets/prod21.svg";
import Feature3 from "../../assets/prod31.svg";
import Feature4 from "../../assets/prod4.svg";
import Feature5 from "../../assets/prod5.svg";
import Feature6 from "../../assets/prod6.svg";
import Feature7 from "../../assets/prod7.svg";
import Feature8 from "../../assets/prod8.svg";
import Feature9 from "../../assets/prod9.svg";
import Feature10 from "../../assets/prod10.svg";
import Feature11 from "../../assets/prod11.svg";
import Feature12 from "../../assets/prod12.svg";
import { UilShoppingBag } from "@iconscout/react-unicons";

function Product() {
  const products = [
    {
      name: "Shirt",
      price: 20,
      picture: Prod1,
    },
    {
      name: "Shirt",
      price: 20,
      picture: Feature2,
    },
    {
      name: "Shirt",
      price: 20,
      picture: Feature3,
    },
    {
      name: "Shirt",
      price: 20,
      picture: Feature4,
    },
    {
      name: "Shirt",
      price: 20,
      picture: Feature5,
    },
    {
      name: "Shirt",
      price: 20,
      picture: Feature6,
    },
    {
      name: "Shirt",
      price: 20,
      picture: Feature7,
    },
    {
      name: "Shirt",
      price: 20,
      picture: Feature8,
    },
    {
      name: "Shirt",
      price: 20,
      picture: Feature9,
    },
    {
      name: "Shirt",
      price: 20,
      picture: Feature10,
    },
    {
      name: "Shirt",
      price: 20,
      picture: Feature11,
    },
    {
      name: "Shirt",
      price: 20,
      picture: Feature12,
    },
  ];
  return (
    <div className="py-16 px-32">
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold text-xs opacity-70">Showing all 12 results</p>
        <div className="space-x-2">
          <select className="selectbtn text-xs font-extrabold space-y-2">
            <option>Popularity</option>
            <option>Popularity</option>
            <option>Popularity</option>
            <option>Popularity</option>
          </select>
          <button className="filterbtn text-xs font-bold text-white">
            Filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 items-center justify-center px-16 pt-8">
        {products.map((item) => {
          return (
            <div className="flex flex-col pt-8 pr-8 justify-center">
              <img className="featureimg" src={item.picture} alt="" />
              <div className="text-center pt-4 space-y-2">
                <p className="text-sm font-bold opacity-80">{item.name}</p>
              </div>
              <div className="flex flex-row items-center px-4 pt-2 justify-between">
                <p className="price text-sm opacity-90">{item.price}$</p>
                <UilShoppingBag
                  className="cursor-pointer"
                  size="18"
                  color="#23856D"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row items-center justify-center pt-16">
        <button className="pagebtn2 bg-gray-100 py-4 px-4 border border-gray-200 text-xs font-semibold">
          Prev
        </button>
        <p className="px-3 py-4 border border-gray-200 text-xs font-bold text-white bg-teal-400 cursor-pointer">
          1
        </p>
        <p className="px-3 py-3 border border-gray-200 text-teal-400 cursor-pointer">
          2
        </p>
        <p className="px-3 py-3 border border-gray-200 text-teal-400 cursor-pointer">
          3
        </p>
        <button className="pagebtn py-4 px-4 border border-gray-200 text-xs font-semibold text-teal-400 ">
          Next
        </button>
      </div>
    </div>
  );
}

export default Product;
