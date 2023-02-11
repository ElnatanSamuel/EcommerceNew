import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "./pages/Products";
import Home from "./pages/Home";

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
      </div>
    </Router>
  );
}

export default App;
