import React from "react";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

function Navbar() {
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

        <Link to="/about">
          <p className="cursor-pointer">About</p>
        </Link>
        <Link to="/blog">
          <p className="cursor-pointer">Blog</p>
        </Link>
        <Link to="/contact">
          <p className="cursor-pointer">Contact</p>
        </Link>
      </div>

      <div className=" flex flex-row items-center  space-x-4">
        <p className="loginbtn cursor-pointer text-xs font-bold">
          Login/Register
        </p>
        <UilShoppingBag className="cursor-pointer" size="20" color="#23A6F0" />
      </div>
    </div>
  );
}

export default Navbar;
