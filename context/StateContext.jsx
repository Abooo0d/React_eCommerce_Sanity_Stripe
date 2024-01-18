"use client";
import product from "@/sanity_ecommerce/schemas/product";
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
  onAdd: () => {},
  setShowCart: () => {},
  toggleCartItemQuantity: () => {},
  onDelete: () => {},
});
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [qty, setQty] = useState(1);
  let foundProduct;
  let index;
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQty((prevTotalQty) => prevTotalQty + quantity);
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem._id === product._id)
          return {
            ...cartItem,
            qty: cartItem.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.qty = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} Added To The Cart.`);
    console.log(cartItems);
  };
  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    if (value === "inc") {
      let newCartItems = [...cartItems];
      foundProduct.qty += 1;
      newCartItems[index] = foundProduct;
      setCartItems(newCartItems);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQty((prevTotalQty) => prevTotalQty + 1);
    } else if (value === "dec") {
      if (foundProduct.qty > 1) {
        let newCartItems = [...cartItems];
        foundProduct.qty -= 1;
        newCartItems[index] = foundProduct;
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQty((prevTotalQty) => prevTotalQty - 1);
      }
    }
  };
  const onDelete = (product) => {
    const foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setTotalQty((prevTotalQty) => prevTotalQty - foundProduct.qty);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.qty
    );
    setCartItems(newCartItems);
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
        onAdd,
        setShowCart,
        toggleCartItemQuantity,
        onDelete,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
