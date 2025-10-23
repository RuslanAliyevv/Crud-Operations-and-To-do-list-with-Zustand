"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"; // CSS module

const EditModal = ({ product, onClose, onSubmit,}) => {
  const [title, setTitle] = useState(product.title || "");
  const [price, setPrice] = useState(product.price || "");
  const [category, setCategory] = useState(product.category || "");

  useEffect(() => {}, [product]);

  const handleSubmit = () => {
    onSubmit({ title, price, category });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.heading}>Məhsulu redaktə et</h2>

        <div className={styles.formGroup}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Məhsul adı"
            className={styles.input}
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Qiymət"
            className={styles.input}
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className={styles.input}
          />
        </div>

        <div className={styles.buttons}>
          <button onClick={onClose} className={styles.cancelBtn}>
            Ləğv et
          </button>
          <button onClick={handleSubmit} className={styles.saveBtn}>
            Yadda saxla
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
