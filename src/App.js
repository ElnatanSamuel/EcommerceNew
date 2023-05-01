import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import { cartContext } from "./context/Context";
import ShowCart from "./components/ShowCart";
import Login from "./components/login/Login";
import { UilMultiply } from "@iconscout/react-unicons";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./components/firebase";

function App() {
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [price, setPrice] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authUser, setAuthUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [notSignedup, setNotSignedUp] = useState(false);
  const [userSignedUp, setUserSignedUp] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCrederntial) => {
        setAuthUser(userCrederntial.user.email);
        setNotSignedUp(false);
        setLogin(false);
      })
      .catch((err) => {
        console.log(err);
        setNotSignedUp(true);
        setLogin(true);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCrederntial) => {
        setAuthUser(userCrederntial.user.email);
        setUserSignedUp(false);
        setRegister(false);
      })
      .catch((err) => {
        console.log(err);
        setUserSignedUp(true);
        setRegister(true);
      });
  };

  const handleChangeLogin = () => {
    setLogin(false);
    setRegister(true);
  };

  const handleChangeRegister = () => {
    setLogin(true);
    setRegister(false);
  };

  return (
    <cartContext.Provider
      value={{
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
      }}
    >
      <Router>
        <div className="App m-auto max-w-7xl relative">
          <Routes>
            <Route path="/products" element={<Products />} />
          </Routes>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Routes>
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/basket" element={<ShowCart />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          {login ? (
            <div className="loginpage flex justify-center items-center h-screen bg-transparent z-50">
              <div className="loginwhole flex flex-col justify-center items-center space-y-4 relative">
                <UilMultiply
                  className="absolute top-6 right-6 cursor-pointer"
                  size={25}
                  color="#000"
                  onClick={() => setLogin(false)}
                />
                <p className="text-2xl font-extrabold text-center">LOGIN</p>
                {notSignedup ? (
                  <p className="p-4 bg-red-600 text-white text-sm font-bold">
                    Email or Password incorrect
                  </p>
                ) : null}
                <div className="flex flex-col text-center space-y-8 pt-4 pb-4">
                  <input
                    className="inputlogin px-4 py-2 text-sm"
                    type="text"
                    placeholder="Email"
                    id="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                  <input
                    className="inputlogin px-4 text-sm py-2"
                    type="text"
                    placeholder="Password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </div>
                <p className="opacity-70 text-xs font-bold justify-start items-start">
                  New here? Create an account{" "}
                  <a
                    href="/#"
                    className="text-blue-500"
                    onClick={() => handleChangeLogin()}
                  >
                    here
                  </a>
                </p>
                <button
                  className="loginbtn2 w-52 text-xs font-bold"
                  onClick={(e) => handleSignIn(e)}
                >
                  Login
                </button>
              </div>
            </div>
          ) : null}

          {register ? (
            <div className="loginpage flex justify-center items-center h-screen bg-transparent z-50">
              <div className="loginwhole flex flex-col justify-center items-center space-y-4 relative">
                <UilMultiply
                  className="absolute top-6 right-6 cursor-pointer"
                  size={25}
                  color="#000"
                  onClick={() => setRegister(false)}
                />
                <p className="text-2xl font-extrabold text-center">Register</p>
                {userSignedUp ? (
                  <p className="p-4 bg-red-600 text-white text-sm font-bold">
                    Email already in use
                  </p>
                ) : null}
                <div className="flex flex-col text-center space-y-8 pt-4 pb-4">
                  <input
                    className="inputlogin px-4 py-2 text-sm"
                    type="text"
                    placeholder="Set email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="inputlogin px-4 text-sm py-2"
                    type="text"
                    placeholder="Set password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* <input
                    className="inputlogin px-4 text-sm py-2"
                    type="text"
                    placeholder="Repeat password"
                  /> */}
                </div>
                <p className="opacity-70 text-xs font-bold justify-start items-start">
                  Already have an account? login{" "}
                  <a
                    href="/#"
                    className="text-blue-500"
                    onClick={() => handleChangeRegister()}
                  >
                    here
                  </a>
                </p>
                <button
                  className="loginbtn2 w-52 text-xs font-bold"
                  onClick={(e) => handleSignUp(e)}
                >
                  Register
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </Router>
    </cartContext.Provider>
  );
}

export default App;
