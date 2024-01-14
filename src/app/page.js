"use client";
import Navbar from "./Components/navbar";
import { useState,Fragment } from "react";
import ProductList from "./Components/ProductList";
import Cart from "./Components/cart";
import {  Transition } from "@headlessui/react";


export default function Home() {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false)

  console.log(cart,"from page")

  const handleOpen= ()=>{
  setOpen(false)
  }

  return (
    <>
      <Navbar cart={cart} setOpen={setOpen}/>
      <ProductList cart={cart} setCart={setCart}/>
       <Cart open={open} setOpen={handleOpen} cart={cart}/>
    </>
  );
}
