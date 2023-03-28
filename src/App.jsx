
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import CardDetail from "./components/CardDetail";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";



function App() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) =>   {
      setProductos(data);
    });
  }, []);



  return (

     <div>
      <Navbar icono="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqWnvWlrNEMWXXy-SpDyiD6MGp8lMPegST4A&usqp=CAU" />
      <h1>My app</h1>
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
        
        <Route path="/home" element={<Home />} />
        <Route
          path="/products"
          element={<ProductList productos={productos} />}
        />
        <Route path="/productos/:id" element={<CardDetail />} />
        <Route path="/cart" element={<h3>Cart</h3>} />
        <Route path="/404" element={<h2>404 Not Found</h2>} />
        <Route path="*" element={<Navigate to="/404" />} />

      </Routes>

     </div> 
   
  ) 
}

export default App
