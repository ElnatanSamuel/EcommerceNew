import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

function Login() {
  const handleFormSubmit = (e) => {};
  return (
    <div className="loginpage flex justify-center items-center h-screen">
      <div className="loginwhole flex flex-col justify-center items-center space-y-4">
        <p className="text-xl font-extrabold text-center">LOGIN</p>
        <div className="flex flex-col text-center space-y-8 pt-4 pb-4">
          <input
            className="inputlogin px-4 py-2 text-sm"
            type="text"
            placeholder="Email"
            id="email"
          />
          <input
            className="inputlogin px-4 text-sm py-2"
            type="password"
            placeholder="Password"
          />
        </div>
        <p className="opacity-70 text-xs font-bold justify-start items-start">
          New here? Create an account{" "}
          <a href="/#" className="text-blue-500">
            here
          </a>
        </p>
        <button
          className="loginbtn2 w-52 text-xs font-bold"
          onClick={(e) => handleFormSubmit(e)}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
