"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const SearchInput = ({ onSearch, placeholder = "Axtar..." }) => {
  const [value, setValue] = useState("");

  Debounce: useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(value.trim());
    }, 100);

    return () => clearTimeout(timeout);
  }, [value, onSearch]);

  return (
    <input
      type="text"
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
export default SearchInput;

