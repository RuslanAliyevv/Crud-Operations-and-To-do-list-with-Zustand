"use client";
import React, { useEffect, useState } from "react";
import FilterBar from "../components/Filterbar/filterbar";
import axiosInstance from "../lib/axiosInstance";


export default function Page() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const categories = [
    { id: "1", name: "Texnologiya" },
    { id: "2", name: "İdman" },
    { id: "3", name: "Təhsil" },
    { id: "4", name: "Qanunvericilik" },
    { id: "5", name: "Beynəlxalq Münasibətlər" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/mockdata");
        setData(res.data);
        setFilteredData(res.data);
      } catch (error) {
        console.error("Data fetch xətası:", error);
      }
    };
    fetchData();
  }, []);

  // 🔹 Filter Function
  const handleFilterChange = (filters) => {
    let filtered = data;

    if (filters.title) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(filters.title.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter(
        (item) => item.categoryId === filters.category
      );
    }

    if (filters.date) {
      filtered = filtered.filter((item) => item.date.startsWith(filters.date));
    }

    setFilteredData(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center tracking-tight">
          🔍 Searching...
        </h1>

        {/* Filter Zone */}
        <div className="mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 border border-indigo-100 rounded-xl p-6 shadow-inner">
          <FilterBar
            categories={categories}
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* Result Card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="group bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full">
                    {item.categoryName}
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors duration-200">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description || "Bu kateqoriyada məlumat yoxdur."}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mb-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
              <p className="text-lg font-medium">Heç bir nəticə tapılmadı</p>
              <p className="text-sm">Fərqli filter dəyərləri yoxlayın 🔎</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
