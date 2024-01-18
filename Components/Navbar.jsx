"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import Cart from "./Cart";
const Navbar = () => {
  const { setShowCart, showCart, totalQty } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Abood</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQty}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
