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

function App() {
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [price, setPrice] = useState(0);

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
                <div className="flex flex-col text-center space-y-8 pt-4 pb-4">
                  <input
                    className="inputlogin px-4 py-2 text-sm"
                    type="text"
                    placeholder="Email"
                    id="email"
                  />
                  <input
                    className="inputlogin px-4 text-sm py-2"
                    type="text"
                    placeholder="Password"
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
                <button className="loginbtn2 w-52 text-xs font-bold">
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
                <div className="flex flex-col text-center space-y-8 pt-4 pb-4">
                  <input
                    className="inputlogin px-4 py-2 text-sm"
                    type="text"
                    placeholder="Set email"
                    id="email"
                  />
                  <input
                    className="inputlogin px-4 text-sm py-2"
                    type="text"
                    placeholder="Set password"
                  />
                  <input
                    className="inputlogin px-4 text-sm py-2"
                    type="text"
                    placeholder="Repeat password"
                  />
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
                <button className="loginbtn2 w-52 text-xs font-bold">
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
