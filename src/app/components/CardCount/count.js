"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useCartStore from "../Zustand/store";
import styles from "./styles.module.css";

const MiniCart = () => {
  const cart = useCartStore((state) => state.cart);
  const router = useRouter();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className={styles.miniCart} style={{ cursor: "pointer" }}>
      <span onClick={() => router.push("/card")}>🛒</span>
      {totalItems >= 0 && <span className={styles.badge}>{totalItems}</span>}
    </div>
  );
};
export default MiniCart;



