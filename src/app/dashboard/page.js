"use client";
import React, { useEffect, useState } from "react";
import api from "../api";
import ProductList from "../components/ProductList/list";
import ProductForm from "../components/ProductForm/form";
import styles from "./styles.module.css";
import EditModal from "../components/EditModal/modal";
import toast, { Toaster } from "react-hot-toast";
import MiniCart from "../components/CardCount/count";
import SearchInput from "../components/SearchFilter/search";
import { useCallback } from "react";
import { showToast } from "../utils/toaster";
// import { debounce } from "lodash";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await api.get("/products");
      setProducts(res.data);
      setFiltered(res.data);
      console.log(res.data);
    } catch (error) {
      showToast.error("Məhsullar yüklənmədi!");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = useCallback(
    (query) => {
      if (!query) {
        setFiltered(products);
        return;
      }
      const result = products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(result);
    },
    [products]
  );

  const handleAdd = async (data) => {
    setLoading(true);
    try {
      const res = await api.post("/products", data);
      setProducts([res.data, ...products]);
      showToast("Məhsul uğurla əlavə olundu!");
    } catch (error) {
      showToast.error("Xəta baş verdi!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setEditData(product);
    setIsEditOpen(true); // modal aç
  };

  const handleUpdate = async (data) => {
    if (!editData) return;
    setLoading(true);
    try {
      const res = await api.put(`/products/${editData.id}`, data);
      setProducts(products.map((p) => (p.id === editData.id ? res.data : p)));
      setIsEditOpen(false);
      setEditData(null);
      showToast("Məhsul ugurla yenilendi");
    } catch (error) {
      showToast.error("Məhsul yenilənərkən xəta baş verdi!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await api.delete(`/products/${id}`);
      setProducts(products.filter((p) => p.id !== id));
      showToast("Məhsul uğurla silindi!");
    } catch (error) {
      showToast.error("Məhsul silinərkən xəta baş verdi!");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <MiniCart /> Products
      </h1>
      <div style={{ padding: "10px", textAlign: "center" }}>
        <SearchInput onSearch={handleSearch} placeholder="Search..." />
      </div>
      <ProductForm
        onSubmit={handleAdd}
        editData={editData}
        onCancel={() => setEditData(null)}
      />
      {loading ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <div className={styles.spinner}></div>
          Loading...
        </div>
      ) : (
        <ProductList
          products={filtered}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
      {isEditOpen && editData && (
        <EditModal
          product={editData}
          onClose={() => setIsEditOpen(false)}
          onSubmit={handleUpdate}
          loading={loading}
        />
      )}
      <Toaster position="top-right" reverseOrder={false} />{" "}
    </div>
  );
};
export default Dashboard;




