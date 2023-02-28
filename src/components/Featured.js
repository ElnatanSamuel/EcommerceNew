import React, { useContext } from "react";
import Feature1 from "../assets/feature1.svg";
import Feature2 from "../assets/feat2.svg";
import Feature3 from "../assets/feat3.svg";
import Feature4 from "../assets/feat4.svg";
import Feature5 from "../assets/feat5.svg";
import Feature6 from "../assets/feat6.svg";
import Feature7 from "../assets/feat7.svg";
import Feature8 from "../assets/feat8.svg";
import Feature9 from "../assets/feat9.svg";

import { UilShoppingBag } from "@iconscout/react-unicons";
import { cartContext } from "../context/Context";

function Featured() {
  const { cart, setCart, cartItems, price, setPrice } = useContext(cartContext);

  const handleCart = (item) => {
    setCart(cart + 1);
    cartItems.push(item);
    setPrice(price + item.price);
  };

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
    <div>
      <p className="text-sm opacity-70 font-bold text-center">
        Featured Products
      </p>
      <p className="text-center text-lg font-bold pt-2">BESTSELLER PRODUCTS</p>
      <div className="grid grid-cols-5 items-center justify-center  space-x-2 px-56 pt-8">
        {products.map((item) => {
          return (
            <div className="flex flex-col pt-8 justify-center">
              <img className="featureimg" src={item.picture} alt="" />
              <div className="flex flex-col items-center justify-center pt-4 space-y-2">
                <p className="text-sm font-bold opacity-80">{item.name}</p>
              </div>
              <div className="flex flex-row items-center px-6 pt-2 justify-between">
                <p className="price text-sm opacity-90">{item.price}$</p>
                <UilShoppingBag
                  className="cursor-pointer"
                  size="18"
                  color="#23856D"
                  onClick={(e) => handleCart(item)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row items-center justify-center py-16">
        <button className="productbtn text-xs font-bold px-6 py-2 ">
          LOAD MORE PRODUCTS
        </button>
      </div>
    </div>
  );
}

export default Featured;
