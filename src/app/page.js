"use client";
import Navbar from "./Components/navbar";
import { useState } from "react";
import ProductList from "./Components/ProductList";
import Donate from "./Components/Donate";


export default function Home() {
  const [cart, setCart] = useState([]);

  console.log(cart,"from page")
  return (
    <>
      <Navbar cart={cart}/>
      <ProductList cart={cart} setCart={setCart}/>
     
      <Donate />

    </>
  );
}
