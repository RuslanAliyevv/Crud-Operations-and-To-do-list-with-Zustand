"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataTable() {
  const [items, setItems] = useState([]);
  const [role, setRole] = useState(null);
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const r = localStorage.getItem("userRole");
    const n = localStorage.getItem("userName");

    setRole(r);
    setName(n);

    (async () => {
      try {
        const res = await axios.get("/api/data");
        setItems(res.data.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function handleDelete(id) {
    try {
      const res = await axios.delete(`/api/delete/${id}`, { data: { role } });
      if (res.data.success) {
        setItems((prev) => prev.filter((it) => it.id !== id));
      }
    } catch (err) {
      alert(err.response?.data?.message || "Delete error");
    }
  }

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Welcome, {name}{" "}
          <span className="text-gray-500 text-sm">({role})</span>
        </h2>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
          className=" text-[16px] cursor-pointer text-blue-600 underline font-bold"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500 text-center py-8">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Not information</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Job</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Available</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it) => (
                <tr
                  key={it.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3">{it.id}</td>
                  <td className="p-3">{it.title}</td>
                  <td className="p-3">{it.description}</td>
                  <td className="p-3">{it.createdAt}</td>

                  <td className="p-3 flex items-center gap-3">
                    {role === "admin" ? (
                      <>
                        <button
                          onClick={() => alert(`ID ${it.id} Congratulations`)}
                          className="bg-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition"
                        >
                          Add
                        </button>

                        <button
                          onClick={() => alert(`ID ${it.id} update`)}
                          className="bg-yellow-500 text-white px-3 py-1.5 rounded-lg hover:bg-yellow-600 transition"
                        >
                          Update
                        </button>

                        <button
                          onClick={() => handleDelete(it.id)}
                          className="bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600 transition"
                        >
                          Delete
                        </button>

                        <span className="px-2 py-1 rounded-md text-xs font-semibold bg-green-100 text-green-700">
                          Active
                        </span>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => alert(`ID ${it.id} Congratulations`)}
                          className="bg-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition"
                        >
                          Add
                        </button>

                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded-md text-xs font-semibold">
                          Disabled
                        </span>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
