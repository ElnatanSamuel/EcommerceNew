import React, { useContext } from "react";
import Navbar from "./Navbar";
import { cartContext } from "../context/Context";
import { UilShoppingBag } from "@iconscout/react-unicons";

function ShowCart() {
  const { cartItems } = useContext(cartContext);
  return (
    <div className=" bg-black w-16 ">
      <div className="mt-16 mb-10 grid grid-cols-2 px-32">
        <div className="flex flex-col justify-center px-16 pt-8">
          {cartItems.map((item) => {
            return (
              <div className="flex flex-row pt-8 pr-8 ">
                <img className="featureimg2" src={item.picture} alt="" />
                <div className="text-center pt-4 space-y-4">
                  <p className="text-sm font-bold opacity-80">{item.name}</p>
                  <p className="price text-sm opacity-90">{item.price}$</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="paymentside mt-10"></div>
      </div>
    </div>
  );
}

export default ShowCart;
