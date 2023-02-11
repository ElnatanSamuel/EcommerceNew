import React from "react";
import Logo from "../assets/logos.svg";

function Logos() {
  return (
    <div className="heigh flex justify-center h-2">
      <img className="logoimg" src={Logo} alt="" />
    </div>
  );
}

export default Logos;
