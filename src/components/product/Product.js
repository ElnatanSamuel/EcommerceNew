import React from "react";
import Feature1 from "../../assets/feature1.svg";
import Feature2 from "../../assets/feat2.svg";
import Feature3 from "../../assets/feat3.svg";
import Feature4 from "../../assets/feat4.svg";
import Feature5 from "../../assets/feat5.svg";
import Feature6 from "../../assets/feat6.svg";
import Feature7 from "../../assets/feat7.svg";
import Feature8 from "../../assets/feat8.svg";
import Feature9 from "../../assets/feat9.svg";
import { UilShoppingBag } from "@iconscout/react-unicons";

function Product() {
  const products = [
    {
      name: "Shirt",
      price: 20,
      picture: Feature1,
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
      picture: Feature1,
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
      <div className="grid grid-cols-5 items-center space-x-4 justify-center px-16 pt-8">
        {products.map((item) => {
          return (
            <div className="flex flex-col pt-8 justify-center">
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
      <div className="flex flex-row items-center justify-center">
        <button>Prev</button>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Product;
