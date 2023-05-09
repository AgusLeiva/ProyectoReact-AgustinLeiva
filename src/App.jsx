import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import {  Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout"

import db from "../db/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={ <Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;