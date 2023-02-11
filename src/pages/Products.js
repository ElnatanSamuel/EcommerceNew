import React from "react";
import Footer from "../components/Footer";
import Logos from "../components/logos";
import Navbar from "../components/Navbar";
import Product from "../components/product/Product";
import Shop from "../components/product/Shop";

function Products() {
  return (
    <div>
      <Navbar />
      <Shop />
      <Product />
      <Logos />
      <Footer />
    </div>
  );
}

export default Products;
