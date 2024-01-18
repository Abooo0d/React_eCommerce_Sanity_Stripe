"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
export const Context = createContext({
  showCart: false,
  cartItems: null,
  totalPrice: 0,
  totalQty: null,
  qty: 1,
  incQty: () => {},
  decQty: () => {},
});
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQty, setTotalQty] = useState();
  const [qty, setQty] = useState(1);
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };
  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQty,
        qty,
        incQty,
        decQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
