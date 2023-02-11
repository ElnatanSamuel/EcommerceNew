import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "./pages/Products";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App m-auto max-w-7xl">
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
