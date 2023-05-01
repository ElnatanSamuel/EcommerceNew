import React, { useContext, useState } from "react";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { cartContext } from "../context/Context";
import { UilUserCircle } from "@iconscout/react-unicons";

import { UilTrash } from "@iconscout/react-unicons";
import { auth } from "./firebase";

function Navbar() {
  const {
    cart,
    setCart,
    cartItems,
    setCartItems,
    login,
    setLogin,
    price,
    setPrice,
    authUser,
    setAuthUser,
  } = useContext(cartContext);

  const [cartClicked, setCartClicked] = useState(false);
  const [userSigned, setUserSigned] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    setAuthUser(null);
    setUserSigned(false);
  };

  const handleUserView = () => {
    if (authUser != null) {
      setUserSigned(!userSigned);
    }
  };

  const handleDelete = (item, e) => {
    const index = cartItems.indexOf(item);
    const newCartItem = cartItems
      .slice(0, index)
      .concat(cartItems.slice(index + 1));

    setCartItems(newCartItem);
    setCart(cart - 1);
    setPrice(price - item.price);
  };
  const handleRemoveAll = () => {
    setCart(0);
    setCartItems([]);
    setPrice(0);
  };
  return (
    <div className="flex flex-row items-center py-5 px-10 fixed w-full top-0 z-50 bg-white justify-between h-14 max-w-7xl">
      <p className="text-xl font-bold">KTK2REAL</p>
      <div className="flex flex-row space-x-6 font-semibold opacity-70 text-xs ">
        <Link to="/">
          <p className="cursor-pointer">Home</p>
        </Link>
        <Link to="/products">
          <p className="cursor-pointer">Products</p>
        </Link>
      </div>
      {userSigned === true ? (
        <div className="h-32 w-60 absolute top-16 right-2 bg-white space-y-4">
          <p className="pt-4 pl-4">Email: {authUser}</p>
          <button
            className="ml-4 mb-8 p-3 bg-red-600 text-white rounded-lg"
            onClick={(e) => handleLogout(e)}
          >
            Logout
          </button>
        </div>
      ) : null}
      <div className=" flex flex-row items-center  space-x-4 relative">
        {authUser === null || authUser === "" ? (
          <p
            className="loginbtn cursor-pointer text-xs font-bold"
            onClick={() => setLogin(!login)}
          >
            Login/Register
          </p>
        ) : (
          <UilUserCircle
            size="18"
            className="cursor-pointer"
            onClick={(e) => handleUserView(e)}
          />
        )}
        <div onClick={() => setCartClicked(!cartClicked)}>
          <UilShoppingBag
            className="cursor-pointer"
            size="20"
            color="#23A6F0"
          />
        </div>

        {cartClicked ? (
          <div className="cartdrop overflow-x-hidden bg-white">
            <div className="cartitem flex flex-col  overflow-x-hidden  pt-4">
              {cartItems.map((item) => {
                return (
                  <div className="flex flex-row items-center w-full pt-4 pr-8 ">
                    <img className="featureimg2" src={item.picture} alt="" />
                    <div className="text-center pt-4 space-y-4">
                      <p className="text-sm font-bold opacity-80">
                        {item.name}
                      </p>
                      <p className="price text-sm opacity-90">{item.price}$</p>
                    </div>
                    <div className="pl-32 ">
                      <UilTrash
                        className="cursor-pointer"
                        size="20"
                        color="#23a6f0"
                        onClick={(e) => handleDelete(item, e)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-sm font-bold opacity-70 py-2">
              Total Price: {price}${" "}
            </p>
            <div className="flex opacity-80 flex-col space-y-1 pt-4">
              <button
                className="bg-red-600 rounded-md text-white text-sm font-bold p-2"
                onClick={(e) => handleRemoveAll()}
              >
                Remove all
              </button>
              <button className="bg-black opacity-80 text-white rounded-md text-sm font-bold p-2">
                Check out
              </button>
            </div>
          </div>
        ) : null}
        <p className="topbadge">{cart}</p>
      </div>
    </div>
  );
}

export default Navbar;
