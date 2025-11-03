"use client";
import React from "react";
import useCartStore from "../components/Zustand/store";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const router = useRouter();
  const handleLogout = async () => {
    router.push("/dashboard");
  };

  const { cart, removeFromCart, clearCart } = useCartStore();
  console.log(cart, "Mehsullar");
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
      <div
        className={`${styles.logout} flex flex-row justify-between items-center`}
      >
        <h1>Your Products 🛒</h1>
        <button
          className="!cursor-pointer !w-20  !font-semibold !text-white !bg-blue-600 !rounded-lg hover:!bg-blue-700 !transition-all !-mt-4"
          onClick={handleLogout}
        >
          Cixis
        </button>
      </div>
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
