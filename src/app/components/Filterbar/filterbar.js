"use client";
import React, { useState } from "react";

const FilterBar = ({
  categories = [],
  onFilterChange,
  visibleFilters = ["title", "category", "date"],
}) => {
  const [filters, setFilters] = useState({
    title: "",
    category: "",
    date: "",
  });

  const handleChange = (key, value) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onFilterChange(updated);
  };

  const handleReset = () => {
    const reset = { title: "", category: "", date: "" };
    setFilters(reset);
    onFilterChange(reset);
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 bg-white p-4 rounded-2xl shadow-md">
      {/*  Title */}
      {visibleFilters.includes("title") && (
        <input
          type="text"
          placeholder="Başlığa görə axtar..."
          value={filters.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-blue-400 outline-none"
        />
      )}

      {/*  Category */}
      {visibleFilters.includes("category") && (
        <select
          value={filters.category}
          onChange={(e) => handleChange("category", e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-blue-400 outline-none"
        >
          <option value="">Kateqoriya seç</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      )}

      {/*  Date */}
      {visibleFilters.includes("date") && (
        <input
          type="date"
          value={filters.date}
          onChange={(e) => handleChange("date", e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-blue-400 outline-none"
        />
      )}

      <button
        onClick={handleReset}
        className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-200 transition"
      >
        Təmizlə
      </button>
    </div>
  );
};

export default FilterBar;
