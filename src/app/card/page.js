"use client";
import React from "react";
import useCartStore from "../components/Zustand/store";
import styles from "./styles.module.css";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();
  console.log(cart,"Mehsullar")
  if (cart.length === 0)
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "36px",
          color: "red",
          fontFamily: "bold",
        }}
      >
        No Product.
      </p>
    );

  return (
    <div className={styles.cart}>
      <h1>Your Products 🛒</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt="" />{" "}
            <p className={styles.title}>
              {item.title} - {item.price}₼
            </p>{" "}
            <p className={styles.quantity}>{item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>
        <strong>Total Product: </strong>{" "}
        {cart.reduce((acc, i) => acc + i.quantity, 0)}
      </p>
      <button onClick={clearCart}>Clear basket</button>
    </div>
  );
};

export default CartPage;
