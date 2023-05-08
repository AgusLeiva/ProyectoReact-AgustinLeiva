import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import {  Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import db from "../db/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

function App() {

  const [items, setItems] = useState([]);
  const itemsRef = collection(db, "products");
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const getItems = async () => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setItems(items);
  };

  const addItem = async (e) => {
    e.preventDefault();
    const item = {
      title: inputTitle,
      price: inputPrice,
    };
    await addDoc(itemsRef, item);
    getItems();
    setInputTitle("");
    setInputPrice("");
  };

  useEffect(() => {
    getItems();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={Home} />
        <Route exact path="/products" element={Products} />
        <Route exact path="/products/:id" element={Product} />
        <Route exact path="/cart" element={Cart} />
      </Routes>
    </>
  );
}

export default App;