import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import toast from "react-hot-toast";
const ProductForm = ({ onSubmit, editData, onCancel }) => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.title.trim() &&
      form.price &&
      form.category.trim() ||
      form.description.trim()
    ) {
    } else {
      toast.error("Bütün xanaları doldurun!");
      return;
    }
    onSubmit(form);
    setForm({ title: "", price: "", description: "", category: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form}  flex flex-col gap-3 mb-6 `}
    >
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Product Name"
        className={`${styles.input} py-3.5 pt-2.5 px-2.5 border border-[#ddd] rounded-[8px] text-[15px]`}
      />
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        type="number"
        className={`${styles.input} py-3.5 pt-2.5 px-2.5 border border-[#ddd] rounded-[8px] text-[15px]`}
      />
      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        className={`${styles.input} py-3.5 pt-2.5 px-2.5 border border-[#ddd] rounded-[8px] text-[15px]`}
      />

      <div className={styles.actions}>
        <button type="submit" className={`${styles.saveBtn}`}>
          Add Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
