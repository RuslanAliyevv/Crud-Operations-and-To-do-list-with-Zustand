import React from "react";
import styles from "./styles.module.css";
import useCartStore from "../Zustand/store";
import { motion, AnimatePresence } from "framer-motion";
import { showToast } from "../../utils/toaster";
const ProductList = ({ products, onEdit, onDelete }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Options</th>
        </tr>
      </thead>
      <AnimatePresence>
        <tbody>
          {products.map((p) => (
            <motion.tr
              key={p.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="hover:bg-gray-100 transition-colors duration-300"
            >
              <td>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className={styles.productImage}
                  />
                ) : (
                  <div className={styles.noImage}>No Image</div>
                )}
              </td>

              <td>
                {p.title.length > 20 ? p.title.slice(0, 20) + "..." : p.title}
              </td>

              <td>{p.price} ₼</td>
              <td>{p.category}</td>

              <td>
                <button onClick={() => onEdit(p)} className={styles.editBtn}>
                  Update
                </button>
                <button
                  onClick={() => onDelete(p.id)}
                  className={styles.deleteBtn}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    addToCart(p);
                    showToast("Məhsul səbətə əlavə olundu!");
                  }}
                  className={styles.addToCartBtn}
                >
                  Add
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </AnimatePresence>
    </table>
  );
};
export default ProductList;
